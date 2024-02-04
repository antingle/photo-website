# Fast, Responsive, Beautiful Photography Website

👋 Hey this is my personal photography website that I use to advertise my services! I had a lot of fun building it!

![Screenshot of Home Page](images/screenshot1.png)

## Architecture

- The website is built using [Astro](https://astro.build) templates, Typescript scripts and TailwindCSS.
- Simple packages such as [lazysizes](https://github.com/aFarkas/lazysizes) and [minimasonry](https://github.com/Spope/MiniMasonry.js) improve lazy loading and the gallery experience
- Images are stored and served using [ImageKit CDN](https://imagekit.io)
- The contact page sends transactional emails using [Brevo](https://brevo.com) (previously Sendinblue)
- Booking links are linked to [Cal.com](https://cal.com)
- The site is deployed on [Vercel](https://vercel.com)

## Features

This architecture with Astro, ImageKit and more, makes for some pretty fantastic features.

- [Astro view transitions](https://docs.astro.build/en/guides/view-transitions/) make navigating the SSR site a smooth experience
- [ImageKit image transformations](https://docs.imagekit.io/features/image-transformations) allow for me to drag and drop full size images into ImageKit, who then can serve them with an exact pixel match size to the screen looking at the webpage

## Notes

- ImageKit has a fantastic writeup [here](https://imagekit.io/responsive-images/) on responsive images and techniques on how to best serve them. This was an immense help to me when setting up efficient image delivery.
- If you want to copy my setup, my images are stored in `/portfolio/[category]` inside ImageKit
