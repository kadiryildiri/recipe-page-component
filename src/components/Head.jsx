import React from "react"
import meal from "../assets/images/image-omelette.jpeg"

const Head = () => {
    return (
        <div>
            <img className='w-[41rem] h-[18.75rem] rounded-xl' src={meal} alt='' />

            <div className='mt-10'>
                <h1 className='text-[2.375rem] ' style={{ fontFamily: "Young Serif" }}>
                    Simple Omlette Recipe
                </h1>
                <p className='mt-6 text-[#5F574E]' style={{ fontFamily: "Outfit" }}>
                    An easy and quick dish, perfect for any meal. This classic omlette combines beaten eggs <br />
                    cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>
            </div>
        </div>
    )
}

export default Head
