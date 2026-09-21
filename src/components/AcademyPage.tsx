import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  UserCheck, 
  Layers, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  HelpCircle,
  Scissors
} from 'lucide-react';
import { buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { 
  ACADEMY_COURSES, 
  ACADEMY_JOURNEY_STEPS, 
  FUTURE_STUDENT_PILLARS 
} from '../data/academyData';

interface AcademyPageProps {
  onNavigateHome: () => void;
  onNavigateCollections?: () => void;
  onNavigateContact?: () => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({
  onNavigateHome,
  onNavigateCollections,
  onNavigateContact
}) => {
  const whatsappUrl = buildWhatsAppUrl({ type: 'academy' });

  return (
    <div className="bg-[#FCFAF7] dark:bg-[#121110] text-[#1A1A1A] dark:text-[#E8E4DD] min-h-screen pt-24 sm:pt-28 pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-500 dark:text-[#A39D93] font-medium">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#856122] dark:hover:text-[#E6C875] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#141312] dark:text-[#F8F5EE]">BEAJAY Academy</span>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section 
        id="academy-hero" 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 border-b border-[#EAE3D5] dark:border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 text-[#856122] dark:text-[#E6C875] text-[10px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
                <span>BEAJAY ACADEMY</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FDF7E7] dark:bg-[#262013] border border-[#E6C875]/60 text-[#856122] dark:text-[#E6C875] text-[10px] font-semibold tracking-[0.2em] uppercase">
                <Clock className="w-3 h-3 text-[#C59B3F]" aria-hidden="true" />
                <span>COMING SOON • PHASE 1</span>
              </div>
            </div>

            {/* Main Headline (Single H1 on Page) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] dark:text-[#F8F5EE] font-normal leading-[1.12] tracking-tight">
              Learn the Craft.{' '}
              <span className="italic font-light text-[#856122] dark:text-[#E6C875]">
                Build Your Creative Journey.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-800 dark:text-[#D4CEC3] font-light leading-relaxed max-w-2xl">
              BEAJAY Academy is being developed as a dedicated learning space for aspiring bridal-fashion creatives. Extending the brand’s creative journey into education, the Academy will provide structured online learning experiences rooted in the art, precision, and discipline of bridal couture.
            </p>

            {/* Status Banner */}
            <div className="p-5 sm:p-6 bg-[#F8F4EC] dark:bg-[#181715] border-l-2 border-[#C59B3F] max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-[#856122] dark:text-[#E6C875] text-xs font-semibold uppercase tracking-wider">
                <Scissors className="w-4 h-4" aria-hidden="true" />
                <span>Educational Arm of BEAJAY COUTURE BRIDAL</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-[#D4CEC3] font-light leading-relaxed">
                BEAJAY trains students and intends to offer online bridal-fashion classes through the official website. Course information, curriculum, schedules and enrollment details will be introduced once confirmed.
              </p>
            </div>

            {/* CTA Group (Restrained, no fake enrol/buy) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-[#111111] dark:bg-[#C59B3F] hover:bg-[#2A2824] dark:hover:bg-[#B3892F] text-white dark:text-[#0C0C0B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>MAKE AN ACADEMY ENQUIRY</span>
              </a>

              {onNavigateContact && (
                <button
                  onClick={onNavigateContact}
                  className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 border border-[#856122] dark:border-[#E6C875] hover:bg-[#F2EDE2] dark:hover:bg-[#22201E] text-[#141312] dark:text-[#F8F5EE] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                >
                  <span>CONTACT BEAJAY</span>
                </button>
              )}
            </div>
          </div>

          {/* Typography-Led Editorial Composition (No generated/stock imagery) */}
          <div className="lg:col-span-5">
            <div className="relative p-7 sm:p-9 bg-[#F5EFE4] dark:bg-[#161514] border border-[#DDD4C1] dark:border-[#2C2925] shadow-xl space-y-6">
              
              {/* Monogram Seal & Corner Accents */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E0D7C5] dark:border-white/10">
                <div className="space-y-0.5">
                  <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] dark:text-[#E6C875] uppercase block">
                    FOUNDATION PREVIEW
                  </span>
                  <span className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE]">
                    BEAJAY ACADEMY
                  </span>
                </div>
                <div className="w-10 h-10 border border-[#C59B3F]/40 flex items-center justify-center text-[#C59B3F] font-serif text-base">
                  BJ
                </div>
              </div>

              {/* Editorial Quote / Vision */}
              <blockquote className="space-y-3">
                <p className="font-serif text-lg sm:text-xl text-[#111111] dark:text-[#F8F5EE] font-light leading-snug italic">
                  “Bridal craftsmanship passed down through dedicated mentorship. Online courses in preparation.”
                </p>
                <footer className="text-[11px] text-neutral-600 dark:text-[#A39D93] uppercase tracking-widest font-medium">
                  BEAJAY COUTURE BRIDAL • ENUGU, NIGERIA
                </footer>
              </blockquote>

              {/* Status List */}
              <div className="pt-2 border-t border-[#E0D7C5] dark:border-white/10 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C59B3F] mt-1.5 shrink-0" />
                  <p className="text-neutral-700 dark:text-[#D4CEC3] font-light">
                    <strong className="font-medium text-[#111111] dark:text-[#F8F5EE]">Phase 1:</strong> Frontend foundation & architectural framework.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C59B3F] mt-1.5 shrink-0" />
                  <p className="text-neutral-700 dark:text-[#D4CEC3] font-light">
                    <strong className="font-medium text-[#111111] dark:text-[#F8F5EE]">Enrollment Status:</strong> Opening dates will be announced once curriculum details are confirmed.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C59B3F] mt-1.5 shrink-0" />
                  <p className="text-neutral-700 dark:text-[#D4CEC3] font-light">
                    <strong className="font-medium text-[#111111] dark:text-[#F8F5EE]">Direct Inquiries:</strong> Studio contact available via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Status Pill */}
              <div className="pt-2">
                <div className="w-full text-center py-2.5 px-4 bg-[#EBE3D3] dark:bg-[#201E1B] border border-[#DDD4C1] dark:border-[#2C2925] text-[10.5px] tracking-[0.2em] uppercase font-semibold text-[#856122] dark:text-[#E6C875]">
                  ACADEMY COMING SOON
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ACADEMY INTRODUCTION */}
      <section 
        id="academy-introduction" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#EAE3D5] dark:border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold tracking-[0.24em] text-[#856122] dark:text-[#E6C875] uppercase">
            <span>PURPOSE & PHILOSOPHY</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] dark:text-[#F8F5EE] font-normal tracking-tight">
            The Educational Arm of BEAJAY
          </h2>
          <div className="w-12 h-px bg-[#C59B3F] mx-auto my-3" />
          <p className="text-sm sm:text-base text-neutral-700 dark:text-[#D4CEC3] font-light leading-relaxed">
            BEAJAY Academy will extend the brand's creative journey into education, creating a dedicated space for learning and developing bridal-fashion skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Couture Heritage */}
          <div className="p-6 sm:p-8 bg-[#FAF7F2] dark:bg-[#161514] border border-[#EAE3D5] dark:border-[#262420] space-y-4">
            <div className="w-10 h-10 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] font-normal">
              Couture Heritage
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
              Rooted in the hands-on bridal design principles practiced daily in our Enugu studio, connecting bridal couture tradition with creative expression.
            </p>
          </div>

          {/* Card 2: Practical Discipline */}
          <div className="p-6 sm:p-8 bg-[#FAF7F2] dark:bg-[#161514] border border-[#EAE3D5] dark:border-[#262420] space-y-4">
            <div className="w-10 h-10 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] font-normal">
              Practical Technique
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
              Designed to help students develop real bridal-fashion skills, understand structural form, and explore authentic garment making.
            </p>
          </div>

          {/* Card 3: Online Learning Vision */}
          <div className="p-6 sm:p-8 bg-[#FAF7F2] dark:bg-[#161514] border border-[#EAE3D5] dark:border-[#262420] space-y-4">
            <div className="w-10 h-10 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
              <TrendingUp className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] font-normal">
              Online Classroom Vision
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
              Created so passionate creatives can engage with BEAJAY's couture knowledge remotely through the existing website once classes launch.
            </p>
          </div>

        </div>
      </section>

      {/* 3. FUTURE LEARNING EXPERIENCE */}
      <section 
        id="academy-journey" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#EAE3D5] dark:border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 text-[10px] font-semibold tracking-[0.24em] text-[#856122] dark:text-[#E6C875] uppercase">
            <span>EXPLANATORY PREVIEW</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] dark:text-[#F8F5EE] font-normal tracking-tight">
            How Academy Learning Will Work
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light max-w-xl mx-auto">
            A visual roadmap of the planned student learning experience. These steps represent future functionality currently under development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_JOURNEY_STEPS.map((item) => (
            <div 
              key={item.step}
              className="p-6 sm:p-7 bg-[#FAF7F2] dark:bg-[#161514] border border-[#EAE3D5] dark:border-[#262420] flex flex-col justify-between space-y-4 hover:border-[#C59B3F]/50 transition-colors"
            >
              <div className="space-y-3">
                <span className="font-serif text-2xl sm:text-3xl text-[#856122] dark:text-[#E6C875] font-light block">
                  {item.step}
                </span>
                <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] font-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D5] dark:border-white/10 text-[10px] tracking-wider uppercase font-semibold text-neutral-500 dark:text-[#888]">
                Future Capability
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COURSE PREVIEW AREA (COMING SOON STATE) */}
      <section 
        id="academy-courses" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#EAE3D5] dark:border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF7E7] dark:bg-[#262013] border border-[#E6C875]/60 text-[#856122] dark:text-[#E6C875] text-[10px] font-semibold tracking-[0.2em] uppercase">
            <Clock className="w-3 h-3 text-[#C59B3F]" aria-hidden="true" />
            <span>COMING SOON</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] dark:text-[#F8F5EE] font-normal tracking-tight">
            COURSES
          </h2>
          <div className="w-12 h-px bg-[#C59B3F] mx-auto my-2" />
          <p className="text-base sm:text-lg text-[#111111] dark:text-[#F8F5EE] font-light">
            BEAJAY Academy learning experiences are currently being prepared.
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light max-w-xl mx-auto leading-relaxed">
            Course information, curriculum, schedules and enrollment details will be introduced once confirmed.
          </p>
        </div>

        {/* Future Course Framework Container */}
        {ACADEMY_COURSES.length === 0 ? (
          <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-[#FAF7F2] dark:bg-[#161514] border border-[#DDD4C1] dark:border-[#2C2925] shadow-sm text-center space-y-6">
            <div className="w-12 h-12 mx-auto bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
              <Scissors className="w-6 h-6" aria-hidden="true" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <span className="inline-block px-3 py-1 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 text-[10px] font-semibold tracking-[0.2em] text-[#856122] dark:text-[#E6C875] uppercase">
                COMING SOON
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#111111] dark:text-[#F8F5EE] font-normal">
                Learning Experiences in Preparation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
                BEAJAY Academy learning experiences are currently being prepared. Course information, curriculum, schedules and enrollment details will be introduced once confirmed.
              </p>
            </div>

            {/* Neutral Editorial Placeholders (No fabricated course names, modules, durations, levels, or subjects) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-5 border border-dashed border-[#DDD4C1] dark:border-[#333] bg-[#FCFAF7] dark:bg-[#121110] space-y-2">
                <span className="text-[10px] tracking-widest text-[#856122] dark:text-[#E6C875] font-semibold uppercase block">
                  COURSE INFORMATION
                </span>
                <div className="font-serif text-sm text-[#111111] dark:text-[#F8F5EE]">
                  Learning Experiences
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#888] font-light leading-relaxed">
                  Course details and objectives will be introduced once confirmed.
                </p>
              </div>

              <div className="p-5 border border-dashed border-[#DDD4C1] dark:border-[#333] bg-[#FCFAF7] dark:bg-[#121110] space-y-2">
                <span className="text-[10px] tracking-widest text-[#856122] dark:text-[#E6C875] font-semibold uppercase block">
                  SCHEDULES & TIMELINES
                </span>
                <div className="font-serif text-sm text-[#111111] dark:text-[#F8F5EE]">
                  Class Schedules
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#888] font-light leading-relaxed">
                  Timetables and delivery formats will be announced upon launch.
                </p>
              </div>

              <div className="p-5 border border-dashed border-[#DDD4C1] dark:border-[#333] bg-[#FCFAF7] dark:bg-[#121110] space-y-2">
                <span className="text-[10px] tracking-widest text-[#856122] dark:text-[#E6C875] font-semibold uppercase block">
                  ENROLLMENT DETAILS
                </span>
                <div className="font-serif text-sm text-[#111111] dark:text-[#F8F5EE]">
                  Registration & Access
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#888] font-light leading-relaxed">
                  Registration guidelines and enrollment details will be announced when confirmed.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#856122] dark:text-[#E6C875] hover:underline uppercase cursor-pointer"
              >
                <span>Ask about upcoming courses on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : null}
      </section>

      {/* 5. FUTURE STUDENT EXPERIENCE */}
      <section 
        id="future-student-experience" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#EAE3D5] dark:border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 text-[10px] font-semibold tracking-[0.24em] text-[#856122] dark:text-[#E6C875] uppercase">
              <span>PLATFORM ROADMAP</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] dark:text-[#F8F5EE] font-normal leading-tight tracking-tight">
              The Future Student Experience
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-[#D4CEC3] font-light leading-relaxed">
              The future BEAJAY Academy online experience is being planned to support a cohesive, end-to-end digital learning environment:
            </p>
            
            <div className="p-4 bg-[#FAF7F2] dark:bg-[#181715] border border-[#DDD4C1] dark:border-[#2C2925] space-y-2">
              <div className="flex items-center gap-2 text-[10.5px] font-semibold tracking-wider uppercase text-[#856122] dark:text-[#E6C875]">
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>PHASE 1 ARCHITECTURE NOTICE</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
                Student registration, authentication, payments, and private learning dashboards will be introduced in a future development phase once course operations are ready.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D5] dark:border-white/10">
              <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-neutral-500 dark:text-[#888]">
                PLANNED LEARNING CAPABILITIES
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#856122] dark:text-[#E6C875] px-2.5 py-0.5 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10">
                COMING IN A FUTURE PHASE
              </span>
            </div>

            <div className="divide-y divide-[#EAE3D5] dark:divide-white/10">
              {FUTURE_STUDENT_PILLARS.map((pillar, idx) => (
                <div key={idx} className="py-4 sm:py-5 flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875] text-xs font-semibold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base text-[#111111] dark:text-[#F8F5EE] font-normal">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39D93] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. INTEREST & STUDIO CONTACT CTA */}
      <section 
        id="academy-enquiry" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20"
      >
        <div className="p-8 sm:p-14 bg-[#111111] text-[#FCFAF7] border border-[#262420] text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 text-[#E6C875] text-[10px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
            <span>EXPRESS YOUR INTEREST</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white max-w-2xl mx-auto leading-tight">
            ACADEMY COMING SOON
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Interested in future training opportunities or upcoming announcements from BEAJAY Academy? Speak directly with the BEAJAY team in Enugu.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C59B3F] hover:bg-[#B3892F] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>MAKE AN ACADEMY ENQUIRY</span>
            </a>

            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="min-h-[44px] inline-flex items-center justify-center px-7 py-3.5 border border-white/30 hover:border-white text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                <span>CONTACT BEAJAY</span>
              </button>
            )}

            {onNavigateCollections && (
              <button
                onClick={onNavigateCollections}
                className="min-h-[44px] inline-flex items-center justify-center px-7 py-3.5 border border-white/20 hover:border-white text-neutral-300 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                <span>EXPLORE COLLECTIONS</span>
              </button>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 max-w-md mx-auto">
            <p className="text-[11px] text-neutral-400 font-light flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" aria-hidden="true" />
              <span>BEAJAY WhatsApp: +234 911 702 8264 • Academy Enquiry</span>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
