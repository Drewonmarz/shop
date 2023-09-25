const  menu = document.getElementsByClassName('.menu-icon')
const menuItems =document.getElementById("menuItems")

menuItems.style.maxHeight = "0px"

menu.addEventListener("click" ,function(toogleMenu){
    if(menuItems.style.maxHeight == "0px")
      {
        menuItems.style.maxHeight = "200px"
      }
      else
      {
        menuItems.style.maxHeight = "0px"
      }

})