import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-white pt-16 pb-8 border-t border-shaolin-gold/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-shaolin-gold mb-6">Shaolin & Wudang</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Dedicated to preserving and teaching the authentic arts of Shaolin and Wudang Kung Fu in Bangladesh. Join us to transform your life.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-shaolin-gold transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-shaolin-gold transition-colors">About Us</a></li>
                            <li><a href="#programs" className="hover:text-shaolin-gold transition-colors">Programs</a></li>
                            <li><a href="#branches" className="hover:text-shaolin-gold transition-colors">Our Branches</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-shaolin-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@shaolinwudangbd.com
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-shaolin-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                01777-449977
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-shaolin-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Head Office: Dhaka, Bangladesh
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shaolin & Wudang Kung Fu School Bangladesh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
