import { motion } from 'framer-motion';

const Footer = () => {
return (
    <motion.div>
        <motion.footer>
            <motion.p>© 2023. All rights reserved.</motion.p>
            <motion.a href="#">Facebook</motion.a>
            <motion.a href="#">Instagram</motion.a>
            <motion.a href="#">Twitter</motion.a>
        </motion.footer>
    </motion.div>
)
}

export default Footer;