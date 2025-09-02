import { motion } from 'framer-motion';

const Header = () => {
return (
    <motion.div>
        <motion.nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <motion.img src= "/logo.jpg" className= "rounded-circle ms-3 me-3" width= "80px" height= "80px" />
            <motion.button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <motion.span class="navbar-toggler-icon"></motion.span>
            </motion.button>
                <motion.div class="collapse navbar-collapse fs-4" id="navbarSupportedContent">
                    <motion.ul class="navbar-nav mr-auto">
                    <motion.li class="nav-item active">
                        <motion.a class="nav-link" href="#home">Home</motion.a>
                    </motion.li>
                    <motion.li class="nav-item">
                        <motion.a class="nav-link" href="#products">Products</motion.a>
                    </motion.li>
                    <motion.li class="nav-item">
                        <motion.a class="nav-link" href="#aboutus">About Us</motion.a>
                    </motion.li>
                    <motion.li class="nav-item">
                        <motion.a class="nav-link" href="#contactus">Contact Us</motion.a>
                    </motion.li>
                    </motion.ul>
                </motion.div>
        </motion.nav>
    </motion.div>
)
}

export default Header;