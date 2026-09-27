/// <reference types="vite/client" />
/** Resolve local assets at the site root or a GitHub Pages project subpath. */
export const assetUrl=(path:string)=>import.meta.env.BASE_URL+path.replace(/^\//,'');
