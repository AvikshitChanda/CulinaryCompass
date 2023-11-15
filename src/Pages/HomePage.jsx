import Veggies from '../Components/Veggies';
import PopularRecipes from '../Components/PopularRecipes';
import { motion } from 'framer-motion';

function Homepage(){
    return (
        <motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        >
         <Veggies/>
         <PopularRecipes/>
        </motion.div>
    )
}

export default Homepage;

