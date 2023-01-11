var tablinks = document.getElementsByClassName('select-option')
console.log(tablinks)
tablinks[0].className += ' active'

var recipeContent = document.getElementsByClassName('recipe-options')
for (i = 0; i < recipeContent.length; i++) {
  if (i === 0) {
    recipeContent[i].style.display = 'block'
  } else {
    recipeContent[i].style.display = 'none'
  }
}

var trending_recipes = document.getElementsByClassName('trending-recipes')
for (i = 0; i < trending_recipes.length; i++) {
  if (i === 0) {
    trending_recipes[i].style.display = 'block'
  } else {
    trending_recipes[i].style.display = 'none'
  }
}

var latest_recipes = document.getElementsByClassName('latest-recipes')
for (i = 0; i < latest_recipes.length; i++) {
  if (i === 0) {
    latest_recipes[i].style.display = 'block'
  } else {
    latest_recipes[i].style.display = 'none'
  }
}

var picked_recipes = document.getElementsByClassName('picked-recipes')
for (i = 0; i < picked_recipes.length; i++) {
  if (i === 0) {
    picked_recipes[i].style.display = 'block'
  } else {
    picked_recipes[i].style.display = 'none'
  }
}

function showRecipe (evt, contentId) {
  var i, options, recipes
  options = document.getElementsByClassName('select-option')
  for (i = 0; i < options.length; i++) {
    options[i].className = options[i].className.replace('active', '')
    if (i === contentId) {
      tablinks[contentId].className += ' active'
    }
  }
  recipes = document.getElementsByClassName('recipe-options')
  console.log(recipes)

  for (i = 0; i < recipes.length; i++) {
    if (i === contentId) {
      recipes[i].style.display = 'block'
    } else {
      recipeContent[i].style.display = 'none'
    }
  }
}

let activeTrendingRecipes = 0
let activeLatestRecipes = 0
let activePickedRecipes = 0

const handleRecipeChange = (section, type) => {
  console.log(
    section,
    type,
    activeTrendingRecipes,
    activeLatestRecipes,
    activePickedRecipes
  )
  let section_recipes = document.getElementsByClassName(section)
  for (i = 0; i < section_recipes.length; i++) {
    section_recipes[i].style.display = 'none'
  }
  var i
  if (section === 'trending-recipes') {
    if (type === 'decrement' && activeTrendingRecipes > 0) {
      activeTrendingRecipes = activeTrendingRecipes - 1
      section_recipes[activeTrendingRecipes].style.display = 'block'
    } else if (
      type === 'increment' &&
      activeTrendingRecipes < section_recipes.length - 1
    ) {
      activeTrendingRecipes = activeTrendingRecipes + 1
      section_recipes[activeTrendingRecipes].style.display = 'block'
    } else {
      activeTrendingRecipes = 0

      section_recipes[0].style.display = 'block'
    }
  }
  if (section === 'latest-recipes') {
    if (type === 'decrement' && activeLatestRecipes > 0) {
      activeLatestRecipes = activeLatestRecipes - 1
      section_recipes[activeLatestRecipes].style.display = 'block'
    } else if (
      type === 'increment' &&
      activeLatestRecipes < section_recipes.length - 1
    ) {
      activeLatestRecipes = activeLatestRecipes + 1
      section_recipes[activeLatestRecipes].style.display = 'block'
    } else {
      activeLatestRecipes = 0

      section_recipes[0].style.display = 'block'
    }
  }
  if (section === 'picked-recipes') {
    if (type === 'decrement' && activePickedRecipes > 0) {
      activePickedRecipes = activePickedRecipes - 1
      section_recipes[activePickedRecipes].style.display = 'block'
    } else if (
      type === 'increment' &&
      activePickedRecipes < section_recipes.length - 1
    ) {
      activePickedRecipes = activePickedRecipes + 1
      section_recipes[activePickedRecipes].style.display = 'block'
    } else {
      activePickedRecipes = 0

      section_recipes[0].style.display = 'block'
    }
  }
}
