import React from 'react';
import founderImage from '@/assets/founder.jpg'; 

const Founder: React.FC = () => {
    return (
        <section id="founder" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Founder
                    </h2>
                    <div className="w-24 h-1 bg-[#66cc33] mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#66cc33] shadow-lg">
                        <img 
                            src={founderImage} 
                            alt="Ravinder Kumar, Founder" 
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#66cc33] rounded-full flex items-center justify-center border-2 border-white">
                            <span className="text-white font-bold text-lg">
                                Rk
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Ravinder Kumar
                        </h3>
                        <p className="text-lg font-semibold text-[#66cc33] mb-6">
                            Founder & Head Coach
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            With over 10+ years of professional athletic experience and a distinguished career 
                            as a national-level skater, our founder Ravinder Kumar brings a wealth of 
                            expertise, discipline, and passion to Ayodhya Skates. His journey from elite 
                            competition to coaching reflects a deep-rooted commitment to the sport and its 
                            transformative power.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            A certified NIS coach and holder of an M.P.Ed degree, he also serves as the 
                            Regional President of Ayodhya—further amplifying his influence and dedication to 
                            promoting skating at the grassroots and regional levels. Through his visionary 
                            leadership and hands-on mentorship, he has guided hundreds of aspiring skaters 
                            toward success—instilling in them not just technical excellence, but also 
                            confidence, resilience, and a winning mindset.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;