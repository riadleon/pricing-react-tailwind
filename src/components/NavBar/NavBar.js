import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' }
    ]
    return (
        <nav className='bg-purple-300 w-full '>

            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    // open ? 'close' : 'open'
                    
                    open ? <XMarkIcon ></XMarkIcon> : <Bars3Icon ></Bars3Icon>
                }
            </div>

            <ul className= {`md:flex w-full bg-purple-300 justify-center absolute md-static
            lg:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]' }`} >
                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;