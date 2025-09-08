import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // <-- Make sure this import is present
import { Building, Globe, Users, Award, Heart, ShieldCheck } from 'lucide-react';

// Import school images
import aryavartAcademyImg from '@/assets/partnerships/aryavart-academy.jpg';
import bhavdiyaPublicSchoolImg from '@/assets/partnerships/bhavdiya-public-school.jpg';
import faizabadPublicSchoolImg from '@/assets/partnerships/faizabad-public-school.jpg';
import sethAnandramJaipuriaSchoolImg from '@/assets/partnerships/seth-anandram-jaipuria-school.jpg';
import hcjAcademyImg from '@/assets/partnerships/hcj-academy.jpg';
import jingleBellSchoolImg from '@/assets/partnerships/jingle-bell-school.jpg';
import jingleBellAcademyImg from '@/assets/partnerships/jingle-bell-academy.jpg';
import sethMrJaipuriaSchoolImg from '@/assets/partnerships/seth-mr-jaipuria-school.jpg';

// Define the type for the partner schools with images
interface PartnerSchool {
  name: string;
  image: string;
}

// Define the type for the partnership benefits
interface Partnership {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Partners: React.FC = () => {
  const partnerSchools: PartnerSchool[] = [
    { name: 'Aryavart Academy', image: aryavartAcademyImg},
    { name: 'Bhavdiya Public School, Ayodhya', image: bhavdiyaPublicSchoolImg},
    { name: 'Faizabad Public School, Ayodhya', image: faizabadPublicSchoolImg },
    { name: 'Seth Anandram Jaipuria School, Majnai, Ayodhya', image: sethAnandramJaipuriaSchoolImg},
    { name: 'H.C.J. Academy, Ayodhya', image: hcjAcademyImg },
    { name: 'Jingle Bell School, Ayodhya', image: jingleBellSchoolImg},
    { name: 'Jingle Bell Academy', image: jingleBellAcademyImg},
    { name: 'Seth M.R.Jaipuria School, Ayodhya', image: sethMrJaipuriaSchoolImg},
  ];

  const partnerships: Partnership[] = [
    {
      icon: ShieldCheck, 
      title: 'Strategic Alliances',
      description: 'Building strong partnerships with national and international skating organizations',
    },
    {
      icon: Award,
      title: 'Certified Training',
      description: 'All programs are certified by recognized skating federations and authorities',
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'International partnerships opening doors to world-class competitions',
    },
    {
      icon: Heart, 
      title: 'Community Impact',
      description: 'Working together to promote skating culture across India',
    },
  ];

  return (
    <section className="py-20 bg-white"> 
      <div className="text-center mb-16 px-4"> 
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Trusted Partners
        </h2>
        <div className="w-24 h-1 bg-[#66cc33] mx-auto mt-4"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          We are proud to partner with prestigious educational institutions and organizations across Ayodhya
        </p>
      </div>

      <div className="mb-20 px-4"> 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"> 
          {partnerSchools.map((school, index) => (
            <Card key={index} className="shadow-lg border border-gray-200 rounded-lg overflow-hidden
                                       hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover"
                  />
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

      <div className="px-4"> 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> 
          {partnerships.map((partnership, index) => (
            <div key={index} className="text-center"> 
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-700 via-green-600 to-lime-500 rounded-full flex items-center justify-center shadow-md">
                <partnership.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#0D111A]">{partnership.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{partnership.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* View All Partners Button */}
       <div className="text-center mt-16">
        
          <a className="bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          href="/our-partners">
            View All Partners
          </a>
        
      </div>
    </section>
  );
};

export default Partners;