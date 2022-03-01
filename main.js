
const categories = [
  { id: 3, name: 'Cruiser' },
  { id: 2, name: 'Dual-Sport' },
  { id: 1, name: 'Naked' },
  { id: 4, name: 'Sport' }
]

const manufacturers = [
  { id: 5, name: 'BMW' },
  { id: 2, name: 'Honda' },
  { id: 1, name: 'Indian' },
  { id: 3, name: 'Triumph' },
  { id: 4, name: 'Victory' }
]

function bindNavBarClickHandlers(event) {
  let categoriesLink = document.getElementById("lnk-categories")
  let displayLink = document.getElementById("lnk-manufacturers")
  displayLink.addEventListener("click", displayManufacturers)
  categoriesLink.addEventListener("click", displayCategories)
  //displayLink.addEventListener("click", displayManufacturers)
}

function displayCategories(event) {
  event.preventDefault()
  let string = '<h2>Categories</h2><ul id="categories">'
  for (i = 0; i < categories.length; i++) {
    string += "<li><h3><a href='/category_" + categories[i].id + ".html'>" + categories[i].name + "</a></h3></li>"
  }
  string += "</ul>"
  main = document.getElementById("main")
  main.innerHTML = string
}

function displayManufacturers(event) {
  //alert("Hello")
  event.preventDefault()
  let thing = '<h2>Manufacturers</h2><ul id="categories">'
  //htmlString ='<h2>Manufacturers</h2><ul id="categories"><li><h3><a href="manufacturer_5.html">BMW</a></h3></li><li><h3><a href="manufacturer_2.html">Honda</a></h3></li><li><h3><a href="manufacturer_1.html">Indian</a></h3></li><li><h3><a href="manufacturer_3.html">Triumph</a></h3></li><li><h3><a href="manufacturer_4.html">Victory</a></h3></li></ul>'

  for (j = 0; j < manufacturers.length; j++) {
    thing += "<li><h3><a href='/manufacturer_" + manufacturers[j].id + ".html'>" + manufacturers[j].name + "</a></h3></li>"
  }

  thing += "</ul>"

  main = document.getElementById("main")
  main.innerHTML = thing

}

document.addEventListener("DOMContentLoaded", bindNavBarClickHandlers)
document.addEventListener("DOMContentLoaded", bindNavBarClickHandlers)