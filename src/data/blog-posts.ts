export type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  author: string;
  intro: string;
  heroImage: string;
  sections: { number: string; heading: string; body: string[] }[];
};

// Article text and images are stored here so list and detail screens share data.
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1', title: 'Welcoming a puppy home: A guide for new pet parents', category: 'Puppy Training', date: '12 SEPTEMBER 2025',
    excerpt: 'Bringing a puppy home is an exciting time! Here are our top tips to help you and your new furry friend settle in with confidence.', author: 'Pawsitive Training Team',
    intro: 'Bringing a puppy home is an exciting time. Establishing structure early helps build trust, confidence, and a lifelong bond.', heroImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60',
    sections: [{ number: '1.', heading: 'Focus on reward-based learning', body: ['Encourage desired behaviors with praise, treats, or play whenever your dog follows a cue correctly.', 'Redirect unwanted behaviors toward an acceptable alternative rather than giving negative attention.'] }, { number: '2.', heading: 'Keep practice sessions brief', body: ['Short, frequent sessions yield better retention than long, exhausting lessons.'] }],
  },
  {
    id: '2', title: 'Understanding your dog’s body language', category: 'Behaviour', date: '05 MARCH 2026',
    excerpt: 'Dogs communicate in so many ways! Learn to read the signs and better understand what your dog is telling you.', author: 'Pawsitive Behavioral Specialists',
    intro: 'Dogs communicate continuously through posture, facial expressions, and body movements. Learning these cues helps you respond appropriately.', heroImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=60',
    sections: [{ number: '1.', heading: 'Observe tail and ear posture', body: ['A relaxed tail indicates ease, while a tense, high-held tail can signal alertness or stress.', 'Ears held naturally suggest calm; ears pinned back often reflect fear or appeasement.'] }, { number: '2.', heading: 'Identify subtle stress signals', body: ['Yawning, lip-licking, or turning away can indicate mild anxiety when your dog is not tired.'] }],
  },
  {
    id: '3', title: 'Fun ways to keep your dog mentally stimulated', category: 'Obedience', date: '20 AUGUST 2025',
    excerpt: 'A mentally stimulated dog is a happier dog. Discover simple enrichment ideas you can try at home.', author: 'Pawsitive Activity Team',
    intro: 'Engaging your dog’s brain is just as essential as physical exercise for preventing boredom and keeping them balanced.', heroImage: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&auto=format&fit=crop&q=60',
    sections: [{ number: '1.', heading: 'Use interactive puzzles', body: ['Treat-dispensing toys encourage problem-solving and turn mealtime into an engaging mental exercise.'] }, { number: '2.', heading: 'Play scent-tracking games', body: ['Hide treats around the room to activate natural foraging instincts and burn excess energy indoors.'] }],
  },
  {
    id: '4', title: 'Keeping your dog healthy and happy', category: 'Health and Wellness', date: '12 JULY 2025',
    excerpt: 'From nutrition to grooming, here are our top tips to support your dog’s overall health and well-being.', author: 'Pawsitive Health Team',
    intro: 'Consistent wellness habits, balanced nutrition, and regular vet visits build the foundation for a happy, healthy life.', heroImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60',
    sections: [{ number: '1.', heading: 'Provide balanced nutrition', body: ['Choose age-appropriate meals and practice portion control to support your dog’s health.'] }, { number: '2.', heading: 'Schedule routine grooming and checkups', body: ['Regular coat care and preventative veterinary visits help catch potential issues early.'] }],
  },
];

export const BLOG_POSTS_DATA = Object.fromEntries(BLOG_POSTS.map((post) => [post.id, post])) as Record<string, BlogPost>;
