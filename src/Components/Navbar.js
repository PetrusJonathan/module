// import app.js
import app from '../app.js'

//buat component navbar
const Navbar = () => {
    return `
    <nav class='navbar' style="
        width : 100vw;
        height :10vh;
        display : flex;
        justify-content : flex-start;
        align-items : center;
        padding : 0 10%;
        background-color : grey;
        color : white;
        font-size : 2rem;
        position : sticky;
        text-shadow : 5px 5px 5px rgba(0,0,0,0.600);
        top : 0;
        left : 0;
    ">
    <h1 class='brand'>BERITA KPK</h1>
     </nav>
    
    
    `
}
export default Navbar