import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Medal, Globe, Trophy, Star } from 'lucide-react';
// Import some placeholder images for the photos section
import achievementPhoto1 from '@/assets/gallery/image1.JPG'; 
import achievementPhoto2 from '@/assets/gallery/image2.JPG';
import achievementPhoto3 from '@/assets/gallery/image3.JPG';
import achievementPhoto4 from '@/assets/gallery/image4.JPG';
// Define data types for the page content
interface StatItem {
  icon: React.ElementType;
  value: string;
  description: string;
}

interface MilestoneItem {
  icon: React.ElementType;
  description: string;
}

interface WallOfFameItem {
  title: string;
  description: string;
}

interface PhotoItem {
  src: string;
  alt: string;
}

const Achievements: React.FC = () => {
  const achievementsStats: StatItem[] = [
    { icon: Award, value: '50+', description: 'Gold Medals in State Championships' },
    { icon: Star, value: '1st', description: 'Nationally Recognized as Best Skating Academy' },
    { icon: Globe, value: '1st', description: 'Proudly Representing Our State Nationwide' },
    { icon: Trophy, value: '100+', description: 'Champions Trained' },
  ];

  const milestones: MilestoneItem[] = [
    { icon: Award, description: 'Gold medals in state championships for consecutive years.' },
    { icon: Star, description: 'Recognition as the best skating academy nationally.' },
    { icon: Globe, description: 'Represented at State and National competitions with pride.' },
    { icon: Trophy, description: 'State Level Academy that has produced numerous State and National Champions.' },
  ];

  const wallOfFame: WallOfFameItem[] = [
    {
      title: 'Double Gold Glory',
      description: 'One of our students achieved remarkable success by winning two Gold Medals at the 5th Open State Roller Sporter Championship, while four other students under our guidance reached the semi-final stage, showcasing the strength of our training system.',
    },
    {
      title: 'Dominating the State Stage',
      description: 'At the 10th UP State Speed Roller Skating Championship held in Noida, 6 of our students were among the 60 participants who qualified for the highly competitive four-day championship—a testament to their discipline and our focused coaching.',
    },
    {
      title: 'District Champions in Multiple Categories',
      description: 'In a field of nearly 250 participants at the District Roller Skating Competition, our students stood tall with Gold Medal - Under-5 category, Silver Medal - Under 5 to 7 Girls Open category, Bronze Medal – Boys Quad category, Gold Medal – Fancy Inline (5 laps), Gold Medal – Combination (5 laps), and Sweep in Under 7-9 Boys Quad category.',
    },
    {
      title: 'Podium Success at the State Open',
      description: 'In the 4th UP State Open Roller Skating Championship 2023, one of our skaters secured a Bronze Medal, while three others emerged as runners-up, adding another feather to our cap of achievements.',
    },
    {
      title: 'Selection at the Regional Level',
      description: 'Five of our talented athletes earned selection for the prestigious 5th UP Open State Regional Roller Sporer Competition held in Ghaziabad, further solidifying Ayodhya Skates’ reputation as a powerhouse in roller sports training.',
    },
  ];

  const photos: PhotoItem[] = [
    { src: achievementPhoto1, alt: 'State Championship' },
    { src: achievementPhoto2, alt: 'State Championship' },
    { src: achievementPhoto3, alt: 'District Championship' },
    { src: achievementPhoto4, alt: 'Victory ceremony' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 text-center text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Achievements
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Celebrating milestones of determination and success. Witness the journey of
              excellence through the outstanding achievements of our team, driven by passion and
              commitment.
            </p>
          </div>
        </section>
          {/* Photos Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {photos.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-0 overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" 
                        />
                         {/* Overlay for description */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <h3 className='text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{image.alt}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
        {/* Milestones Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Milestones That Define Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Over the years, we have achieved remarkable milestones, setting benchmarks of
                excellence in every competition. Our team's dedication and perseverance have resulted
                in numerous accolades at the State and National levels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-green-50 rounded-xl p-8 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-700 via-green-600 to-lime-500 rounded-full flex items-center justify-center border-2 border-[#66cc33]">
                      <milestone.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements Stats Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
               🏆 Our Achievements - Proof of Excellence on Wheels
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mt-6">
                At Ayodhya Skates, we don't just train athletes - we build champions. Our trophy case
                tells the story, but the real magic happens every day on the rink. Here's what sets us
                apart:
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8 text-center">
              {achievementsStats.map((stat, index) => (
                <div key={index}>
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <stat.icon className="h-10 w-10 text-[#66cc33]" />
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-300 mb-2">{stat.value}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wall of Fame */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Wall of Fame
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                At The Ayodhya Skates, excellence is not just a goal—it’s a consistent outcome. Our skaters reflect a dedication of our young athletes. Here are some proud milestones that exemplify the impact of our coaching:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {wallOfFame.map((item, index) => (
                <Card key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-green-600 mb-4">{item.title}</h3>
                    <p className=" text-gray-600 leading-relaxed">{item.description}</p>
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

export default Achievements;