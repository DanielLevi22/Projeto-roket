function trocar() {
  let light = document.querySelector("#seletor")
   light.classList.toggle("light")


  let img = document.querySelector("#profile img")

  if (light.classList.contains("light")) {
    img.setAttribute("src", "./assets/Ellipse2.png")
  } else {
    img.setAttribute("src", "./assets/Ellipse.png")
  }
 
}
