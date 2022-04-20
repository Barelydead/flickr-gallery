import qs from 'qs';
import config from '../config';

const API_KEY = process.env.NEXT_PUBLIC_FLICKR_KEY
const API_URL = process.env.NEXT_PUBLIC_FLICKR_API_URL

/**
 * Get image gallery.
 * 
 * @param id 
 */
const getGallery = async (id = false, page = 1) => {
  const query = qs.stringify({
    method: 'flickr.galleries.getPhotos',
    api_key: API_KEY,
    gallery_id: id || config.defaultGallery, // fallback to default gallery when ID is not sent in
    format: 'json',
    extras: 'url_m,url_l,description',
    nojsoncallback: 1,
    get_gallery_info: 1,
    per_page: "8",
    page
  });

  const res = await fetch(`${API_URL}?${query}`).then(res => res.json())

  return res;
}

module.exports = {
  getGallery
}