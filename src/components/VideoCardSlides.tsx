import React, { useState, useEffect, useRef } from 'react'; // Added useEffect, useRef
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// --- Interface (Keep as before) ---
interface SlideData {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  profileUrl: string;
}

// --- Team Member Data (Keep as before, ensure image paths are correct) ---
const slidesData: SlideData[] = [
  {
    id: 1,
    name: 'Suresh Pugalenthi',
    role: 'Chief Executive Officer (CEO)',
    imageUrl: '/team_members/suresh-pugalenthi.png',
    description: "Master's degree in PMIR from TISS. Ex-HR Head at Wipro / Head OD HPCL with deep expertise in Innovation, organization transformation & Business Expansion.",
    profileUrl: 'https://www.linkedin.com/in/suresh-pugalenthi/',
  },
  {
    id: 2,
    name: 'Saritha Boopathy',
    role: 'Chief Technology Officer (CTO)',
    imageUrl: '/team_members/saritha-boopathy.png',
    description: 'Holds a Master’s degree in Network Engineering from IIT Chicago. Formerly worked at Wipro and Happiest Minds. Passionate technologist and a specialist in Embedded Systems.',
    profileUrl: 'https://www.linkedin.com/in/saritha-boopathy-46625216',
  },
  {
    id: 3,
    name: 'Tejaswini',
    role: 'Chief Growth Officer (CGO)',
    imageUrl: '/team_members/tejaswini.png',
    description: 'Holds a Master’s degree in Computer Science, former employee at Wipro, Harman, NXP. Experienced in delivering projects in the Automotive and Medical device sectors, with a strong focus on growth.',
    profileUrl: 'https://www.linkedin.com/in/tejaswini-490a2285',
  },
  {
    id: 4,
    name: 'Sangeeta Malkhede',
    role: 'Chief Strategy Officer (CSO)',
    imageUrl: '/team_members/sangeeta-malkhede.png',
    description: "Master's degree in PMIR from TISS. Ex-HR Head at Patni Computer Systems, GS Lab | GAVS and CSS Corp Ltd. Expertise in People & Culture Transformation and Business Strategy.",
    profileUrl: 'https://www.linkedin.com/in/sangeeta-malkhede',
  },
  {
    id: 5,
    name: 'Babu KC',
    role: 'Chief Innovation Officer (CIO)',
    imageUrl: '/team_members/babu-kc.png',
    description: "Holds a Master’s degree in Electronics and brings over 35 years of experience in the design services sector, with a proven track record at companies such as Happiest Minds, Mindteck, and ProcSys. Highly skilled in end-to-end electronic product design.",
    profileUrl: 'https://www.linkedin.com/in/babu-kc/',
  },
];
// --- End Team Member Data ---


const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 500 : -500, opacity: 0, scale: 0.8 }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 500 : -500, opacity: 0, scale: 0.8 }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const AUTOPLAY_INTERVAL = 5000; // milliseconds (5 seconds)

export const VideoCardSlides = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const slideIndex = ((page % slidesData.length) + slidesData.length) % slidesData.length;
  const currentMember = slidesData[slideIndex];
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to hold interval ID

  // Function to advance to the next slide
  const goToNextSlide = () => {
    paginate(1);
  };

  // Set up and clear the autoplay interval
  useEffect(() => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Set new interval
    intervalRef.current = setInterval(goToNextSlide, AUTOPLAY_INTERVAL);

    // Cleanup function to clear interval on component unmount or page change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [page]); // Re-run effect when page changes to reset timer

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
     // Clear interval on manual interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Optionally restart the interval after manual interaction
    // intervalRef.current = setInterval(goToNextSlide, AUTOPLAY_INTERVAL);
  };

  const handleDotClick = (index: number) => {
    const newDirection = index > slideIndex ? 1 : -1;
    setPage([page - slideIndex + index, newDirection]);
     // Clear interval on manual interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Optionally restart the interval after manual interaction
    // intervalRef.current = setInterval(goToNextSlide, AUTOPLAY_INTERVAL);
  };

  return (
    // Added motion div for entrance animation
    <motion.div
      className="relative flex flex-col items-center justify-center p-4 h-[600px] overflow-hidden"
      initial={{ y: 100, opacity: 0 }} // Start below and invisible
      whileInView={{ y: 0, opacity: 1 }} // Animate to original position and visible
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      transition={{ duration: 0.7, ease: "easeOut" }} // Adjust duration (using 0.7s instead of 3ms)
    >
      <AnimatePresence initial={false} custom={direction}>
        {/* Container for the card and its gradient shadow */}
        <div
            key={`container-${page}`}
            className="absolute w-[90%] sm:w-[80%] max-w-sm h-[80%]"
            style={{ perspective: '1000px' }}
        >
            {/* Gradient Background Shadow Div */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl blur-xl opacity-50 transform scale-105"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                 transition={{
                   x: { type: 'spring', stiffness: 300, damping: 30 },
                   opacity: { duration: 0.2 },
                   scale: { duration: 0.2 },
                 }}
            />

            {/* Main Card Content */}
            <motion.div
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="relative w-full h-full bg-card rounded-xl shadow-lg p-6 border border-border overflow-auto flex flex-col items-center text-center z-10"
            >
              {/* Person Image - Increased Size */}
              <img
                src={currentMember.imageUrl}
                alt={currentMember.name}
                className="w-48 h-48 rounded-full mb-4 object-cover border-4 border-white shadow-md" // Increased size from w-32 h-32
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/200x200/e2e8f0/94a3b8?text=${currentMember.name.substring(0,1)}`;
                }}
              />

              {/* Name & Role */}
              <h3 className="text-xl font-semibold">{currentMember.name}</h3>
              <p className="text-sm text-primary mb-3">{currentMember.role}</p>

              {/* Description */}
              <p className="text-card-foreground text-sm mb-4 flex-grow">
                {currentMember.description}
              </p>

              {/* Profile Link */}
              <a
                href={currentMember.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-auto"
              >
                View Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
        </div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button variant="outline" size="icon" className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full" onClick={() => paginate(-1)}> <ChevronLeft className="h-4 w-4" /> </Button>
      <Button variant="outline" size="icon" className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full" onClick={() => paginate(1)}> <ChevronRight className="h-4 w-4" /> </Button>

      {/* Dot indicators */}
       <div className="absolute bottom-4 flex gap-2 z-20">
        {slidesData.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${i === slideIndex ? 'bg-primary' : 'bg-muted'}`}
            onClick={() => handleDotClick(i)} // Use handleDotClick to clear interval
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </motion.div> // Closing tag for the entrance animation wrapper
  );
};

