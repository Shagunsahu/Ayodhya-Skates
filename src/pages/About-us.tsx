import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import founderImage from '@/assets/founder.jpg';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

// Define data types for the page content
interface MissionItem {
    title: string;
    description: string;
}

interface FeatureItem {
    title: string;
    content: string;
  }

const AboutUs: React.FC = () => {

    const coreValues = [
        { initial: 'P', title: 'Passion', description: 'We are deeply passionate about skating and strive to ignite that same enthusiasm in every individual we coach.' },
        { initial: 'E', title: 'Excellence', description: 'We uphold the highest standards in training, mentoring, and competition, continuously pushing the boundaries of what is possible.' },
        { initial: 'I', title: 'Inclusivity', description: 'Our programs are designed to welcome and support individuals of every background and skill level.' },
        { initial: 'C', title: 'Community', description: 'We foster lasting connections and a strong sense of belonging among skaters, parents, and coaches alike.' },
    ];

    const missionCards: MissionItem[] = [
        { title: 'Unlock Potential', description: 'Guide skaters to push beyond their limits and realize their full athletic and personal capabilities.' },
        { title: 'Promote Discipline', description: 'Instill values of hard work, consistency, and focus that extend beyond the rink.' },
        { title: 'Encourage Creativity', description: 'Support freedom of expression and innovation in every skater’s journey.' },
        { title: 'Foster Inclusion', description: 'Ensure that our programs welcome and uplift individuals from all walks of life.' },
        { title: 'Build Community', description: 'Create a strong network of coaches, athletes, and families who grow together.' },
    ];
    
    const features: FeatureItem[] = [
        {
          title: "Professional Coaching by Certified Instructors",
          content: "Our team consists of highly qualified and certified professionals with years of experience in roller sports coaching. They provide expert guidance to help every student reach their full potential."
        },
        {
          title: "Modern Facilities with a Safety-First Approach",
          content: "We provide state-of-the-art facilities equipped with all the necessary gear and a strict safety protocol. Your well-being is our top priority."
        },
        {
          title: "Programs for All Ages and Skill Levels",
          content: "From beginners to advanced competitors, our programs are tailored to meet the needs of all ages and abilities. We believe it’s never too late to start your journey."
        },
        {
          title: "Competitive Training and Recreational Fun",
          content: "Whether you aspire to win medals or simply want to skate for fun and fitness, we offer a balanced curriculum that caters to both competitive training and recreational enjoyment."
        },
        {
          title: "Strong Community and Supportive Environment",
          content: "Join a vibrant community of skaters, coaches, and families who support and motivate each other. We foster a positive environment where everyone feels they belong."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-[80px]">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 lg:py-28 text-center text-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h1 className="text-5xl font-bold mb-6">
                            About Ayodhya Skates
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Discover our journey, values, and commitment to excellence in roller sports education
                        </p>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-[#0D111A] mb-4">About Us</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto"></div>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 mb-6 leading-relaxed text-lg">
                            <p>
                                The Ayodhya Skates was founded by a team of highly qualified professional athletes with a passion for sharing their expertise and making professional skating accessible to all children. We are driven by a vision to nurture young skaters and provide them with a comprehensive platform to excel in roller sports.
                                Our mission is to instill core values such as Discipline, Confidence, Health, and Skills, ensuring that every child not only learns to skate but also develops lifelong qualities that extend beyond the skating rink.
                            </p>
                            <p>
                                At The Ayodhya Skates, we emphasize both technical training and personal development. Skating is not just a sport; it's a journey of self-discovery, hard work, and continuous improvement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us with Accordion */}
                <section className="py-20 bg-muted/30">
                  <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl lg:text-5xl font-bold text-[#0D111A] mb-4">
                        Why Choose Ayodhya Skates?
                      </h2>
                      <div className="w-24 h-1 bg-[#66cc33] mx-auto mt-4"></div>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {features.map((feature, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-lg font-semibold text-[#0D111A] hover:no-underline">
                            {feature.title}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {feature.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </section>


                {/* Our Mission & Vision */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto"></div>
                        </div>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h3 className="text-2xl font-semibold text-green-600 mb-6">
                                Inspiring Excellence. Building Communities.
                            </h3>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We envision a community where skating symbolizes freedom, discipline, and joy. Our goal is to cultivate a nurturing environment that empowers individuals to unlock their full potential, both on and off the rink.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='py-16 bg-gray-50'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto"></div>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg text-center">
                                Through structured training, value-based mentorship, and community engagement, we aim to:
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {missionCards.map((card, index) => (
                                    <Card key={index} className="shadow-lg border border-gray-200 rounded-lg p-6 text-center bg-gray-50/50">
                                        <CardContent className="p-0">
                                            <h4 className="font-semibold text-green-600 mb-3">{card.title}</h4>
                                            <p className=" text-gray-600">{card.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Core Values Section */}
                <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-16 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
                            {coreValues.map((value, index) => (
                                <div key={index}>
                                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-white/20">
                                        <span className="text-2xl font-bold text-[#66cc33]">{value.initial}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-green-100 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D111A] mb-4">
                                Founder - Ravinder Kumar
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-full overflow-hidden border-4 border-[#66cc33] shadow-lg">
                                <img
                                    src={founderImage}
                                    alt="Ravinder Kumar, Founder"
                                    className="w-full h-full object-cover object-top"
                                />
                                
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-[#66cc33] mb-2">
                                    Meet the Founder
                                </h3>
                                <p className="text-lg font-semibold text-gray-600 mb-6">
                                    With over 10+ years of professional athletic experience...
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
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;