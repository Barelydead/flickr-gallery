## View the project

This project is publicly available at [https://flickr-gallery-gray.vercel.app/](https://flickr-gallery-gray.vercel.app/)

## Getting Started

To run project in development:

Add an environment file
```bash
cp .env.example .env.local
```
Required env variabels is
- `NEXT_PUBLIC_FLICKR_API_URL`
- `NEXT_PUBLIC_FLICKR_KEY`

Install the project and run dev server

```bash
# Install dependencies.
yarn 

# Run dev server.
yarn dev
```