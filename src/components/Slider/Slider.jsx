import { motion, useScroll } from 'framer-motion'
import '/src/app/globals.css'



const Slider = () => {
    const { scroll } = useScroll()

    return (
        <>
            <motion.div
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 1.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100, y: -25 },
                    visible: { opacity: 1, x: 0, y: 0 }
                }}
            >
                <div className='flex justify-center items-center'>
                    <div className=' flex gap-3 items-center w-4/5'>
                        <h2 className='text-4xl font-bold'>Does it sound familiar</h2>
                        <img src="./span.png" alt="angry-jellyfish" className='w-8' />
                    </div>
                </div>
            </motion.div>

            <div
                className='flex justify-center items-center gap-7 overflow-x-hidden overflow-y-hidden'

            >
                <motion.div
                    className='flex justify-center items-center gap-7 m-7 p-7'
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: -150 }
                    }}
                    style={{ scaleX: scroll }}
                >
                    <div className='bg-cyan-100 flex flex-col justify-center items-start gap-1 px-5 py-5 rounded-lg card hover:-rotate-[10deg]'>
                        <div className='w-[25px]'>
                            <img src="./angryemoji.png" alt="angry-emoji" />
                        </div>
                        <div className='font-montserrat font-semibold'>
                            You argue with your colleague
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis.
                        </div>
                    </div>
                    <div className='bg-indigo-100 flex flex-col justify-center items-start gap-1 px-5 py-5 rounded-lg card hover:-rotate-[10deg]'>
                        <div className='w-[25px]'>
                            <img src="./blankemoji.png" alt="blank-emoji" />
                        </div>
                        <div className='font-montserrat font-semibold'>
                            You argue with your colleague
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis.
                        </div>
                    </div>
                    <div className='bg-pink-50 flex flex-col justify-center items-start gap-1 px-5 py-5 rounded-lg card  hover:-rotate-[10deg]'>
                        <div className='w-[25px]'>
                            <img src="./eyebrow-raisedemoji.png" alt="eyebrow-raised-emoji" />
                        </div>
                        <div className='font-montserrat font-semibold'>
                            You argue with your colleague
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis.
                        </div>
                    </div>
                    <div className='bg-yellow-100 flex flex-col justify-center items-start gap-1 px-5 py-5 rounded-lg card hover:-rotate-[10deg]'>
                        <div className='w-[25px]'>
                            <img src="./grimacing-faceemoji.png" alt="eyebrow-raised-emoji" />
                        </div>
                        <div className='font-montserrat font-semibold'>
                            You argue with your colleague
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis.
                        </div>
                    </div>
                    <div className='bg-sky-200 flex flex-col justify-center items-start gap-1 px-5 py-5 rounded-lg card hover:-rotate-[10deg]'>
                        <div className='w-[25px]'>
                            <img src="./unamused-faceemoji.png" alt="eyebrow-raised-emoji" />
                        </div>
                        <div className='font-montserrat font-semibold'>
                            You argue with your colleague
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis.
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Slider
