import './assets/css/style.css'
import icone from './assets/img/ts.png'

const header = document.querySelector("header")
const img = document.createElement("img")

img.src = icone
header?.prepend(img)