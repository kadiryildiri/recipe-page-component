import React from "react"

const Nutritions = () => {
    return (
        <div className='w-full mt-6'>
            <div className='mb-4'>
                <h1 className='text-[#7B284F] text-3xl font-normal mb-4' style={{ fontFamily: "Young Serif" }}>
                    Nutritions
                </h1>
                <p className='text-[#5F574E]' style={{ fontFamily: "Outfit" }}>
                    The table below shows nutritional values per serving without the additional fillings.
                </p>
            </div>

            <div className='flex flex-col gap-3' style={{ fontFamily: "Outfit" }}>
                <div className='flex flex-row items-center text-left ml-6'>
                    <span className='text-[#5F574E] text-left w-1/2'>Calories</span>
                    <span className='font-bold text-[#7B284F]'>277kcal</span>
                </div>
                <hr />
                <div className='flex flex-row items-center text-left ml-6'>
                    <span className='text-[#5F574E] text-left w-1/2'>Carbs</span>
                    <span className='font-bold text-[#7B284F]'>0g</span>
                </div>
                <hr />
                <div className='flex flex-row items-center text-left ml-6'>
                    <span className='text-[#5F574E] text-left w-1/2'>Protein</span>
                    <span className='font-bold text-[#7B284F]'>20g</span>
                </div>
                <hr />
                <div className='flex flex-row items-center text-left ml-6'>
                    <span className='text-[#5F574E] text-left w-1/2'>Fat</span>
                    <span className='font-bold text-[#7B284F]'>22g</span>
                </div>
            </div>
        </div>
    )
}

export default Nutritions
