
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
}

function displayCategories(event) {
  event.preventDefault()


  let h2 = document.createElement('h2')
  h2.innerText = "Categories"

  let ul = document.createElement("ul")
  ul.id = "categories"

  main = document.getElementById("main")
  main.innerHTML = ""
  main.append(h2)
  main.append(ul)


  for (i = 0; i < categories.length; i++) {
    let li = document.createElement("li")
    let h3 = document.createElement("h3")
    let a = document.createElement('a')
    a.innerText = categories[i].name
    a.href = "/category_" + categories[i].id + ".html"

    li.appendChild(h3)
    h3.appendChild(a)
    ul.appendChild(li)
  }

}

function displayManufacturers(event) {

  event.preventDefault()

  let h2 = document.createElement('h2')
  h2.innerText = "Manufacturers"

  let ul = document.createElement('ul')
  ul.id = "categories"

  main = document.getElementById("main")
  main.innerHTML = ""
  main.append(h2)
  main.append(ul)


  for (j = 0; j < manufacturers.length; j++) {
    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    let a = document.createElement('a')
    a.innerText = manufacturers[j].name
    a.href = "/manufacturer_" + manufacturers[j].id + ".html"

    li.appendChild(h3)
    h3.appendChild(a)
    ul.appendChild(li)

  }

}

document.addEventListener("DOMContentLoaded", bindNavBarClickHandlers)