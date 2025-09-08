import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface QuickLink {
    name: string;
    href: string;
}

// Define the type for social links
interface SocialLink {
    icon: React.ElementType; 
    href: string;
    label: string;
    bgColor?: string; 
}

const Footer: React.FC = () => {
    const quickLinks: QuickLink[] = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Discipline', href: '#discipline' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact Us', href: '#contact' }, 
        { name: 'Career', href: '#career' },
    ];

    const socialLinks: SocialLink[] = [
        { icon: Instagram, href: '#', label: 'Instagram', bgColor: 'bg-pink-500' }, 
        { icon: Facebook, href: '#', label: 'Facebook', bgColor: 'bg-blue-600' },
        { icon: Twitter, href: '#', label: 'Twitter', bgColor: 'bg-sky-400' },
         { icon: Youtube, href: 'https://www.youtube.com/@ayodhyaskates9654', label: 'YouTube', bgColor: 'bg-red-600' },
    ];

    return (
        <footer className="bg-[#0D111A] text-gray-300 pt-[80px]">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 gap-8 mb-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#66cc33] mb-6">Quick Links</h3> 
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-[#66cc33] transition-colors text-sm" 
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#66cc33] mb-6">Get in Touch</h3> 
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <a href="">
                                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">ayodhyaskates.info@gmail.com</span>
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                              <a href="tel:9696657577" className="flex items-center text-white hover:text-white/80 transition-colors duration-300">
                                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">+91 9896575777</span>
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">Ayodhya, Uttar Pradesh, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#66cc33] mb-6">Follow Us</h3> 
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            Stay connected with us for updates, events, and skating tips!
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-9 h-9 flex items-center justify-center rounded-full ${social.bgColor || 'bg-gray-700'} text-white hover:opacity-80 transition-opacity`}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#66cc33] mb-6">Newsletter</h3> 
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            Subscribe to get the latest news and updates from Ayodhya Skates.
                        </p>
                        <div className="flex flex-col space-y-4"> 
                            <Input
                                placeholder="Enter your email"
                                type="email"
                                className="w-full px-4 py-2 bg-[#2D333F] border-none rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#66cc33]" // Darker input, green focus ring
                            />
                            <Button
                                className="w-full bg-gradient-to-r from-[#66cc33] to-[#4CAF50] text-white font-semibold py-2 rounded-md hover:from-[#4CAF50] hover:to-[#66cc33] transition-all duration-300 ease-in-out shadow-lg"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="bg-gray-700 my-8" /> 

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"> 
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                        <span className="text-xl font-bold text-[#66cc33]">Ayodhya Skates</span> 
                        <span className="text-xs text-gray-500">Glide into Excellence</span> 
                    </div>
                    
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 items-center">
                        <p className="text-center md:text-left">© 2024 Ayodhya Skates Academy. All rights reserved.</p>
                        <span className="hidden md:block">|</span>
                        <a href="#" className="hover:text-[#66cc33] transition-colors">
                            Privacy Policy
                        </a>
                        <span className="hidden md:block">|</span> 
                        <a href="#" className="hover:text-[#66cc33] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;