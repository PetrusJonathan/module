//import sytantax dari file js lain
import index from './index.js'
//membuat sebuah fuction render
const app = () => {
    document.getElementById('root').innerHTML = index()
}

//menjalankan fuction rendernya
app()


//export app() agar bisa digunakan difile js lainnya
export default app
