/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Cochin car rentals",
    titleTemplate: "%s · Rent cars like never before",
    description: "The right place to rent cars in kochi.",
    url: "https://cochin-car-rentals.netlify.app", // No trailing slash allowed!
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@_mdrj",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    // {
    //   resolve: `gatsby-source-google-places`,
    //   options: {
    //     placeIds: ["ChIJ3bMPiEYHCDsRiyVTkkcGdB4"],
    //     apiKey: "AIzaSyAmcGxMOQGofE_eoCi-VbkOH_fwHXI2GKQ",
    //   },
    // },
  ],
}
