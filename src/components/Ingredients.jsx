import React from "react"

const Ingredients = () => {
    return (
        <div className='flex flex-col  w-full mt-6'>
            <h1 className='text-[#7B284F] text-3xl font-normal' style={{ fontFamily: "Young Serif" }}>
                Ingredients
            </h1>
            <ul className='flex flex-col list-disc text-[#5F574E] marker:text-[#7B284F] p-6 gap-2'>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
            <hr />
        </div>
    )
}

export default Ingredients
