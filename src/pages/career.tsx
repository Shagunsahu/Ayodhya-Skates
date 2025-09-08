import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Star, TrendingUp, Briefcase, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define types for career opportunities and benefits
interface CareerOpportunity {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Benefit {
  text: string;
}

const Careers: React.FC = () => {
  const careerOpportunities: CareerOpportunity[] = [
    {
      icon: GraduationCap,
      title: 'Coaching',
      description: 'Lead training sessions, mentor future stars, and build the skating talent of tomorrow.',
    },
    {
      icon: Star,
      title: 'Event Management',
      description: 'Plan and execute high-energy events, tournaments, and public showcases with impact.',
    },
    {
      icon: TrendingUp,
      title: 'Community Outreach',
      description: 'Drive engagement programs and help make skating accessible to every child.',
    },
    {
      icon: Briefcase,
      title: 'Academy Operations',
      description: 'Support day-to-day functions, scheduling, and execution across training centers.',
    },
  ];

  const benefits: Benefit[] = [
    { text: 'Purpose-Driven Impact - Transform young lives through the power of skating' },
    { text: 'Passion for Performance - Join a team of professionals driven by love for the sport' },
    { text: 'Growth-Oriented Culture - Mentorship, training, and real-world experience to help you grow' },
    { text: 'Innovation on Wheels - We value fresh ideas and forward-thinking in everything we do' },
    { text: 'A Culture of Camaraderie - Supportive, uplifting, and celebratory work environment' },
    { text: 'Recognition & Rewards - Career growth, acknowledgements, and fulfillment await' },
  ];

  return (
    <div className="min-h-screen flex flex-col"> {/* Added flex-col to ensure footer is at the bottom */}
      <Header />
      
      <main className="flex-grow pt-20"> 
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 lg:py-28 text-center text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Join The Ayodhya Skates
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-white/90">
              Where Passion Meets Purpose on Wheels
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-white/80">
              At The Ayodhya Skates, we don't just teach skating—we build futures, instill values,
              and foster champions.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              We are more than a skating academy—we are a movement dedicated to nurturing champions,
              inspiring confidence, and bringing the joy of skating to every doorstep.
            </p>
          </div>
        </section>

      
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Explore Career & Collaboration Opportunities
              <div className="w-24 h-1 bg-[#66cc33] mx-auto mt-4"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careerOpportunities.map((opportunity, index) => (
                <Card 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 "
                > 
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-lime-500 rounded-lg flex items-center justify-center mr-4">
                    <opportunity.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                  </div>
                </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className=" text-center text-3xl font-bold text-gray-900 mb-4">
              Why Choose The Ayodhya Skates?
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto mt-4"></div>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="shadow-md border border-green-200 bg-green-50/70 rounded-lg p-6 text-center
                             hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  <CardContent className="p-0">
                    <p className="text-lg font-medium text-gray-800 leading-relaxed">
                      {benefit.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 lg:py-28 text-center text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Roll With Us?
            </h2>
            <p className="text-xl mb-8">
              Whether you're building a coaching career or bringing skating to your institution—Ayodhya
              Skates is your platform for impact.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-8 md:flex md:justify-center items-center text-lg font-semibold">
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg font-semibold">
              <a href="tel:9696657577" className="flex items-center text-white hover:text-white/80 transition-colors duration-300">
                <Phone className="h-6 w-6 mr-3 text-white" />
                <span>Call us: 9696657577</span>
              </a>
              <a  className="flex items-center text-white hover:text-white/80 transition-colors duration-300">
                <MapPin className="h-6 w-6 mr-3 text-white" />
                <span>Visit us: RTO Office, Near Transport Nagar, Ayodhya, U.P.</span>
              </a>
            </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default Careers;