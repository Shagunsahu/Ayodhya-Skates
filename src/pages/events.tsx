import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Calendar, MapPin, Users, Award, Trophy, Star } from 'lucide-react';

// Define data types for the page content
interface UpcomingEvent {
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isRegistrationOpen: boolean;
}

interface PastEvent {
  title: string;
  date: string;
  participants: string;
  description: string;
}

interface WhyJoinEvent {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Events: React.FC = () => {
  const upcomingEvents: UpcomingEvent[] = [
    {
      title: 'Summer Skating Championship',
      category: 'Competition',
      description: 'Annual championship featuring all skill levels with exciting prizes',
      date: 'July 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Ayodhya Skates Academy',
      isRegistrationOpen: true,
    },
    {
      title: 'Kids Fun Day',
      category: 'Workshop',
      description: 'Special event for kids with games, activities and prizes',
      date: 'July 22, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Ayodhya Skates Academy',
      isRegistrationOpen: true,
    },
    {
      title: 'Professional Coaching Workshop',
      category: 'Workshop',
      description: 'Advanced techniques workshop with national level coaches',
      date: 'August 5, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Ayodhya Skates Academy',
      isRegistrationOpen: true,
    },
    {
      title: 'Community Skating Marathon',
      category: 'Community',
      description: 'Community event promoting fitness and skating awareness',
      date: 'August 20, 2024',
      time: '6:00 AM - 12:00 PM',
      location: 'City Sports Complex',
      isRegistrationOpen: false,
    },
  ];

  const pastEvents: PastEvent[] = [
    {
      title: 'Spring Championship 2024',
      date: 'March 15, 2024',
      participants: '150+ Participants',
      description: 'Record participation with amazing performances',
    },
    {
      title: 'International Skating Day',
      date: 'February 10, 2024',
      participants: '200+ Participants',
      description: 'Community celebration with exhibitions and workshops',
    },
    {
      title: 'Winter Training Camp',
      date: 'December 20-25, 2023',
      participants: '80+ Participants',
      description: 'Intensive 5-day training program with expert coaches',
    },
  ];

  const whyJoin: WhyJoinEvent[] = [
    { icon: Trophy, title: 'Competitions', description: 'Test your skills in exciting competitions' },
    { icon: Users, title: 'Community', description: 'Connect with fellow skating enthusiasts' },
    { icon: Star, title: 'Learning', description: 'Learn from expert coaches and improve your skills' },
    { icon: Clock, title: 'Regular Events', description: 'Year-round calendar of exciting activities' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 text-center text-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Events
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join our exciting skating events, competitions, and community activities
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mx-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-[#66cc33] mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{event.category}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base mb-6">
                      {event.description}
                    </p>
                    <div className="space-y-3 mb-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-[#66cc33]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-green-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-[#66cc33]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {event.isRegistrationOpen ? (
                        <button className='px-6 py-3 rounded-lg font-semibold transition-all bg-gradient-to-r from-green-600 to-lime-500 text-white hover:from-green-700 hover:to-lime-600'>
                          Register Now
                        </button>
                      ) : (
                        <button className='px-6 py-3 rounded-lg font-semibold transition-all bg-gray-300 text-gray-500 cursor-not-allowed'>
                          Registration Closed
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Past Events
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10">
              {pastEvents.map((event, index) => (
                <Card key={index} className="bg-green-50 rounded-xl p-6 text-center">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="text-gray-600 text-sm mb-3">
                      <span className="font-semibold mb-3">{event.date}</span> 
                    <div className="flex items-center justify-center space-x-2 text-[#66cc33] pt-3">
                      <Users className="h-5 w-5" />
                      <span>{event.participants}</span>
                    </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Our Events */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join Our Events?
              </h2>
              <div className="w-24 h-1 bg-[#66cc33] mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {whyJoin.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#0D111A]">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Events;