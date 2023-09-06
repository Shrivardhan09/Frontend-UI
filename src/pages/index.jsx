import Home from '@/components/Home/Home'
import '/src/app/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Slider from '@/components/Slider/Slider'
import BoxAnimation from '@/components/Slider/BoxAnimation'
import Footer from '@/components/Footer/Footer'

export default function Index() {
    return (
        <main className='m-0 '>
            <Navbar />
            <Home />
            < Slider />
            <BoxAnimation />
            < Footer />
        </main>

    )
}


