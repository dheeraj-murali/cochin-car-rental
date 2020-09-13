export const config = fleets => {
  return fleets
    .map(image => {
      const name = image.node.name
      const banner = image.node.childImageSharp.fluid

      if (name === "fleet1") {
        return {
          title: `Standard Class`,
          type: `Sedans`,
          seats: `4`,
          tags: [
            "AC",
            "24 Hr customer service",
            "Music System",
            "Mobile Charging Socket",
            "Boot Space 378L - 592L",
          ],
          banner,
          id: 1,
        }
      }

      if (name === "fleet2") {
        return {
          title: `Family Class`,
          type: `SUVs`,
          seats: `6 - 7`,
          tags: [
            "AC",
            "24 Hr customer service",
            "Music System",
            "Mobile Charging Socket",
            "Boot Space 195L - 300L",
          ],
          banner,
          id: 2,
        }
      }

      if (name === "fleet3") {
        return {
          title: `Van Class`,
          type: `Van / Traveller`,
          seats: `8 - 26`,
          tags: [
            "AC",
            "Music & TV System",
            "Reclining Seats",
            "Individual AC Ducts",
            "Road side assistance",
          ],
          banner,
          id: 3,
        }
      }

      if (name === "fleet4") {
        return {
          title: `Coach Class`,
          type: `Bus`,
          seats: `20 - 49`,
          tags: [
            "AC",
            "Music & TV System",
            "Reclining Seats",
            "Individual AC Ducts",
            "Road side assistance",
          ],
          banner,
          id: 4,
        }
      }
    })
    .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
}
