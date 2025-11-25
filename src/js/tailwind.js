const openSidebarBtn = document.querySelector(".sidebar-open-btn")
const closeSidebarBtn = document.querySelector(".sidebar-close-btn")
const sideBar = document.querySelector(".sidebar")
openSidebarBtn.addEventListener("click", () => {
  console.log(sideBar.classList.add("show"))
})
closeSidebarBtn.addEventListener("click", () => {
  sideBar.classList.remove("show")
})

const toggleBtn = document.querySelectorAll(".toggle-btn")
toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()

    const menuItem = btn.closest(".menu-item")
    const subMenu = menuItem.querySelector(".submenu")

    document.querySelectorAll(".submenu").forEach((other) => {
      if (other !== subMenu) other.classList.add("hidden")
    })
    subMenu.classList.toggle("hidden")
  })
})
