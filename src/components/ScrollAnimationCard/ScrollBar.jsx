import Card from './Card';

import '../../app/globals.css'


const ScrollBar = () => {
    return (
        <div
            className='flex justify-center flex-col items-center gap-7 overflow-y-scroll w-[450px] max-h-[400px] '
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div >

    )
};

export default ScrollBar;
