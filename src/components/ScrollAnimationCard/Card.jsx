import React from 'react'

const Card = ({ number }) => {
    return (
        <div className='bg-white rounded-lg px-5 py-3 w-56 mt-3'>
            <h4 className='font-bold text-lg'>{number}.Lorem ipsum dolor sit amet.</h4>
            <p className='font-thin '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam inventore, explicabo </p>
        </div>
    )
}

export default Card;
