import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-shaolin-black text-white py-4 sticky top-0 z-50 shadow-md border-b border-shaolin-gold/20">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-shaolin-gold tracking-wider uppercase">
                    Shaolin & Wudang
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-shaolin-gold focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 font-medium">
                    <a href="#" className="hover:text-shaolin-gold transition-colors duration-300">Home</a>
                    <a href="#about" className="hover:text-shaolin-gold transition-colors duration-300">About</a>
                    <a href="#programs" className="hover:text-shaolin-gold transition-colors duration-300">Programs</a>
                    <a href="#branches" className="hover:text-shaolin-gold transition-colors duration-300">Branches</a>
                    <a href="#contact" className="hover:text-shaolin-gold transition-colors duration-300">Contact</a>
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-shaolin-black border-b border-shaolin-gold/20 md:hidden flex flex-col items-center py-4 space-y-4">
                        <a href="#" className="hover:text-shaolin-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" className="hover:text-shaolin-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#programs" className="hover:text-shaolin-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Programs</a>
                        <a href="#branches" className="hover:text-shaolin-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Branches</a>
                        <a href="#contact" className="hover:text-shaolin-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
