module.exports = {
  siteMetadata: {
    title: "Jörg Lauenroth",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jörg Lauenroth",
        short_name: "Jörg.dev",
        start_url: "/",
        background_color: "#1d3557",
        theme_color: "#1d3557",
        display: "standalone",
        lang: "en",
        icons: [
          {
            src: `src/images/jorg192.webp`,
            sizes: `192x192`,
            type: `image/webp`,
          },
          {
            src: `src/image/jorg.webp`,
            sizes: `512x512`,
            type: `image/webp`,
          },
          {
            src: `src/image/jorg.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/", "/about/", "/projects/", "/uses/"],
        workboxConfig: {
          globPatterns: ["**/images*"],
        },
      },
    },
  ],
};
