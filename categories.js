const categories = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
  // declare an empty variable to store the result
  let path = "";

  // loop into categories array
  for (let category of categories) {
    // if the name of the parameter exists
    if (category.name === categoryName) {
      // save it into path
      path = `/${category.name}`;
      // if the object has subcategories, another level
    } else if (category.subcategories.length > 0) {
      // call again the function for subcategories
      const subcategoryPath = getCategoryPath(category.subcategories, categoryName);
      // if it's not empty
      if (subcategoryPath !== "") {
        // save it into path
        path = `/${category.name}${subcategoryPath}`;
      }
    }
  }
  // show path after the function
  return path;
};

module.exports = { categories, getCategoryPath };

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, "category4")); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, "category2")); // should output: '/category1/category2'
console.log(getCategoryPath(categories, "category5")); // should output: '/category5'
