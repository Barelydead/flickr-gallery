import GalleryImage from "./GalleryImage"

export default function GalleryGrid({ images }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12">
        { images.map((photo, index) => {
          return (
            <GalleryImage image={photo} index={index} />
          )
        })}
      </div>
    </>
  )
}