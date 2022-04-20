import Link from 'next/link'
import config from '../config'

export default function GalleryCategories() {
  return (
    <>
      <ul className='flex gap-4 py-4 flex-wrap'>
        {config.galleries.map((gallery, index) => {
          return (
            <li key={index}>
              <Link href={`/galleries/${gallery.id}`}>
                <a className="inline-block px-4 bg-slate-200 text-black rounded-sm transition hover:text-white hover:bg-black">{gallery.label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}