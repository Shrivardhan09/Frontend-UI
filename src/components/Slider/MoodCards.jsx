import React from 'react';
import { motion } from 'framer-motion';
import '../../app/globals.css';

const MoodCards = () => {
    const cardData = [
        {
            "image": "./angryemoji.png",
            "bgColor": "bg-cyan-100",
            "title": "You argue with your colleague",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis."
        },
        {
            "image": "./blankemoji.png",
            "bgColor": "bg-indigo-100",
            "title": "You argue with your colleague",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis."
        },
        {
            "image": "./eyebrow-raisedemoji.png",
            "bgColor": "bg-pink-50",
            "title": "You argue with your colleague",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis."
        },
        {
            "image": "./grimacing-faceemoji.png",
            "bgColor": "bg-yellow-100",
            "title": "You argue with your colleague",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis."
        },
        {
            "image": "./unamused-faceemoji.png",
            "bgColor": "bg-sky-200",
            "title": "You argue with your colleague",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis."
        },
        {
            "image": "./angryemoji.png",
            "bgColor": "bg-rose-500",
            "title": "You argue with your colleague",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto modi praesentium recusandae pariatur quo facilis."
        }
    ]

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 1.5 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}
            className='overflow-x-auto py-12 slider-container flex'
        >
            {cardData.map((card, index) => (
                <div className='py-7 mx-5' key={index}>
                    <div
                        className={` px-5 py-3 rounded-lg ${card.bgColor} duration-150  hover:-rotate-[10deg]`}
                        style={{ minWidth: '100px', width: '300px', height: '200px' }}
                    >
                        <div className='mb-3'>
                            <img src={card.image} alt={`emoji-${index}`} className='w-[40px]' />
                        </div>
                        <div className='font-semibold text-lg mb-2'>{card.title}</div>
                        <div className='text-sm overflow-y-auto'>
                            <p>{card.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default MoodCards;
