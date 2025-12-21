export default function manifest() {
  return {
    name: 'Jadoon Technologies',
    short_name: 'Jadoon Tech',
    description: 'Leading AI and Software Development Agency',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#2563eb',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}