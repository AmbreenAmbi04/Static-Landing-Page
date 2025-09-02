import { motion } from 'framer-motion';

const Header = () => {
return (
    <motion.div>
        <motion.header className="navbar navbar-expand-lg navbar-light bg-light">
            <motion.img src="public\logo.jpg"></motion.img>
            <motion.button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <motion.span class="navbar-toggler-icon"></motion.span>
            </motion.button>
            <motion.ul>
                <motion.li>
                    <motion.a href = "#">Home</motion.a>
                </motion.li>
                <motion.li>
                    <motion.a href = "#">Products</motion.a>
                </motion.li>
                <motion.li>
                    <motion.a href = "#">About Us</motion.a>
                </motion.li>
                <motion.li>
                    <motion.a href = "#">Contact Us</motion.a>
                </motion.li>
            </motion.ul>
        </motion.header>
    </motion.div>
)
}

export default Header;