

const Banner = () => {
    return (
        <div className='rounded-lg bg-primary-100 px-12 w-5/6 flex items-center justify-center gap-5 relative'>
            <div className='flex flex-col items-start justify-center gap-10 flex-1'>
                <div>
                    <p>Ahead app</p>
                    <h1 className='text-4xl font-montserrat font-bold'>Master you life by mastering emotions</h1>
                </div>
                <div className='flex gap-5'>
                    <div className="flex gap-2 bg-black rounded-md justify-center items-center px-3 py-1 mb-5">
                        <img src="./apple.png" alt="apple-img" className="w-[30px] h-[32px]" />
                        <div className="text-white">
                            <p className="text-sm font-thin m-0">Download on the</p>
                            <h5 className="text-xl font-bold">Apple Store</h5>
                        </div>
                    </div>
                    <div >
                        <img src="./stars.png" alt="stars" className='w-[100px]' />
                        <p>100+ Appstore reviews</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 '>
                <img src="./Home-img.png" alt="home-image" className='w-[500px]' />
            </div>
            <img src="./leaf.png" alt="leaf" className='absolute -top-1 left-32 w-[50px]' />
            <img src="./redmark.png" alt="berry" className='absolute  bottom-0 left-16 w-[50px]' />
            <img src="./berry.png" alt="berry" className='absolute bottom-0 top-36 w-[50px]' />
            <img
                src="./biscuit.png" alt="biscuit-img"
                className='absolute top-16 left-56 w-[50px]' />
            <img
                src="./biscuit.png" alt="biscuit-img"
                className='absolute bottom-16  w-[50px]' />
            <p className='rounded-full p-4 absolute top-12 left-72 border-2 border-pink-200/30 bg-pink-100'></p>
            <p className='rounded-full p-4 absolute top-0 right-32 border-2 border-pink-200/30 bg-pink-100'></p>
        </div>
    )
}

export default Banner
