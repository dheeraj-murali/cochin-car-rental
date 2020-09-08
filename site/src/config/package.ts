export const config = packages =>
  packages.map(image => {
    const name = image.node.name
    const banner = image.node.childImageSharp.fluid

    if (name === "package1")
      return {
        title: `Are you planning a trip to Sabarimala on this season?`,
        content: `If you're looking for reliable car rental options in Kochi, Cochin Car Rentals provides a wide variety of taxis you can choose from. Whether you're looking for extra leg room or a luggage carrier, you can pick from any of our Sedan, SUV or Minivan options.`,
        banner,
      }

    if (name == "package2")
      return {
        title: `Take a dream trip to Munnar`,
        content: `We provide reliable car rental options from Kochi to the relaxing wilderness of Munnar tea estates. With a verity of rental options to choose from, we guarantee to provide the best service available for you.`,
        banner,
      }
  })
