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

## Perfomance

[Cklick here](https://pagespeed.web.dev/report?url=https%3A%2F%2Fflickr-gallery-gray.vercel.app%2F) to run pagespeed analysis.

## Todos and improvments 

- Build out the UI
- Add automated tests using cypress or other testing framework
- Change from load more button to infinity scroll
- Dynamically fetch galleries
