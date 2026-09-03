export type Language = 'bn' | 'en';

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface LocalizedTextArray {
  en: string[];
  bn: string[];
}

export interface Character {
  id: string;
  name: LocalizedText;
  title: LocalizedText;
  quote: LocalizedText;
  description: LocalizedText;
  image: string; // Emoji or image URL
  role: 'hero' | 'master' | 'villain' | 'furious_five' | 'ally';
  stats: {
    agility: number;
    chi: number;
    appetite: number;
    wisdom: number;
  };
  specialMove: LocalizedText;
}

export interface StoryChapterData {
  id: number;
  movie: string; // e.g. "Kung Fu Panda 1"
  title: LocalizedText;
  subtitle: LocalizedText;
  location: LocalizedText;
  storyText: LocalizedTextArray;
  quote: {
    text: LocalizedText;
    author: LocalizedText;
  };
  keyMoment: LocalizedText;
  badge: LocalizedText;
  visualTheme: 'gold' | 'jade' | 'red' | 'purple' | 'emerald';
}
