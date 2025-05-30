import { IconContext } from 'react-icons';
import mobileMenu from '../../img/icon-menu.svg'
import mobileMenuClose from '../../img/icon-menu-close.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {SidebarData} from './SidebarData';

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: undefined}}>
        <div className="menu-bars">
                <img src={mobileMenu} alt='' onClick={showSidebar}/>
        </div>
        <nav className={sidebar ? 'nav-menu active right' : 'nav-menu right'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <div className='navbar-toggler mobile-menu-close'>
                    <img src={mobileMenuClose} alt='' style={{ width: '20px', height: '20px' }} />
                </div>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
        
    )
}

export default MobileMenu;