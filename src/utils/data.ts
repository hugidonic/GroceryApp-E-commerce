import { GroupI, ProductI } from "../redux/reduxTypes";

interface data {
  groups: GroupI[];
  fruits: ProductI[];
  vegetables: ProductI[];
  Dairy: ProductI[];
  Oils: ProductI[];
  Drinks: ProductI[];
  Rice: ProductI[];
  Sauces: ProductI[];
}


const data: data = {
  groups: [
    {
      name: "Dairy",
      color: "#F7B2BD",
      picture: require("../assets/images/Milk.png")
    },
    {
      name: "Drinks",
      color: "#A6B1E1",
      picture: require("../assets/images/Drinks.png")
    },
    {
      name: "Oils",
      color: "#EEEFA8",
      picture: require("../assets/images/Oils.png")
    },
    {
      name: "Oils",
      color: "#EEEFA8",
      picture: require("../assets/images/Oils.png")
    },
    {
      name: "Rice",
      color: "#C8B8DB",
      picture: require("../assets/images/Rice.png")
    },
    {
      name: "Oils",
      color: "#EEEFA8",
      picture: require("../assets/images/Oils.png")
    },
    {
      name: "Sauces",
      color: "#D4DCCD",
      picture: require("../assets/images/Sauces.png")
    },
    {
      name: "Dairy",
      color: "#F7B2BD",
      picture: require("../assets/images/Milk.png")
    },

    {
      name: "Dairy",
      color: "#F7B2BD",
      picture: require("../assets/images/Milk.png")
    },
    {
      name: "Dairy",
      color: "#F7B2BD",
      picture: require("../assets/images/Milk.png")
    },
  ],
  fruits: [
    {
      name: "Bananas",
      description: "organic",
      picture: require("../assets/images/Bananas.png"),
      price: 4.99
    },
    {
      name: "Apples",
      description: "organic",
      picture: require("../assets/images/Apples.png"),
      price: 4.99
    },
    {
      name: "Oranges",
      description: "organic",
      picture: require("../assets/images/Oranges.png"),
      price: 4.99
    },
    {
      name: "Pears",
      description: "organic",
      picture: require("../assets/images/Pears.png"),
      price: 4.99
    },
    {
      name: "Peaches",
      description: "organic",
      picture: require("../assets/images/Peaches.png"),
      price: 4.99
    },
    {
      name: "Kiwies",
      description: "organic",
      picture: require("../assets/images/Kiwies.png"),
      price: 4.99
    },
  ],

  vegetables: [
    {
      name: "Tomatoes",
      description: "organic",
      picture: require("../assets/images/Tomatoes.png"),
      price: 4.99
    },
    {
      name: "Corns",
      description: "organic",
      picture: require("../assets/images/Corns.png"),
      price: 4.99
    },
    {
      name: "Potatoes",
      description: "organic",
      picture: require("../assets/images/Potatoes.png"),
      price: 4.99
    },
    {
      name: "Cucumbers",
      description: "organic",
      picture: require("../assets/images/Cucumbers.png"),
      price: 4.99
    },
    {
      name: "Carrots",
      description: "organic",
      picture: require("../assets/images/Carrots.png"),
      price: 4.99
    },
  ],
  Dairy: [],
  Oils: [],
  Drinks: [],
  Rice: [],
  Sauces: [],
}

data.Dairy = [...data.fruits];
data.Oils = [...data.vegetables];
data.Drinks = [...data.fruits];
data.Rice = [...data.vegetables];
data.Sauces = [...data.fruits];

export default data