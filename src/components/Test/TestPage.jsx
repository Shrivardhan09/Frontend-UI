import React from "react"
import SvgComponent from "./SvgComponent"

const TestPage = () => {
    return (
        <div className="flex justify-center items-center mb-10 flex-col my-16 py-16">
            <div className="w-4/5 flex flex-col items-center justify-center gap-5">
                <p className="text-lg">We take privacy seriously</p>
                <h3 className="font-bold font-montserrat text-3xl">Before you get started</h3>
                <p className="text-lg w-1/2 text-center">We won't share any answers with anyone &#40;and wont every tell you which friends said what about you&#41;</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
                <p>with Love,</p>
                <span><SvgComponent /></span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <button className="bg-black text-white px-5 py-2 rounded-xl">Start Test</button>
                <p className="font-thin">Takes only 5 minutes</p>

            </div>
        </div>
    )
}

export default TestPage
