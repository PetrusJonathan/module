//import App.js
import App from './app.js'
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Headline from './components/Headline.js'
import Slider from './components/Slider.js'
import Menu from './Components/Menu.js'
import Footer from './Components/Footer.js'
import Detailpage from './Components/Detailpage.js'


//buat fuction index yang berisi syntax html
const index = () => {
    return `

    ${Navbar()}
    ${Menu()}
    ${Hero()}
    ${Headline()}
    ${Slider()}
    ${Footer()}
    ${Detailpage()}
    


    `

}

//export updater() agar bisa digunakan difile js lainnya
export default index