import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

// Define data types for the contact details
interface ContactDetail {
  icon: React.ElementType;
  text: string;
  link?: string;
}

const ContactUs: React.FC = () => {

  const contactDetails: ContactDetail[] = [
    {
      icon: Phone,
      text: '9696657577',
      link: 'tel:9696657577',
    },
    {
      icon: Mail,
      text: 'ayodhyaskates.info@gmail.com',
      link: 'mailto:ayodhyaskates.info@gmail.com',
    },
    {
      icon: MapPin,
      text: 'RTO Office, Near Transport Nagar, Ayodhya, U.P.',
      link: '#', // Placeholder for a map link
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[80px]">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 lg:py-28 text-center text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with us for any questions, concerns, or inquiries. We're here to help you on your skating journey!
            </p>
          </div>
        </section>
        
        {/* Main Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Our Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-lime-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
                For any questions regarding skating classes, sessions, or events, feel free to reach out to us:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Left Column: Contact Details */}
              <div>
                  <div className="p-0">
                    <div className="space-y-8">
                      {contactDetails.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <a href={detail.link} className="w-12 h-12 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center border-2 border-[#66cc33]">
                            <detail.icon className="h-6 w-6 text-[#66cc33]" />
                          </a>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1 flex items-center">{detail.text}</p>
                          </div>
                        </div>
                      ))}
                    </div >
                    < div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                    <p className="text-lg text-gray-600 mt-8">
                      Alternatively, you can use our contact form for detailed inquiries.
                    </p></div>
                  </div>
                
              </div>
              
              {/* Right Column: Contact Form */}
              <div>
                <Card className="shadow-lg border border-gray-200 rounded-lg p-8 h-full">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                      Contact for Skating Inquiries
                    </h3>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <Input id="fullName" placeholder="Enter your full name" className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea id="message" rows={4} placeholder="Write your message here" className="w-full p-3 border border-gray-300 rounded-md resize-none"></textarea>
                      </div>
                      <button  className="w-full bg-gradient-to-r from-green-600 to-lime-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-lime-600 transition-all">
                        Send Message
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;