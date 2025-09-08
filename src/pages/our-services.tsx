import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, School, Users, Zap } from 'lucide-react'; // Using Lucide icons as placeholders

// Define the type for the service cards
interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const OurServices: React.FC = () => {
  const serviceCards: ServiceCard[] = [
    {
      icon: User,
      title: 'Personal Coaching',
      description: 'Our one-on-one coaching sessions are tailored to your unique needs, helping you achieve your skating goals with personal guidance and attention.',
    },
    {
      icon: School,
      title: 'School Coaching',
      description: 'We offer specialized coaching programs for schools, focusing on building skating skills while promoting teamwork and discipline among students.',
    },
    {
      icon: Users,
      title: 'Group Sessions',
      description: 'Join our group sessions for a fun and interactive way to improve your skating. Learn from experienced coaches while skating with friends.',
    },
    {
      icon: Zap,
      title: 'Skating Events',
      description: 'We organize exciting skating events, including competitions, exhibitions, and meetups, for individuals to showcase their talent and passion for skating.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[80px]"> {/* Applying the new rule */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 lg:py-28 text-center text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
              Our Skating Services
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Get to know more about our comprehensive offerings
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCards.map((card, index) => (
                <Card key={index} className="shadow-lg border border-gray-200 rounded-lg p-6 text-center
                                           hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-lime-500 rounded-lg flex items-center justify-center mr-4">
                      <card.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#0D111A]">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurServices;