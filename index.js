const showSidebar = document.querySelector("#showSidebar")
const sidebar = document.querySelector(".sidebar")

const showClosebar = document.querySelector("#closebar")

showSidebar.addEventListener("click", () =>{
    sidebar.style.display = "flex"
})

showClosebar.addEventListener("click", () =>{
    sidebar.style.display = "none"
})