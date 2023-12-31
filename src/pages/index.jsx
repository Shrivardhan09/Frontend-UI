import Home from '@/components/Home/Home'
import '/src/app/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Slider from '@/components/Slider/Slider'
import BoxAnimation from '@/components/Slider/BoxAnimation'
import Footer from '@/components/Footer/Footer'
import Vacancy from '@/components/Vacancy/Vacancy'
import TestPage from '@/components/Test/TestPage'
import MainBox from '@/components/ScrollAnimationCard'
import StepsToFollow from '@/components/Steps'
import TimeLineAnimation from '@/components/TimelineAnimation'


export default function Index() {
    return (
        <main className='mx-auto'>
            < Navbar />
            < Home />
            < Slider />
            < BoxAnimation />
            < TimeLineAnimation />
            < StepsToFollow />
            < TestPage />
            < MainBox />
            < Vacancy />
            < Footer />
        </main>

    )
}


