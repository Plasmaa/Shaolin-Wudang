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
                        <ul className="space-y-3 text-gray-400 mb-6">
                            <li className="flex items-center">
                                <i className="fa-solid fa-envelope text-shaolin-gold mr-3 w-5 text-center"></i>
                                kungfuwushubd@gmail.com
                            </li>
                            <li className="flex items-center">
                                <i className="fa-brands fa-whatsapp text-shaolin-gold mr-3 w-5 text-center text-lg"></i>
                                +880 1715-280700
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-location-dot text-shaolin-gold mr-3 w-5 text-center mt-1"></i>
                                Head Office: Dhaka, Bangladesh
                            </li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/shaolinkungfuacademybd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shaolin-gold/10 flex items-center justify-center text-shaolin-gold hover:bg-shaolin-gold hover:text-shaolin-black transition-all duration-300">
                                <i className="fa-brands fa-facebook-f text-lg"></i>
                            </a>
                            <a href="https://instagram.com/shifu_rezasaady" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shaolin-gold/10 flex items-center justify-center text-shaolin-gold hover:bg-shaolin-gold hover:text-shaolin-black transition-all duration-300">
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>
                            <a href="https://youtube.com/@shifusaady4277" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shaolin-gold/10 flex items-center justify-center text-shaolin-gold hover:bg-shaolin-gold hover:text-shaolin-black transition-all duration-300">
                                <i className="fa-brands fa-youtube text-lg"></i>
                            </a>
                            <a href="https://www.tiktok.com/@mdrezaulkarim9267" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shaolin-gold/10 flex items-center justify-center text-shaolin-gold hover:bg-shaolin-gold hover:text-shaolin-black transition-all duration-300">
                                <i className="fa-brands fa-tiktok text-lg"></i>
                            </a>
                        </div>
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
