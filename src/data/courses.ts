export type Course = {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  duration: string;
  price: number;
  level: string;
  image: string;
  highlights: string[];
  modules: { week: string; title: string; detail: string }[];
};

// Keep a consistent six-week outline for courses that do not define their own.
const moduleSet = (title: string, detail: string) => [
  { week: 'Weeks 1-2', title: 'Foundations', detail },
  { week: 'Weeks 3-4', title: 'Practice and Progress', detail: `Building confidence through guided ${title.toLowerCase()} practice.` },
  { week: 'Weeks 5-6', title: 'Real-World Skills', detail: 'Applying the new skills in everyday environments.' },
];

export const COURSES: Course[] = [
  { id: '1', title: 'Basic Dog Walking', type: 'Short Course', category: 'Basic', description: 'Nail socialization, early manners, and core developmental steps in a monitored, caring space.', duration: '6 Weeks', price: 750, level: 'Beginner', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60', highlights: ['Leash manners', 'Safe socialization', 'Reliable recall', 'Confident daily walks'], modules: moduleSet('dog walking', 'Learn calm leash handling, safe routes, and reliable everyday walking habits.') },
  { id: '2', title: 'Pet First Aid', type: 'Short Course', category: 'Medical', description: 'Learn important emergency first aid knowledge to ensure you can adequately take care of your pets.', duration: '6 Weeks', price: 750, level: 'All Skill Levels', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&auto=format&fit=crop&q=60', highlights: ['Emergency response', 'Basic wound care', 'Safe handling', 'Prevention planning'], modules: moduleSet('first aid', 'Understand first-response steps and how to keep pets calm during an emergency.') },
  { id: '3', title: 'Puppy Care', type: 'Short Course', category: 'Puppy', description: 'Prepare new dog owners with the essential knowledge to care for their new pets.', duration: '6 Weeks', price: 750, level: 'Puppies (8-24 Weeks)', image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&auto=format&fit=crop&q=60', highlights: ['Housebreaking', 'Bite inhibition', 'Crate training', 'Gentle socialization'], modules: moduleSet('puppy care', 'Establish routines for potty training, play, rest, and positive early experiences.') },
  { id: '4', title: 'Canine Obedience Training', type: 'Long Course', category: 'Behavioural', description: 'Master core commands, loose-leash walking, and polite behaviors in everyday environments.', duration: '6 Months', price: 1500, level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&auto=format&fit=crop&q=60', highlights: ['Sit, stay, recall and down', 'Loose-leash walking', 'Controlled socialization', 'Distraction management'], modules: [{ week: 'Weeks 1-4', title: 'Foundations and Engagement', detail: 'Establish focus, marker words, and basic sit/stay mechanics.' }, { week: 'Weeks 5-12', title: 'Leash Work and Impulse Control', detail: 'Eliminate pulling and practice wait commands at doorways.' }, { week: 'Weeks 13-24', title: 'Distractions and Proofing', detail: 'Execute commands in busy public settings and around other dogs.' }] },
  { id: '5', title: 'Pet Grooming', type: 'Long Course', category: 'Grooming', description: 'Learn professional coat care, bathing techniques, nail trimming, and stress-free handling practices.', duration: '6 Months', price: 1500, level: 'All Skill Levels', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60', highlights: ['Bathing and drying', 'Nail and ear care', 'Brushing and de-matting', 'Fear-free handling'], modules: moduleSet('grooming', 'Learn safe tool use, bathing routines, coat care, and calm handling techniques.') },
  { id: '6', title: 'Animal Behaviour', type: 'Long Course', category: 'Behavioural', description: 'Understand root causes of canine anxiety, reactivity, and territorial behaviors with evidence-based techniques.', duration: '6 Months', price: 1500, level: 'Intermediate', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=60', highlights: ['Body language', 'Desensitization', 'Reactivity management', 'Separation anxiety strategies'], modules: moduleSet('animal behaviour', 'Explore canine psychology, stress triggers, and practical behavior modification plans.') },
];

export const COURSES_DATA = Object.fromEntries(COURSES.map((course) => [course.id, course])) as Record<string, Course>;
