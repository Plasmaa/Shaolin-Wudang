import React from 'react';
import teacherImg from '../assets/teacher.jpg';
import teacherMobileImg from '../assets/teacher-mobile.png';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-shaolin-black/80 via-shaolin-black/60 to-shaolin-black z-10"></div>

            {/* Background Image - Mobile */}
            <div className="absolute inset-0 z-0 md:hidden">
                <img
                    src={teacherMobileImg}
                    alt="Master"
                    className="w-full h-full object-cover object-right-top opacity-50"
                />
            </div>

            {/* Background Image - Desktop */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <img
                    src={teacherImg}
                    alt="Master"
                    className="w-full h-full object-cover object-top opacity-50"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                    <span className="block text-shaolin-gold mb-2">Shaolin & Wudang</span>
                    Kung Fu School
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
                    Master the ancient arts of body and mind. Join the premier Kung Fu academy in Bangladesh.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="#contact" className="px-8 py-4 bg-shaolin-gold text-shaolin-black font-bold text-lg rounded hover:bg-yellow-500 transition-colors duration-300 uppercase tracking-wide">
                        Start Training
                    </a>
                    <a href="#programs" className="px-8 py-4 border-2 border-shaolin-gold text-shaolin-gold font-bold text-lg rounded hover:bg-shaolin-gold hover:text-shaolin-black transition-all duration-300 uppercase tracking-wide">
                        View Programs
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
