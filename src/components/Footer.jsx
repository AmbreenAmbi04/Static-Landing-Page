import { motion } from 'framer-motion';

const Footer = () => {
return (
    <motion.div>
        <motion.footer className= "bg-dark text-white text-center py-3" 
                       style= {{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
            <motion.p className= "mb-0 text-white fs-6">© 2023. All rights reserved.</motion.p>
            <motion.p className= "mb-0 text-white fw-lightbold fs-5">Follow us on:<motion.br/>
                <motion.a href="#facebook" className= "mx-2 text-decoration-none">Facebook</motion.a>
                <motion.a href="#instagram" className= "mx-2 text-decoration-none">Instagram</motion.a>
                <motion.a href="#twitter" className= "mx-2 text-decoration-none">Twitter</motion.a>
            </motion.p>
        </motion.footer>
    </motion.div>
)
}

export default Footer;