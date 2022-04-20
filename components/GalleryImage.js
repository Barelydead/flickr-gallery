import Image from 'next/image'
import Link from 'next/link'

export default function getGalleryImage({ image, index }) {
  return (
    <Link href={image.url_l}>
      <div className={`sm:max-w-sm rounded overflow-hidden shadow-lg transition hover:scale-105 hover:cursor-pointer`}>
        <div className="relative h-64">
          <Image className="object-cover" key="1" src={image.url_l} layout="fill" />
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-sm font-bold">
            { image.title }
          </p>
        </div>
      </div>
    </Link>
  )
}