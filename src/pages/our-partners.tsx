import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Heart, Globe, Users, Trophy, ShieldCheck, Building, GraduationCap, Star, Zap } from 'lucide-react';

// Import school images (You must have these files in your assets folder)
import aryavartAcademyImg from '@/assets/partnerships/aryavart-academy.jpg';
import bhavdiyaPublicSchoolImg from '@/assets/partnerships/bhavdiya-public-school.jpg';
import faizabadPublicSchoolImg from '@/assets/partnerships/faizabad-public-school.jpg';
import sethAnandramJaipuriaSchoolImg from '@/assets/partnerships/seth-anandram-jaipuria-school.jpg';
import hcjAcademyImg from '@/assets/partnerships/hcj-academy.jpg';
import jingleBellSchoolImg from '@/assets/partnerships/jingle-bell-school.jpg';
import jingleBellAcademyImg from '@/assets/partnerships/jingle-bell-academy.jpg';
import sethMrJaipuriaSchoolImg from '@/assets/partnerships/seth-mr-jaipuria-school.jpg';
import maRanjanaDeviInternationalSchoolImg from '@/assets/partnerships/maa-ranjana-devi-international-school.jpg';
import drBrAmbedkarStadiumImg from '@/assets/partnerships/dr-br-ambedkar-stadium.jpg';
import ntpcTandaImg from '@/assets/partnerships/ntpc-tanda.jpg';


// Define data types for the page content
interface PartnerSchool {
  name: string;
  image: string;
}

interface PartnershipBenefit {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface PartnershipImpact {
    icon: React.ElementType;
    value: string;
    description: string;
}

const OurPartners: React.FC = () => {

    const partnerSchools: PartnerSchool[] = [
        { name: 'Aryavart Academy', image: aryavartAcademyImg},
        { name: 'Bhavdiya Public School, Ayodhya', image: bhavdiyaPublicSchoolImg },
        { name: 'Faizabad Public School, Ayodhya', image: faizabadPublicSchoolImg },
        { name: 'Seth Anandram Jaipuria School, Majnai, Ayodhya', image: sethAnandramJaipuriaSchoolImg },
        { name: 'H.C.J. Academy, Ayodhya', image: hcjAcademyImg},
        { name: 'Jingle Bell School, Ayodhya', image: jingleBellSchoolImg },
        { name: 'Jingle Bell Academy', image: jingleBellAcademyImg},
        { name: 'Seth M.R.Jaipuria School, Ayodhya', image: sethMrJaipuriaSchoolImg },
        { name: 'Maa Ranjana Devi International School, Ayodhya', image: maRanjanaDeviInternationalSchoolImg},
        { name: 'Dr BR Ambedkar Stadium Makbra', image: drBrAmbedkarStadiumImg },
        { name: 'NTPC Tanda', image: ntpcTandaImg },
    ];

    const partnershipBenefits: PartnershipBenefit[] = [
        { icon: ShieldCheck, title: 'Strategic Alliances', description: 'Building strong partnerships with national and international skating organizations' },
        { icon: Award, title: 'Certified Training', description: 'All programs are certified by recognized skating federations and authorities' },
        { icon: Globe, title: 'Global Recognition', description: 'International partnerships opening doors to world-class competitions' },
        { icon: Heart, title: 'Community Impact', description: 'Working together to promote skating culture across India' },
    ];

    const partnershipImpacts: PartnershipImpact[] = [
        { icon: Trophy, value: '50+ National Champions', description: 'Our partnership network has helped produce over 50 national level champions' },
        { icon: Users, value: '10,000+ Students Trained', description: 'Through our partner network, we’ve trained thousands of skating enthusiasts' },
        { icon: Star, value: 'International Recognition', description: 'Multiple international medals and recognition through federation partnerships' },
        { icon: Zap, value: 'Olympic Preparation', description: 'Partnership with IOA for Olympic sport development initiatives' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 lg:py-28 text-center text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-5xl font-bold mb-6">
                            Our Trusted Partners
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Collaborating with leading organizations to build India’s skating excellence
                        </p>
                    </div>
                </section>

                {/* Partner Schools Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                                Partners
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                We are proud to partner with prestigious educational institutions and organizations across Ayodhya
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {partnerSchools.map((school, index) => (
                                <Card key={index} className="shadow-lg border border-gray-200 rounded-lg overflow-hidden
                                                                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <CardContent className="p-0">
                                        <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                                            <img src={school.image} alt={school.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-4 text-center">
                                            <h4 className="font-semibold text-base text-[#0D111A] leading-tight mt-2">
                                                {school.name}
                                            </h4>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partnership Benefits */}
                <section className="py-20 bg-green-50/50"> {/* Light green background */}
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                                Partnership Benefits
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our strategic partnerships bring numerous advantages to our students and the skating community
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
                            {partnershipBenefits.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-[#0D111A]">{benefit.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partnership Impact */}
                <section className="py-16 bg-gradient-to-br from-green-50 to-lime-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                                Partnership Impact
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Together with our partners, we’ve achieved remarkable milestones in Indian skating
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
                            {partnershipImpacts.map((impact, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center border-2 border-[#66cc33]">
                                        <impact.icon className="h-8 w-8 text-[#66cc33]" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 text-[#0D111A]">{impact.value}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{impact.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-700 via-green-700 to-lime-600 py-20 text-center text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-6">
                            Interested in Partnership?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join us in our mission to develop skating talent and promote the sport across India
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className='bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                                Partnership Inquiry
                            </button>
                            <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors'>
                                Download Partnership Guide
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OurPartners;