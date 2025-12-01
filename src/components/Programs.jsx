import React from 'react';

const programs = [
    {
        title: 'Shaolin Kung Fu',
        description: 'Master the external hard style known for its explosive power and acrobatic techniques.',
        level: 'All Levels'
    },
    {
        title: 'Wudang Tai Chi',
        description: 'Cultivate internal energy (Qi) with soft, flowing movements for health and combat.',
        level: 'Beginner to Advanced'
    },
    {
        title: 'Self Defense',
        description: 'Practical techniques for real-world situations, focusing on awareness and efficiency.',
        level: 'Beginner'
    },
    {
        title: 'Kids Kung Fu',
        description: 'Building discipline, focus, and confidence in children through martial arts training.',
        level: 'Ages 5-12'
    }
];

const Programs = () => {
    return (
        <section id="programs" className="py-20 bg-shaolin-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-shaolin-gold mb-4">Training Programs</h2>
                    <div className="w-24 h-1 bg-shaolin-gold mx-auto"></div>
                    <p className="text-gray-400 mt-4">Comprehensive curriculum for all ages and skill levels</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-shaolin-black rounded-lg overflow-hidden border border-shaolin-gold/10 hover:border-shaolin-gold transition-colors duration-300">
                            <div className="p-8 flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                                    <span className="bg-shaolin-gold/20 text-shaolin-gold text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                        {program.level}
                                    </span>
                                </div>
                                <p className="text-gray-400 mb-6">
                                    {program.description}
                                </p>
                                <a href="#contact" className="text-shaolin-gold font-bold hover:text-white transition-colors inline-flex items-center">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
