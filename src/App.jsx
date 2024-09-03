import Head from "./components/Head"
import Preparation from "./components/Preparation"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nutritions from "./components/Nutritions"

function App() {
    return (
        <div className='flex items-center	 justify-center	v-screen py-32 '>
            <div className='h-[106.5rem] w-[46rem] bg-white rounded-3xl flex flex-col items-center p-10'>
                <Head />
                <Preparation />
                <Ingredients />
                <Instructions />
                <Nutritions />
            </div>
        </div>
    )
}

export default App
