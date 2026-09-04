import React from 'react';

export function Navbar() {
    return (
        <nav className="flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-black font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-black font-medium">About</a>
        </nav>
    );
}

export default Navbar;
