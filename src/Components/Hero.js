import App from '../app.js'

const Hero = () => {

    return `
        <section class='hero' style="
            
            width : 100vw;
            height : 80vh;
            display : flex ;
            align-items: center ;
            justify-content : space-between;
            padding : 0 10% ;
            background-image : url(https://picsum.photos/seed/${Hero.state.imgNo}/900);
            background-size : cover ;
            color : blue ;
            
        ">

        <span class="material-icons" style="
            font-size : 4rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
            cursor : pointer;
            color : red;
                    " onclick="prev()">
            keyboard_arrow_left
            </span>
                    <div>
                <h1 onclick="showModal()">${Hero.state.text}</h1>
                ${Hero.state.showModal === true ? "<input placeholder='masukan judul'/>" : ''}
               
                    </div>
            <span class="material-icons" style="
            font-size : 4rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300):
            cursor : pointer;
            color : red;
            " onclick="next()">
            keyboard_arrow_right
            </span>


        
        </section>
    
    
    
    `
}

Hero.state = {
    text: "Ruang Belajar",
    imgNo: 143,
    prevImg: () => {
        Hero.state.imgNo -= 1
        App()
    },
    nextImg: () => {
        Hero.state.imgNo += 1
        App()
    },
    showModal: false,
    setShowModal: () => {
        Hero.state.showModal = !Hero.state.showModal
        App()
    }

}

window.prev = () => {
    Hero.state.prevImg()
    // console.log(Hero.state.imgNo)
}
window.next = () => {
    Hero.state.nextImg()
    // console.log(Hero.state.imgNo)
}
window.showModal = () => {
    Hero.state.setShowModal()
    console.log(Hero.state.showModal)
}
export default Hero