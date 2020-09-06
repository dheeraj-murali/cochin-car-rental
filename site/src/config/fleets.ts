export const config = fleets => {
  return fleets
    .map(image => {
      const name = image.node.name
      const banner = image.node.childImageSharp.fluid

      if (name === "fleet1") {
        return {
          title: `Standard Class`,
          type: `Hatchbacks / Sedans`,
          seats: `4`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 1,
        }
      }

      if (name === "fleet2") {
        return {
          title: `Business Class`,
          type: `Sedans`,
          seats: `4`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 2,
        }
      }

      if (name === "fleet3") {
        return {
          title: `Family Class`,
          type: `SUV / Traveller`,
          seats: `4 - 12`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 3,
        }
      }

      if (name === "fleet4") {
        return {
          title: `Bus Class`,
          type: `Bus / Mini bus`,
          seats: `12 - 24`,
          tags: [
            "AC",
            "24 Hr customer service",
            "charged per day",
            "safety",
            "Road side assistance",
          ],
          banner,
          id: 4,
        }
      }
    })
    .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
}
