import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, GraduationCap, Users, Medal, Zap, Star, Trophy, Circle, Target, Clock, Heart } from 'lucide-react';

// Define the type for the discipline cards
interface DisciplineItem {
  icon: React.ElementType;
  title: string;
  about: string;
  benefits: string[];
}

const Discipline: React.FC = () => {

  const disciplines: DisciplineItem[] = [
    {
      icon: Zap,
      title: 'Speed Skating',
      about: 'Speed skating is all about the thrill of racing, combining velocity with precision. Skaters compete in both quad and inline skates, tackling events over multiple distances on indoor and outdoor tracks. The sport demands an aerodynamic stance, powerful strides, and balance through sharp turns.',
      benefits: ['Ideal for skaters who crave competition and are determined to develop both speed and stamina', 'Improves cardiovascular fitness, muscle strength, and mental toughness'],
    },
    {
      icon: Star,
      title: 'Artistic Skating',
      about: 'Artistic skating blends dance, gymnastics, and figure skating. Skaters perform choreographed routines to music, featuring spins, jumps, and intricate footwork. This includes solo, pair, and team events.',
      benefits: ['Appeals to those with a creative flair and love for performance, emphasizing rhythm, expression, and style', 'Enhances balance, coordination, grace, and self-expression'],
    },
    {
      icon: Users, // Using a user group icon for Roller Hockey
      title: 'Roller Hockey',
      about: 'Roller hockey adapts ice hockey to roller skates, using sticks to control a ball or puck. The game is fast-paced, requiring strategic passing and teamwork.',
      benefits: ['Perfect for skaters who enjoy competition and collaboration', 'Builds cardiovascular fitness, agility, and reflexes'],
    },
    {
      icon: Users, // Using a user group icon for Inline Hockey
      title: 'Inline Hockey',
      about: 'Played on inline skates, inline hockey emphasizes puck control and skating skills on hard surfaces.',
      benefits: ['Requires exceptional balance and coordination', 'Strengthens core and leg muscles, enhances strategy and coordination'],
    },
    {
      icon: Clock, // Using a clock icon for Inline Freestyle
      title: 'Inline Freestyle',
      about: 'Skaters perform tricks, spins, and jumps around cones or in designated areas.',
      benefits: ['Celebrates style and personal creativity', 'Builds agility, leg strength, and balance'],
    },
    {
      icon: Zap, // Using a zap icon for Inline Alpine
      title: 'Inline Alpine',
      about: 'Like alpine skiing on wheels, skaters navigate slalom courses on downhill slopes.',
      benefits: ['Great for those who love technical challenges and speed', 'Develops reaction time, focus, and leg strength'],
    },
    {
      icon: Zap, // Using a zap icon for Inline Downhill
      title: 'Inline Downhill',
      about: 'Skaters race down steep slopes at high speeds without gates.',
      benefits: ['For thrill-seekers seeking challenge and adrenaline', 'Builds strength, control, and mental resilience'],
    },
    {
      icon: Users, // Using a user group icon for Roller Derby
      title: 'Roller Derby',
      about: 'A contact sport where teams score by lapping opponents while blockers defend.',
      benefits: ['Fosters team spirit and endurance', 'Improves physical fitness, toughness, and cooperation'],
    },
    {
      icon: Target, // Using a target icon for Roller Freestyle
      title: 'Roller Freestyle',
      about: 'Involves tricks and jumps on ramps, rails, and park obstacles.',
      benefits: ['Encourages pushing limits with innovation and stunts', 'Boosts strength, agility, and creativity'],
    },
    {
      icon: Trophy, // Using a trophy icon for Skateboarding
      title: 'Skateboarding',
      about: 'Performing tricks in parks or street environments using a skateboard.',
      benefits: ['Thrives on self-expression and breaking boundaries', 'Improves balance, agility, and perseverance'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 text-center text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Disciplines in Roller Sports
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Roller sports offer a vast world of possibilities, encompassing speed, skill, artistry, and athleticism. Each discipline presents a unique challenge, allowing skaters to discover their passion, express themselves, and excel. The Uttar Pradesh Roller Skating Association (UPRSA) proudly promotes all major roller sports, supporting athletes in discovering and advancing in the discipline that inspires them.
            </p>
          </div>
        </section>
        
        {/* Disciplines Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {disciplines.map((discipline, index) => (
                <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className='h-2 bg-gradient-to-r from-green-600 to-lime-500'></div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-lime-500 rounded-lg flex items-center justify-center mr-4">
                        <discipline.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ">
                        {discipline.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semi-bold mb-2 text-gray-900">About:</h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {discipline.about}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-gray-900">Why It's Unique & Benefits:</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 leading-relaxed">
                          {discipline.benefits.map((benefit, bIndex) => (
                            <li key={bIndex}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default Discipline;