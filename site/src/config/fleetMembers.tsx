export const config = (member: string) => {
  switch (member) {
    case "standard":
      return [
        {
          name: "Suzuki Dzire",
          capacity: "4 Seats + D",
          boot: "378L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Toyota Etios",
          capacity: "4 Seats + D",
          boot: "592L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Mahindra Verito",
          capacity: "4 Seats + D",
          boot: "510L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Ford Fiesta Classic",
          capacity: "4 Seats + D",
          boot: "430L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Nissan Sunny",
          capacity: "4 Seats + D",
          boot: "490L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
      ]

    case "family":
      return [
        {
          name: "Chevrolet Tavera",
          capacity: "6 Seats + D ",
          boot: "195L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Suzuki Ertiga",
          capacity: "6 Seats + D ",
          boot: "209L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Toyota Innova",
          capacity: "7 Seats + D ",
          boot: "300L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
        {
          name: "Toyota Innova Crysta",
          capacity: "7 Seats + D ",
          boot: "300L",
          luxury: false,
          features:
            "Air Condition | Music System | Highly Maintained | Mobile Charging Socket",
        },
      ]

    case "van":
      return [
        {
          name: "Force Tempo Traveller",
          capacity: "09 | 12 | 17 | 20 | 26 Seats + D ",
          luxury: false,
          boot: "",
          features:
            "Air Condition | Individual AC Duct | Music & TV System | Highly Maintained | Reclining Seats | Mobile Charging Socket",
        },
        {
          name: "Luxury Force Tempo Traveller",
          capacity: "08 | 10 | 12 | 15 Seats + D ",
          luxury: true,
          boot: "",
          features:
            "Air Condition | Individual AC Duct | Music & TV System | Highly Maintained | Reclining Seats | Mobile Charging Socket",
        },
        {
          name: "Mercedes Benz Sprinter",
          capacity: "09 Seats + D ",
          luxury: true,
          boot: "",
          features:
            "Air Condition | Individual AC Duct | Music & TV System | Highly Maintained | Reclining Seats | Mobile Charging Socket",
        },
        {
          name: "Toyota Commuter",
          capacity: "09 Seats + D ",
          luxury: true,
          boot: "",
          features:
            "Air Condition | Individual AC Duct | Music & TV System | Highly Maintained | Reclining Seats | Mobile Charging Socket",
        },
      ]

    case "coach":
      return [
        {
          name: "Coach",
          capacity: "20 | 22 | 30 | 35 | 39 | 49 Seats + D ",
          luxury: false,
          boot: "",
          features:
            "Air Condition | Individual AC Duct | Music & TV System | Highly Maintained | Reclining Seats | Mobile Charging Socket",
        },
        {
          name: "Volvo Coach",
          capacity: "45 Seats + D ",
          luxury: true,
          boot: "",
          features:
            "Air Condition | Individual AC Duct | Music & TV System | Highly Maintained | Reclining Seats | Mobile Charging Socket",
        },
      ]

    default:
      return null
  }
}
