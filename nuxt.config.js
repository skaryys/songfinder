module.exports = {
  head: {
    title: 'Spotify SongFinder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#282828'},
      { name: "format-detection", content: "telephone=no"},
      { property: "og:title", content: "Spotify SongFinder"},
      { property: "og:description", name: "description", content: "Find your song!"},
      { property: "og:url", content: "http://songfinder.skaramart.in"},
      { property: "og:image", content: "http://songfinder.skaramart.in/ogimage.jpg"},
      { property: "og:site_name", content: "Spotify SongFinder"},
      { property: "og:type", content: "website"},
      { property: "og:locale", content: "en_EN"},
      { name: "twitter:card", content: "summary_large_image"}
    ],
    link: [
      { href: "https://www.scdn.co/i/_global/favicon.png", rel: "icon", type: "image/png"},
      { rel: "author", href: "http://skaramart.in"}
    ]
  },
  plugins: [
    "~/plugins/spotify.js"
  ],
  /*
  ** Customize the progress bar color
  */
  css: ["~/assets/styles/main.sass"],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["spotify-web-api-node", "vue-spotify"],
  }
};
