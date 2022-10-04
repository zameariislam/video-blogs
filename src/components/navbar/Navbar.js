import React from 'react';
import logoIcon from '../../assets/lws.svg'
import searchIcon from '../../assets/search.svg'
import Search from './Search';

const Navbar = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
        <div
            class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
        >
            <a href="/">
                <img
                    class="h-10"
                    src={logoIcon}
                    alt="Learn with Sumit"
                />
            </a>
            <div
                class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
            >
                {/* search  */}
                <Search/>
               
                <img
                    class="inline h-4 cursor-pointer"
                    src={searchIcon}
                    alt="Search"
                />
            </div>
        </div>
    </nav>
    );
};

export default Navbar;