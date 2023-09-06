

const Footer = () => {
    return (
        <div className="w-full flex justify-center items-center border-t-black/5 border flex-col">
            <div className="flex flex-col items-center justify-center">
                <img src="./logo.jpg" alt="logo" className="w-[100px]" />
                <h3 className='font-dmsans text-3xl text-purple-700 font-bold'>ahead</h3>
            </div>
            <div className="flex gap-5 my-5">
                <div className="flex gap-2 items-center">
                    <img src="./location.png" alt="location-img" className="w-[40px]" />
                    <p>Address Region/State, Country</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="./mail.png" alt="mail-img" className="w-[40px]" />
                    <p>example@gmail.com</p>
                </div>
            </div>
            <div className="flex gap-2 bg-black rounded-md justify-center items-center px-3 py-1 mb-5">
                <img src="./apple.png" alt="apple-img" className="w-[30px] h-[32px]" />
                <div className="text-white">
                    <p className="text-sm font-thin m-0">Download on the</p>
                    <h5 className="text-xl font-bold">Apple Store</h5>
                </div>
            </div>
            <div className="mb-5">
                <p> &#169; Ahead app. All rights are reserved</p>
            </div>
        </div>
    )
}
export default Footer
