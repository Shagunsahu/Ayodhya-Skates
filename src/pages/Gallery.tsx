import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import all your gallery images here
import galleryImage1 from '@/assets/gallery/image1.JPG'; 
import galleryImage2 from '@/assets/gallery/image2.JPG';
import galleryImage3 from '@/assets/gallery/image3.JPG';
import galleryImage4 from '@/assets/gallery/image4.JPG';
import newspaperPlaceholder from '@/assets/gallery/newspaper/image1.JPG';
// ... add more images as needed

// Define the type for the gallery images
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// Separate arrays for each tab
const trainingImages: GalleryImage[] = [
  { src: galleryImage1, alt: 'Kids Training Session', category: 'Training' },
];

const competitionImages: GalleryImage[] = [
  { src: galleryImage2, alt: 'Victory Ceremony', category: 'Competition' },
  { src: galleryImage4, alt: 'Awards Won', category: 'Competition' },
];

const performanceImages: GalleryImage[] = [
  { src: galleryImage3, alt: 'Performance', category: 'Performance' },
];

const newspaperImages: GalleryImage[] = [
  { src: newspaperPlaceholder, alt: 'Ayodhya Skates in the News', category: 'Newspaper' },
];

// Combine all images for the 'All' tab
const allImages: GalleryImage[] = [...trainingImages, ...competitionImages, ...performanceImages, ...newspaperImages];

const itemsPerPage = 8; // You can adjust this number

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredImages, setFilteredImages] = useState(allImages);
  const [currentPage, setCurrentPage] = useState(1);

  // Map tabs to their respective arrays
  const tabDataMap: Record<string, GalleryImage[]> = {
    'All': allImages,
    'Training': trainingImages,
    'Competition': competitionImages,
    'Performance': performanceImages,
    'Newspaper': newspaperImages,
    // Add other categories here
  };

  const handleTabChange = (category: string) => {
    setActiveTab(category);
    setCurrentPage(1); // Reset to page 1 on tab change
    setFilteredImages(tabDataMap[category] || []);
  };
  
  // Calculate which images to display based on current page
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-lime-500 py-20 text-center text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
              Gallery
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Capturing moments of excellence, passion, and achievement at Ayodhya Skates
            </p>
          </div>
        </section>

        {/* Filter Tabs & Image Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={handleTabChange} className="max-w-xl mx-auto mb-12">
              <TabsList className="grid w-full h-auto grid-cols-6 bg-gray-200 rounded-full gap-2">
                <TabsTrigger value="All" className="data-[state=active]:bg-gradient-to-r from-green-600 to-lime-500 data-[state=active]:text-white rounded-full">All</TabsTrigger>
                <TabsTrigger value="Training" className="data-[state=active]:bg-gradient-to-r from-green-600 to-lime-500 data-[state=active]:text-white rounded-full">Training</TabsTrigger>
                <TabsTrigger value="Competition" className="data-[state=active]:bg-gradient-to-r from-green-600 to-lime-500 data-[state=active]:text-white rounded-full">Competition</TabsTrigger>
                <TabsTrigger value="Performance" className="data-[state=active]:bg-gradient-to-r from-green-600 to-lime-500  data-[state=active]:text-white rounded-full">Performance</TabsTrigger>
                <TabsTrigger value="Facility" className="data-[state=active]:bg-gradient-to-r from-green-600 to-lime-500 data-[state=active]:text-white rounded-full">Facility</TabsTrigger>
                <TabsTrigger value="Newspaper" className="data-[state=active]:bg-gradient-to-r from-green-600 to-lime-500 data-[state=active]:text-white rounded-full">Newspaper</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Image Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-0 overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                         {/* Overlay for description */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300">
                          <p className="text-white text-lg font-semibold text-center px-4">{image.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 border-0">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={i + 1 === currentPage}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;