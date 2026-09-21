import { AcademyCourseItem } from '../types';

/**
 * BEAJAY ACADEMY COURSE CATALOG (PHASE 1 - FOUNDATION)
 * 
 * IMPORTANT: Course information, pricing, curriculum, schedules, instructors,
 * certification rules and payment infrastructure have NOT yet been supplied.
 * 
 * In accordance with Phase 1 directives:
 * - No unconfirmed course titles, pricing, duration, syllabus, or instructor bios are invented.
 * - This catalog will be populated once confirmed details are supplied by the owner.
 */
export const ACADEMY_COURSES: AcademyCourseItem[] = [];

/**
 * Future Learning Journey steps (Explanatory visual preview for Phase 1).
 */
export interface AcademyJourneyStep {
  step: string;
  title: string;
  description: string;
}

export const ACADEMY_JOURNEY_STEPS: AcademyJourneyStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Explore available BEAJAY Academy learning opportunities and curriculum pathways as they are introduced.'
  },
  {
    step: '02',
    title: 'Enrol',
    description: 'Create an account and enrol securely when registration becomes available for prospective students.'
  },
  {
    step: '03',
    title: 'Learn',
    description: 'Access purchased learning content through the future student learning area at your own pace.'
  },
  {
    step: '04',
    title: 'Grow',
    description: 'Continue developing practical bridal-fashion knowledge, creative techniques, and craftsmanship.'
  }
];

/**
 * Future Student Experience preview pillars (Phase 1 preview of forthcoming systems).
 */
export interface FutureExperiencePillar {
  title: string;
  description: string;
}

export const FUTURE_STUDENT_PILLARS: FutureExperiencePillar[] = [
  {
    title: 'Course Discovery',
    description: 'Browse comprehensive course overviews, learning objectives, and recommended equipment.'
  },
  {
    title: 'Student Registration',
    description: 'Seamless profile setup for enrolled creatives to track their educational milestones.'
  },
  {
    title: 'Secure Course Enrollment',
    description: 'Direct and transparent course enrollment powered by verified payment channels.'
  },
  {
    title: 'Learning Content Access',
    description: 'Stream structured video lessons, technical breakdowns, and instructional learning resources.'
  },
  {
    title: 'Student Learning Dashboard',
    description: 'A personal study space to review active courses, download study notes, and receive learning updates.'
  }
];
