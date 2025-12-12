import React from 'react';
import masterPose from '../assets/master-pose.jpg';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-shaolin-black text-white">
            {/* Hero Section */}
            <div className="bg-shaolin-dark py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-shaolin-gold mb-4">About Our Academy</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover the legacy of Shaolin and Wudang Kung Fu in Bangladesh.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-20">
                {/* Video Section */}
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden border-2 border-shaolin-gold/30 shadow-2xl bg-black">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshaolinkungfuacademybd%2Fvideos%2F770699408862815%2F&show_text=false&width=476&t=0"
                            width="100%"
                            height="100%"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>

                {/* Master Section */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="relative rounded-lg overflow-hidden border-2 border-shaolin-gold/30">
                            <img
                                src={masterPose}
                                alt="GrandMaster Pose"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-shaolin-gold">Our Leadership</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Under the guidance of <span className="text-shaolin-gold font-bold">GrandMaster Senna Shi De Feng</span> and led by <span className="text-shaolin-gold font-bold">Instructor Md. Rezaul Karim</span>, our academy stands as a beacon of authentic martial arts training.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Our instructors are not just teachers; they are lifelong students of the art, dedicated to passing down the ancient wisdom of Shaolin and Wudang. They bring years of disciplined practice and a deep understanding of martial philosophy to every class.
                        </p>
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="bg-shaolin-dark p-8 md:p-12 rounded-lg border-l-4 border-shaolin-gold">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Kung Fu is more than just fighting; it is a way of life. At Shaolin & Wudang Kung Fu School, we believe in the harmony of body and mind. Our training emphasizes:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-shaolin-gold rounded-full mr-3"></span>
                            Discipline and Respect
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-shaolin-gold rounded-full mr-3"></span>
                            Mental Focus and Clarity
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-shaolin-gold rounded-full mr-3"></span>
                            Physical Strength and Flexibility
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-shaolin-gold rounded-full mr-3"></span>
                            Self-Defense and Confidence
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
