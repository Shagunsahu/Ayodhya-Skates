import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Header from '@/components/Header';
import { MessageCircle, Instagram, Facebook, Phone } from 'lucide-react';

// Import your hero images here
import heroImage1 from '@/assets/hero-image-1.JPG'; 
import heroImage2 from '@/assets/hero-image-2.JPG';
import heroImage3 from '@/assets/hero-image-3.JPG';

const carouselImages = [heroImage1, heroImage2, heroImage3];

const Hero: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);

  const socialButtons = [
    { icon: MessageCircle, color: 'bg-green-500', link: 'https://wa.me/9696657577' },
    { icon: Instagram, color: 'bg-pink-500', link: 'https://instagram.com/ayodhyaskates' },
    { icon: Facebook, color: 'bg-blue-600', link: 'https://facebook.com/ayodhyaskates' },
    { icon: Phone, color: 'bg-green-500', link: 'tel:9696657577' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[80px]">
        <section id="home" className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden">
          {/* Background Image Carousel */}
          <Carousel setApi={setApi} className="absolute inset-0">
            <CarouselContent className="h-full w-full">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="p-0">
                  <img 
                    src={image} 
                    alt={`Roller skating academy - ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div> 
            
            {/* Carousel Navigation Arrows */}
            <CarouselPrevious 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10"
              variant="ghost"
            />
            <CarouselNext 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10"
              variant="ghost"
            />
          </Carousel>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Ayodhya Skates
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
                Glide into Excellence - Where Passion Meets Performance in Roller Sports
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="heroPrimary"
                  size="hero" 
                >
                  Join Our Academy
                </Button>
                <Button 
                  variant="heroOutline"
                  size="hero"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-4">
            {socialButtons.map((btn, index) => (
              <a 
                key={index} 
                href={btn.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg 
                            ${btn.color} hover:scale-110 transition-transform duration-200`}
              >
                <btn.icon className="h-7 w-7" />
              </a>
            ))}
          </div>


          {/* Pagination Dots */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current ? 'bg-white scale-125' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Hero;