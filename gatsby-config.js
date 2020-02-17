module.exports = {
  siteMetadata: {
    title: `2Taps Winebar`,
    description: `Nestled in the heart of Belfast, boasting one of Belfast's largest outdoor dining experiences. 2Taps is the perfect place to meet, relax, share food and soak up the atmosphere.`,
    author: `@pcollinsTech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //       // Setting this parameter is optional
    //       cookieName: "YOUR_CUSTOM_COOKIE_NAME", // default is gatsby-gdpr-google-analytics
    //       anonymize: true, // default is true
    //     },
    //     facebookPixel: {
    //       pixelId: "YOUR_FACEBOOK_PIXEL_ID",
    //       // Setting this parameter is optional
    //       cookieName: "YOUR_CUSTOM_COOKIE_NAME", // default is gatsby-gdpr-facebook-pixel
    //     },
    //     // Defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ["production"],
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/assets/images/logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-158682739-1", // <- your tracking ID
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
