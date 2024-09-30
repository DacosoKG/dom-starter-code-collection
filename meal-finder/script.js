const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

// Get a random meal
const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
// Search a meal by id, i.e. i=53031
const searchUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
// Search a meal by string input, i.e. s=egg
const searchByQueryStrUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";
