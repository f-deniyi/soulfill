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

function showRecipe(evt, contentId) {
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

var utils = window.fizzyUIUtils

var carousel = document.querySelector('.trending-recipes-gallery')
var flkty = new Flickity(carousel, {
  prevNextButtons: false,
  pageDots: false,
  contain: true
})

var previousButton = document.querySelector('.trending-recipe-prev-btn')
previousButton.addEventListener('click', function () {
  flkty.previous()
})
// next
var nextButton = document.querySelector('.trending-recipe-next-btn')
nextButton.addEventListener('click', function () {
  flkty.next()
})

var picked_carousel = document.querySelector('.picked-recipes-gallery')
var picked_flkty = new Flickity(picked_carousel, {
  prevNextButtons: false,
  pageDots: false,
  contain: true
})

var picked_previousButton = document.querySelector('.picked-recipe-prev-btn')
picked_previousButton.addEventListener('click', function () {
  picked_flkty.previous()
})
// next
var picked_nextButton = document.querySelector('.picked-recipe-next-btn')
picked_nextButton.addEventListener('click', function () {
  picked_flkty.next()
})

var latest_carousel = document.querySelector('.latest-recipes-gallery')
var latest_flkty = new Flickity(latest_carousel, {
  prevNextButtons: false,
  pageDots: false,
  contain: true
})

var latest_previousButton = document.querySelector('.latest-recipe-prev-btn')
latest_previousButton.addEventListener('click', function () {
  latest_flkty.previous()
})
// next
var latest_nextButton = document.querySelector('.latest-recipe-next-btn')
latest_nextButton.addEventListener('click', function () {
  latest_flkty.next()
})


function openNav() {
  document.getElementById("menubar").style.width = "100%";
}

function closeNav() {
  document.getElementById("menubar").style.width = "0";
}