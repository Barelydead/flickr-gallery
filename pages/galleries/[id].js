import Head from 'next/head'
import { getGallery } from '../../lib/flickr'
import GalleryCategories from '../../components/GalleryCategories'
import GalleryIntro from '../../components/GalleryIntro'
import GalleryGrid from '../../components/GalleryGrid'
import config from '../../config'

export default function Gallery({ images, gallery }) {
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

      <div>
        <button>Load more</button>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await getGallery(id);

  const images = data?.photos?.photo || [];
  const gallery = data?.gallery || {};

  return {
    props: {
      images,
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

export async function getStaticPaths() {
  const paths = config.galleries.map((gallery) => {
    return {
      params: {
        id: gallery.id
      }
    }
  })

  return {
    paths,
    fallback: false
  };
}