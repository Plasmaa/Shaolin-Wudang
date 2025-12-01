import React from 'react';
import instructor1 from '../assets/instructor1.jpg';
import instructor2 from '../assets/instructor2.jpg';

const AboutUs = () => {
    return (
        <section id="about" className="py-20 bg-shaolin-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-shaolin-gold mb-4">About Us</h2>
                    <div className="w-24 h-1 bg-shaolin-gold mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Images Section */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="relative rounded-lg overflow-hidden border-2 border-shaolin-gold/30 transform translate-y-8">
                            <img
                                src={instructor1}
                                alt="GrandMaster Senna Shi De Feng"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative rounded-lg overflow-hidden border-2 border-shaolin-gold/30 transform -translate-y-8">
                            <img
                                src={instructor2}
                                alt="Instructor Md. Rezaul Karim"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 space-y-6">
                        <h3 className="text-3xl font-bold text-white">
                            Welcome to <span className="text-shaolin-gold">Shaolin and Wudang</span> Kung-Fu School Bangladesh
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            We are a proud branch of the International Wushu Federation Kung Fu Shaolin Wudang, under the guidance of <span className="text-shaolin-gold font-bold">GrandMaster Senna Shi De Feng</span>. Our mission is to bring the authentic art, discipline, and philosophy of Shaolin and Wudang Kung Fu to students across Bangladesh, blending tradition with modern training methods.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Led by <span className="text-shaolin-gold font-bold">Instructor Md. Rezaul Karim</span>, a dedicated martial artist and passionate teacher, our school focuses on more than just physical skills. We teach respect, focus, discipline, and the mental strength that comes from years of martial arts practice. Whether you’re a beginner wanting to learn the basics or an advanced student aiming to master Kung Fu, our programs are designed to help you grow both physically and mentally.
                        </p>

                        <div className="bg-shaolin-dark p-6 rounded-l-lg border-l-4 border-shaolin-gold">
                            <p className="text-gray-300 italic">
                                "At Shaolin and Wudang Kung-Fu School Bangladesh, we believe that martial arts is a journey—one that builds confidence, self-control, and a lifelong love for the art. Join us, and be part of a community that honors tradition, embraces excellence, and pushes you to achieve your personal best."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
