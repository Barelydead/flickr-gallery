export default function GalleryIntro({ gallery }) {
  return (
    <div className="p-10 text-center my-20 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">{gallery.title}</h1>
      { gallery.user &&
        <h4 className="font-bold mt-4">a gallery curated by { gallery.user }</h4>
      }

      <div className="mt-10" dangerouslySetInnerHTML={ { __html: gallery.description } }></div>
      <div className="mt-10 flex gap-4 justify-center">
        <span>{ gallery.count } items</span>
        <span>{ gallery.views } views</span>
      </div>
    </div>

  )
}