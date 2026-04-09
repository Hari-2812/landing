import React, { Suspense, lazy } from 'react';

// Lazy loading the heavy interactive components below the fold
const ImpactOverview = lazy(() => import('./components/ImpactOverview'));
const Curriculum = lazy(() => import('./components/Curriculum'));
const ProjectsGallery = lazy(() => import('./components/ProjectsGallery'));
const BenefitsBento = lazy(() => import('./components/BenefitsBento'));
const Experts = lazy(() => import('./components/Experts'));
const Honors = lazy(() => import('./components/Honors'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CareerCarousel = lazy(() => import('./components/CareerCarousel'));
const EnrollmentForm = lazy(() => import('./components/EnrollmentForm'));

import Hero from './components/Hero';
import Roadmap from './components/Roadmap';

// Loading fallback for Suspense
const SectionLoader = () => (
  <div className="w-full py-24 flex items-center justify-center bg-midnight">
    <div className="w-10 h-10 border-4 border-indigo-pulse/20 border-t-indigo-pulse rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="bg-midnight min-h-screen text-white overflow-x-hidden font-sans selection:bg-indigo-pulse/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-midnight/80 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Analytics <span className="text-indigo-pulse">Avenue</span>
        </div>
        <div>
          <a href="#enroll" className="px-6 py-2.5 text-sm font-bold bg-white/5 hover:bg-indigo-pulse/20 border border-indigo-pulse/30 rounded-full transition-colors hidden sm:inline-block shadow-[0_0_15px_rgba(79,70,229,0.2)]">
            Member Login
          </a>
        </div>
      </nav>

      {/* Main Content Assembly */}
      <main>
        {/* Critical Render Path */}
        <Hero />
        
        {/* Everything below lazy-loaded for peak Web Vitals */}
        <Suspense fallback={<SectionLoader />}>
          <ImpactOverview />
          <Roadmap />
          <CareerCarousel />
          <Curriculum />
          <ProjectsGallery />
          <BenefitsBento />
          <Experts />
          <Honors />
          <Testimonials />
          <EnrollmentForm />
        </Suspense>
      </main>

      {/* Deep Footer */}
      <footer className="bg-black/90 py-16 border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-2xl font-black tracking-tight mb-8">
            Analytics <span className="text-cyan-neon">Avenue</span>
          </div>
          <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 max-w-lg">
            Bridging the gap between raw datasets and executive decisions. Become the standard the industry looks up to.
          </p>
          <div className="flex gap-6 text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-indigo-pulse transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-pulse transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-pulse transition-colors">Contact</a>
          </div>
          <p className="text-gray-600 text-xs mt-12 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Analytics Avenue Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
