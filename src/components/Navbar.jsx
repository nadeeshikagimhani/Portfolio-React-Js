import { Motion } from "framer-motion";
import { useState } from "react"

const Navbar = ({ darkMode, toggleDarkMode}) => {

    const [activeSection, setActiveSection] = useState('home');
    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' }
    ];

    const lightColors = {
        navBg: 'ng-linear-to-br from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const darkColors = {
        navBg: 'ng-linear-to-br from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-orange-400',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const colors = darkMode ? darkColors : lightColors;

    const handleNavSection = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
        
        <Motion.nav
        initial= {{ y: -100 }}
        animate= {{ y: 0 }}
        transition= {{ duration: 0.5 }}
        className= {`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>

            <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
                {/* LOGO */}

                <Motion.a>
                    
                </Motion.a>

            </div>

        </Motion.nav>

    </div>
  )
}

export default Navbar