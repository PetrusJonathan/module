import Card from './Card.js'

const Slider = () => {
    return `
    
    <section class='slider'>

        <div class='cardContainer'>

            ${Card('https://akcdn.detik.net.id/community/media/visual/2020/10/02/inovasi-industri-kreatif-di-tengah-pandemi_169.jpeg?w=700&q=90', 'Card 1', 'Ini Adalah Card Pertama')}
            ${Card('https://akcdn.detik.net.id/community/media/visual/2020/10/02/seperti-ini-dokontaminasi-petugas-medis-covid-19-usai-bekerja-3_169.jpeg?w=700&q=90', 'Card 2', 'Ini Adalah Card Pertama')}
            ${Card('https://akcdn.detik.net.id/community/media/visual/2020/10/02/seperti-ini-dokontaminasi-petugas-medis-covid-19-usai-bekerja-1_169.jpeg?w=700&q=90', 'Card 3', 'Ini Adalah Card Pertama')}
            ${Card('https://akcdn.detik.net.id/community/media/visual/2020/10/07/ada-layanan-tes-swab-gratis-lho-di-kawasan-gambir-9_169.jpeg?w=700&q=90', 'Card 4', 'Ini Adalah Card Pertama')}
            ${Card('https://akcdn.detik.net.id/community/media/visual/2020/10/07/ada-layanan-tes-swab-gratis-lho-di-kawasan-gambir-8_169.jpeg?w=700&q=90', 'Card 5', 'Ini Adalah Card Pertama')}
            ${Card('https://akcdn.detik.net.id/community/media/visual/2020/10/07/ada-layanan-tes-swab-gratis-lho-di-kawasan-gambir-3_169.jpeg?w=700&q=90', 'Card 6', 'Ini Adalah Card Pertama')}

        </div>
    </section>
    
    
    `
}
export default Slider