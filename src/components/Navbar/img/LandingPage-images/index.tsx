export { default as banner } from './banner-bg.png';
export { default as logo } from './logo.png';
export { default as navbar } from './navbar.jpg';
const IMAGES = {
  logo: new URL('./logo.png', import.meta.url).href,
  banner: new URL('./banner-bg.png', import.meta.url).href,
  navbar: new URL('./navbar.jpg', import.meta.url).href,
}

export default IMAGES;
