import Head from 'next/head'
import { getGallery } from '../lib/flickr'
import GalleryCategories from '../components/GalleryCategories'
import GalleryIntro from '../components/GalleryIntro'
import GalleryGrid from '../components/GalleryGrid'
import { useState, useEffect } from 'react'

export default function Gallery({ photos, gallery, meta }) {
  // Set photos prop as state so we can append when user loads more.
  const [images, setImages] = useState(photos);
  const [currentPage, setCurrentPage] = useState(1);

  // Load more images from the api and append to state
  const loadMore = async () => {
    const data = await getGallery(gallery.id, currentPage + 1);
    
    setCurrentPage(currentPage + 1);
    setImages((images) => [...images, ...data.photos.photo]);
  }

  // Reset state on prop change.
  useEffect(() => {
    setImages(photos);
    setCurrentPage(1)
  }, [photos])

  return (
    <div>
      <Head>
        <title>{ `Flickr gallery || ${gallery.title}` }</title>
        <meta name="description" content="Flickr gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GalleryIntro gallery={gallery}/>
      
      <div className="px-4 max-w-screen-2xl mx-auto">
        <GalleryCategories />
        <GalleryGrid images={images} />
      </div>

      <div className="p-8 text-center">
        {
          images.length !== meta.total &&
          <button 
            className="px-4 py-2 bg-black text-white rounded hover:scale-105 transition transform"
            onClick={() => loadMore() }  
          >Load more</button>
        }
        <p className="mt-4">Showing { images.length } of { meta.total }</p>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await getGallery();

  const photos = data?.photos?.photo || [];
  const gallery = data?.gallery || {};
  const meta = {
    page: data.photos.page,
    pages: data.photos.perpage,
    perpage: data.photos.perpage,
    total: data.photos.total
  }

  return {
    props: {
      photos,
      meta,
      gallery: {
        title: gallery?.title?._content || 'Flickr gallery',
        description: gallery?.description?._content || 'Flickr gallery',
        id: gallery?.id,
        user: gallery?.username,
        views: gallery?.count_views,
        count: gallery?.count_total
      }
    },
  }
}