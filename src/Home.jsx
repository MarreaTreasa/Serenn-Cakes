import React from 'react'
import PinterestImage from './components/PinterestImage'
import {motion} from 'framer-motion'

const Home=()=>{
    return(
        <div>
            <PinterestImage/>
            <div className="Imagetext">
                <motion.h2 className='one'
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration:"0.25",
                    delay:"0.5",
                }}>
                    Happiness
                </motion.h2>
                <motion.h2 className='two'
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration:"0.5",
                    delay:"0.5",
                }}>Is</motion.h2>
                <motion.h2 className='three'
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration:"1",
                    delay:"0.5",
                }}>Homemade</motion.h2>

            </div>
        </div>

    );
}
export default Home;