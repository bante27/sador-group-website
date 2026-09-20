import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
        </nav>
    );
}

export default Navbar;