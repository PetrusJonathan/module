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
    ">
    <h1 class='brand'>Jrg Balesoft</h1>
     </nav>
    
    
    `
}
export default Navbar