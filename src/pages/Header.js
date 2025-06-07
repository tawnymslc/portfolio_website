
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {

    const handleDisableSnap = () => {
    const wrapper = document.getElementById('fullpage-wrapper');
        if (wrapper) {
            wrapper.classList.add('disable-snap');
            setTimeout(() => {
            wrapper.classList.remove('disable-snap');
            }, 1000); // match duration in <ScrollLink>
        }
    };

    return (
        <header className="floating-header">
            <div className="header-inner">
                <div className="brand-name">
                <span className="brand-bold">Tawny</span>
                <span className="brand-light">Mathi</span>
                </div>
                <nav className="nav-links">
                <ScrollLink to="landing" smooth={true} duration={100} containerId="fullpage-wrapper"
                    className="nav-item-link" onClick={handleDisableSnap}>Home</ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={100} containerId="fullpage-wrapper"
                    className="nav-item-link" onClick={handleDisableSnap}>Projects</ScrollLink>
                <ScrollLink to="skills" smooth={true} duration={100} containerId="fullpage-wrapper"
                    className="nav-item-link" onClick={handleDisableSnap}>Skills</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={100} containerId="fullpage-wrapper"
                    className="nav-item-link" onClick={handleDisableSnap}>About</ScrollLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;