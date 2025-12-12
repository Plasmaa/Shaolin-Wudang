import React from 'react';

const branches = [
    { name: 'Dhaka (Head Branch)', address: 'Kalabagan, Dhaka', phone: '01777-449977' },
    { name: 'Narsingdi', address: 'Narsingdi', phone: '01766580061' },
    { name: 'Kishoreganj', address: 'Kishoreganj', phone: '01629042736' },
    { name: 'Chattogram', address: 'Chattogram', phone: '01616481322' },
    { name: 'Sylhet', address: 'Sylhet', phone: '01952797980' },
    { name: "Cox's Bazar", address: "Cox's Bazar", phone: '01826530015' },
];

const Branches = () => {
    return (
        <section id="branches" className="py-20 bg-shaolin-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-shaolin-gold mb-4">Our Branches</h2>
                    <div className="w-24 h-1 bg-shaolin-gold mx-auto"></div>
                    <p className="text-gray-400 mt-4">Find a training center near you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div key={index} className="bg-shaolin-black p-8 rounded-lg border border-shaolin-gold/10 hover:border-shaolin-gold/50 transition-all duration-300 group">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-shaolin-gold transition-colors">{branch.name}</h3>
                            <div className="space-y-2 text-gray-400">
                                <p className="flex items-start">
                                    <svg className="w-5 h-5 text-shaolin-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {branch.address}
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-5 h-5 text-shaolin-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {branch.phone}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Branches;
