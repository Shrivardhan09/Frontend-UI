import Home from '@/components/Home/Home'
import '/src/app/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Slider from '@/components/Slider/Slider'
import BoxAnimation from '@/components/Slider/BoxAnimation'
import Footer from '@/components/Footer/Footer'
import Vacancy from '@/components/Vacancy/Vacancy'
import TestPage from '@/components/Test/TestPage'

export default function Index() {
    return (
        <main className='m-0 '>
            <Navbar />
            <Home />
            < Slider />
            <BoxAnimation />
            < TestPage />
            < Vacancy />
            < Footer />
        </main>

    )
}


