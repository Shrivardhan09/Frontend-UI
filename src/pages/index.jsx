import Home from '@/components/Home/Home'
import '/src/app/globals.css'
import Navbar from '@/components/Navbar/Navbar'

export default function Index() {
    return (
        <main className='m-0 '>
            <Navbar />
            <Home />
        </main>

    )
}


