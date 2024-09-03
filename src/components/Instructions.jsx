import React from "react"

const Instructions = () => {
    return (
        <div className='w-full mt-6'>
            <h1 className='text-[#7B284F] text-3xl font-normal' style={{ fontFamily: "Young Serif" }}>
                Instructions
            </h1>
            <ol className='flex flex-col gap-3 text-[#5F574E] text-base list-decimal marker:text-[#7B284F] marker:font-bold p-6  '>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Beat the eggs:{" "}
                    </span>
                    <span>
                        In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add
                        a tablespoon of water or milk for a fluffier texture.
                    </span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Heat the pan:{" "}
                    </span>
                    <span>Place a non-stick frying pan over medium heat and add butter or oil.</span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Cook the omlette:{" "}
                    </span>
                    <span>
                        Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
                        coat the surface.
                    </span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Add fillings (optional):
                    </span>
                    <span>
                        When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle
                        your chosen fillings over one half of the omelette.
                    </span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Fold and serve:{" "}
                    </span>
                    <span>
                        As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it
                        cook for another minute, then slide it onto a plate.
                    </span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Enjoy:
                    </span>
                    <span> Serve hot, with additional salt and pepper if needed.</span>
                </li>
            </ol>
            <hr />
        </div>
    )
}

export default Instructions
