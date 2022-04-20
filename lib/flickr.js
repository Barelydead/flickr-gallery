import qs from 'qs';
import config from '../config';

const API_KEY = process.env.NEXT_PUBLIC_FLICKR_KEY
const API_URL = process.env.NEXT_PUBLIC_FLICKR_API_URL

/**
 * Get image gallery.
 * 
 * @param id int|boolean
 */
const getGallery = async (id = false) => {
  const query = qs.stringify({
    method: 'flickr.galleries.getPhotos',
    api_key: API_KEY,
    gallery_id: id || config.defaultGallery,
    format: 'json',
    extras: 'url_m,url_l,description',
    nojsoncallback: 1,
    get_gallery_info: 1,
    per_page: 10
  });

  const res = await fetch(`${API_URL}?${query}`).then(res => res.json())

  return res;
}

module.exports = {
  getGallery
}