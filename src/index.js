//import app.js
import app from './app.js'
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'


//buat fuction index yang berisi syntax html
const index = () => {
    return `

    ${Navbar()}
    ${Hero()}
    


    `
}

//export index() agar bisa digunakan difile js 
export default index