import './admin.css'
import Veggie from '../../components/Veggie'
import Popular from '../../components/Popular'
import Category from '../../components/Category'
import { motion } from "framer-motion"


export default function Admin() {

    return(
        <motion.div  //Esses atributos abaixo serao responsaveis por aplicar animacoes quando a page for carregada
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Category />
            <Veggie />
            <Popular />
        </motion.div>
    )
}