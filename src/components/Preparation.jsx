import React from "react"

const Preparation = () => {
    return (
        <div className='bg-[#FFF5FA] w-[41rem] h-[10.75rem] rounded-lg p-6 mt-6'>
            <h1 className='text-[#7B284F] text-lg font-semibold' style={{ fontFamily: "Outfit" }}>
                Preparation time
            </h1>
            <ul className='list-disc text-[#5F574E] marker:text-[#7B284F] p-6'>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Total{" "}
                    </span>
                    <span>: Approximately 10 minutes</span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Preparation{" "}
                    </span>
                    <span>: 5 minutes</span>
                </li>
                <li>
                    <span className='font-bold' style={{ fontFamily: "Outfit" }}>
                        Cooking{" "}
                    </span>
                    <span>: 5 minutes</span>
                </li>
            </ul>
        </div>
    )
}

export default Preparation
