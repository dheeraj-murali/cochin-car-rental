export const config = packages =>
  packages.map(image => {
    const name = image.node.name
    const banner = image.node.childImageSharp.fluid

    if (name === "package1")
      return {
        title: `Are you planning a trip to Sabarimala on this season?`,
        content: `If you're looking for a reliable car rental option in Kochi, Cochin Car Rentals gives you a variety of options to choose. Whether you're looking for extra legroom or a luggage carrier, you can pick from any of our extensive fleet options.`,
        banner,
      }

    if (name == "package2")
      return {
        title: `Get the blessing from Lord Krishna`,
        content: `We provide reliable car rental options from Kochi to the Guruvayur Temple. With a verity of rental options to choose from, we guarantee to provide the best service available for you.`,
        banner,
      }
  })
