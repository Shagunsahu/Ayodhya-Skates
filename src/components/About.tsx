import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Users, Trophy, UserCheck, Award, TrendingUp, Eye, Goal } from 'lucide-react'; 

// Define the type for the core values items
interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Define the type for the features list
type FeatureItem = string;

// Define the type for the statistics
interface StatItem {
  value: string;
  label: string;
  icon: React.ElementType; // Icon for the stats
}

const About: React.FC = () => {
  const values: ValueItem[] = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are deeply passionate about skating and strive to ignite that same enthusiasm in every individual we coach.',
    },
    {
      icon: Trophy, 
      title: 'Excellence',
      description: 'We uphold the highest standards in training, mentoring, and competition, continuously pushing the boundaries of what is possible.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Our programs are designed to welcome and support individuals of every background and skill level.',
    },
    {
      icon: Target,
      title: 'Community',
      description: 'We foster lasting connections and a strong sense of belonging among skaters, parents, and coaches alike.',
    },
  ];

  const features: FeatureItem[] = [
    'Professional coaching by certified instructors',
    'Modern facilities with safety-first approach',
    'Programs for all ages and skill levels',
    'Competitive training and recreational fun',
    'Strong community and supportive environment',
  ];

  const stats: StatItem[] = [
    { value: '500+', label: 'Students Trained', icon: UserCheck },
    { value: '10+', label: 'Years Experience', icon: TrendingUp },
    { value: '50+', label: 'Awards Won', icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-white"> 
      {/* The container class has been removed from this top-level div */}
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#0D111A] mb-16">
          About Ayodhya Skates
          <div className="w-24 h-1 bg-[#66cc33] mx-auto mt-4"></div>
        </h2>
        
        {/* Added px-4 here to maintain padding */}
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start mb-20"> 
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
              Building Dreams on Wheels Since Our Foundation
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Ayodhya Skates was founded by a team of highly qualified professional
              athletes with a passion for sharing their expertise and making professional skating
              accessible to all children. We are driven by a vision to nurture young skaters and
              provide them with a comprehensive platform to excel in roller sports.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our mission is to instill core values such as Discipline, Confidence, Health, and
              Skills, ensuring that every child not only learns to skate but also develops lifelong
              qualities that extend beyond the skating rink.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At The Ayodhya Skates, we emphasize both technical training and personal
              development. Skating is not just a sport; it's a journey of self-discovery, hard work,
              and continuous improvement.
            </p>

            {/*<div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-[#66cc33] mx-auto mb-2" />
                  <div className="text-2xl lg:text-3xl font-bold text-[#66cc33] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>*/}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <UserCheck className="h-6 w-6 text-green-600 mr-2" />
                  <div className="text-2xl lg:text-3xl font-bold text-green-600">
                    500+
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Students Trained
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-lime-600 mr-2" />
                  <div className="text-2xl lg:text-3xl font-bold text-lime-600">
                    10+
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Years Experience
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-emerald-600 mr-2" />
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-600">
                    50+
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Awards Won
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 p-8 rounded-lg shadow-xl text-white h-fit"> 
            <h3 className="text-xl lg:text-2xl font-bold mb-6">
              Why Choose Ayodhya Skates?
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-white mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-9.293a1 1 0 011.414 0L10 9.707l1.293-1.294a1 1 0 011.414 1.414L11.414 11l1.293 1.293a1 1 0 01-1.414 1.414L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  <span className="text-sm lg:text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20 px-4">
          <Card className="shadow-lg bg-green-50/50 border border-green-200/50"> 
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center border-2 border-[#66cc33]">
                <Goal className="h-10 w-10 text-[#66cc33]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0D111A]">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Through structured training, value-based mentorship, and community engagement, we aim to unlock potential, promote discipline, encourage creativity, foster inclusion, and build community among coaches, athletes, and families who grow together.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-green-50/50 border border-green-200/50"> 
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center border-2 border-[#66cc33]">
                <Eye className="h-10 w-10 text-[#66cc33]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0D111A]">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Inspiring Excellence. Building Communities. We envision a community where skating symbolizes freedom, discipline, and joy. Our goal is to cultivate a nurturing environment that empowers individuals to unlock their full potential, both on and off the rink.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="py-16 bg-gradient-to-r from-green-700 via-green-600 to-lime-500">
          <div className="container mx-auto px-4 text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">Our Core Values</h3>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do at Ayodhya Skates
            </p>
          </div>

          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center bg-white/20 border border-white/50 text-white rounded-lg shadow-lg 
                           hover:bg-white/30 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-[#66cc33]" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-white/80 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;