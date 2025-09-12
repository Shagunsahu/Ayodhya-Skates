import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpg';

// Define the type for sub-items in the dropdown
interface SubItem {
  name: string;
  href: string;
}

// Define the type for the main navigation items
interface NavigationItem {
  name: string;
  href: string;
  subItems?: SubItem[]; 
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
        name: 'About Us', 
        href: '/About-us', 
        subItems: [
            { name: 'About Us', href: '/About-us' },
            { name: 'Our Partners', href: '/our-partners' },
            { name: 'Coaches', href: '/coaches' },
            { name: 'Services', href: '/our-services' },
        ]
    },
    { name: 'Discipline', href: '/discipline' },
    { 
        name: 'Achievements', 
        href: '/achievements',
        subItems: [
            { name: 'Achievements', href: '/achievements' },
            { name: 'Gallery', href: '/gallery' },
        ]
    },
    { 
        name: 'Join Us', 
        href: '#join',
        subItems: [
            { name: 'JoinUs', href: '/join-us' },
            { name: 'Events', href: '/events' },
            { name: 'Sponsorship', href: '/join-us#sponsorship' },
        ]
    },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Career', href: '/career' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src={logo} alt="Ayodhya Skates" className="h-12 w-20" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Ayodhya Skates
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group py-2"> 
                <a
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors story-link"
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.subItems && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
                  </span>
                </a>
                {item.subItems && (
                  <ul className="absolute left-0 w-48 bg-background border border-gray-200 rounded-md shadow-lg py-2 hidden group-hover:block transition-all duration-300 ease-in-out">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation - TBD with dropdowns */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-3 pt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors story-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;