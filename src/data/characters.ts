import { Character } from '../types';

export const CHARACTERS_DATA: Character[] = [
  {
    id: 'po',
    name: { en: 'Po Ping (The Dragon Warrior)', bn: 'পো পিং (ড্রাগন ওয়ারিয়র)' },
    title: { en: 'The Dragon Warrior & Master of Chi', bn: 'ড্রাগন ওয়ারিয়র এবং মাস্টার অফ চি' },
    quote: { en: 'Skadoosh!', bn: 'স্ক্যাডুশ! (Skadoosh!)' },
    description: {
      en: 'A clumsy yet golden-hearted panda who rose from a noodle shop assistant to become the legendary Dragon Warrior, Master of Chi, and Spiritual Leader of the Valley of Peace.',
      bn: 'নুডলস দোকানের সহকারী থেকে শুরু করে নিজের অদম্য সাহস ও শুভ্র হৃদয় দিয়ে পো হয়ে ওঠে উপত্যকার সেরা ড্রাগন ওয়ারিয়র ও চি শক্তির মাস্টার।'
    },
    image: '🐼',
    role: 'hero',
    stats: { agility: 88, chi: 100, appetite: 100, wisdom: 95 },
    specialMove: { en: 'Wuxi Finger Hold & Golden Chi Dragon', bn: 'উসি ফিঙ্গার হোল্ড ও গোল্ডেন চি ড্রাগন' }
  },
  {
    id: 'shifu',
    name: { en: 'Master Shifu', bn: 'মাস্টার শিফু' },
    title: { en: 'Senior Master of Jade Palace', bn: 'জেড প্যালেসের প্রবীণ গুরু' },
    quote: { en: 'Inner Peace... Inner Peace...', bn: 'ইনার পিস... মনের অন্তরের পরম শান্তি...' },
    description: {
      en: 'A legendary Red Panda master who trained the Furious Five and Po. Strict and disciplined, he learned the ultimate power of faith and inner peace from Grand Master Oogway.',
      bn: 'ফিউরিয়াস ফাইভ ও পো-র সম্মানিত গুরু। কঠোর নিয়মানুবর্তী হলেও গ্র্যান্ড মাস্টার ওগওয়ের কাছ থেকে আত্মবিশ্বাস ও পরম শান্তির শিক্ষা লাভ করেছেন।'
    },
    image: '🦊',
    role: 'master',
    stats: { agility: 96, chi: 90, appetite: 40, wisdom: 96 },
    specialMove: { en: 'Nerve Strike & Dumpling Chopstick Parry', bn: 'নার্ভ স্ট্রাইক ও চপস্টিক পাররি' }
  },
  {
    id: 'oogway',
    name: { en: 'Grand Master Oogway', bn: 'গ্র্যান্ড মাস্টার ওগওয়ে' },
    title: { en: 'Founder of Kung Fu & Spirit Realm Sage', bn: 'কুংফু-র জনক ও স্পিরিট রিয়েলমের ঋষি' },
    quote: {
      en: 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.',
      bn: 'গতকাল একটি ইতিহাস, আগামীকাল একটি রহস্য, কিন্তু আজকের দিনটি একটি উপহার।'
    },
    description: {
      en: 'An ancient Galapagos tortoise of infinite wisdom who created Kung Fu thousands of years ago and foresaw Po as the true Dragon Warrior.',
      bn: 'হাজার বছর আগে কুংফু আবিষ্কার করা প্রাচীন মহামতি কাচ্ছাপ। যিনি পো-র ভেতরের ড্রাগন ওয়ারিয়রকে প্রথম চিনতে পেরেছিলেন।'
    },
    image: '🐢',
    role: 'master',
    stats: { agility: 85, chi: 100, appetite: 30, wisdom: 100 },
    specialMove: { en: 'Peach Blossom Chi Touch & Spirit Realm Portal', bn: 'পিচ ব্লসম চি টাচ ও স্পিরিট পোর্টাল' }
  },
  {
    id: 'tigress',
    name: { en: 'Master Tigress', bn: 'মাস্টার টাইগ্রেস' },
    title: { en: 'Leader of the Furious Five', bn: 'ফিউরিয়াস ফাইভের দলনেত্রী' },
    quote: { en: 'The Dragon Warrior did not quit. And neither will I.', bn: 'ড্রাগন ওয়ারিয়র কখনো হার মানেনি, আমিও মানবো না।' },
    description: {
      en: 'The strongest and most disciplined member of the Furious Five. Though initially skeptical of Po, she became his most loyal companion and fierce defender.',
      bn: 'ফিউরিয়াস ফাইভের সবচেয়ে শক্তিশালী ও অনুশাসিত যোদ্ধা। প্রথমে পো-কে সন্দেহ করলেও পরবর্তীতে তার সেরা বন্ধু ও সহযোদ্ধা হয়ে ওঠে।'
    },
    image: '🐯',
    role: 'furious_five',
    stats: { agility: 98, chi: 84, appetite: 60, wisdom: 88 },
    specialMove: { en: 'Tiger Claw & Iron Strike', bn: 'টাইগার ক্ল ও আয়রন থ্রাস্ট' }
  },
  {
    id: 'viper',
    name: { en: 'Master Viper', bn: 'মাস্টার ভাইপার' },
    title: { en: 'Ribbon Master of Grace & Agility', bn: 'সৌন্দর্য ও গতিময়তার ফিতা মাস্টার' },
    quote: { en: 'Kindness is the highest form of strength.', bn: 'দয়া ও সহমর্মিতাই সবচেয়ে বড় শক্তি।' },
    description: {
      en: 'Born without venomous fangs, Viper mastered ribbon dancing kung fu, using precision, compassion, and lightning speed to disarm any opponent.',
      bn: 'বিষাক্ত দাঁত ছাড়া জন্মগ্রহণ করা সত্ত্বেও নিজের ফিতা নৃত্যের কুংফু দিয়ে তীব্র গতি ও দক্ষতার মাধ্যমে শত্রুকে পরাস্ত করেন।'
    },
    image: '🐍',
    role: 'furious_five',
    stats: { agility: 95, chi: 80, appetite: 45, wisdom: 85 },
    specialMove: { en: 'Ribbon Whip Wrap & Shadow Coils', bn: 'রিবন হুইপ ওয়াইন্ড ও শ্যাডো কয়েল' }
  },
  {
    id: 'monkey',
    name: { en: 'Master Monkey', bn: 'মাস্টার মাঙ্কি' },
    title: { en: 'Acrobatic Master of Playful Acrobatics', bn: 'অ্যাক্রোবেটিক কুংফু মাস্টার' },
    quote: { en: 'Fun and fight go hand in hand!', bn: 'মজা আর যুদ্ধ একসাথে চলে!' },
    description: {
      en: 'Friendly, humorous, and incredibly nimble, Monkey fights with staff precision and unpredictable acrobatic acrobatics.',
      bn: 'হাসিখুশি ও অত্যন্ত চটপটে যোদ্ধা যিনি নিজের লাঠি এবং অনন্য শারীরিক কসরত দিয়ে শত্রুকে ধাঁধায় ফেলে দেন।'
    },
    image: '🐒',
    role: 'furious_five',
    stats: { agility: 96, chi: 81, appetite: 75, wisdom: 80 },
    specialMove: { en: 'Monkey Staff Spin & Tail Sweep', bn: 'মাঙ্কি স্টাফ স্পিন ও টেইল সুইপ' }
  },
  {
    id: 'mantis',
    name: { en: 'Master Mantis', bn: 'মাস্টার মেন্টিস' },
    title: { en: 'The Tiny Titan of Pressure Points', bn: 'আকুপ্রেসারের পিগমি মাস্টার' },
    quote: { en: 'Size means nothing when you hit the exact pressure point!', bn: 'সঠিক প্রেসার পয়েন্টে আঘাত করতে পারলে শরীরের আকার কোনো বিষয় না!' },
    description: {
      en: 'Smallest of the Furious Five, Mantis possesses colossal strength and supreme mastery over acupuncture and pressure point strikes.',
      bn: 'আকারে সবচেয়ে ছোট হলেও অগাধ শক্তি এবং শরীরের সুনির্দিষ্ট প্রেসার পয়েন্টে আঘাত করার অদ্ভুত ক্ষমতার অধিকারী।'
    },
    image: '🦗',
    role: 'furious_five',
    stats: { agility: 99, chi: 83, appetite: 50, wisdom: 82 },
    specialMove: { en: 'Pinpoint Nerve Paralysis', bn: 'পিনপয়েন্ট নার্ভ প্যারালাইসিস' }
  },
  {
    id: 'crane',
    name: { en: 'Master Crane', bn: 'মাস্টার ক্রেন' },
    title: { en: 'Aerial Tactician of Wind', bn: 'বাতাস ও আকাশের কৌশলী মাস্টার' },
    quote: { en: 'Keep a calm head, and the wind will guide your wings.', bn: 'মাথা ঠান্ডা রাখো, বাতাস নিজেই তোমার ডানা গাইড করবে।' },
    description: {
      en: 'The peaceful mediator of the team who controls gusts of wind with his massive wings and glides effortlessly in combat.',
      bn: 'শান্ত স্বভাবের বক পাখি যিনি ডানার ঝাপটায় প্রবল বাতাস সৃষ্টি করে যুদ্ধক্ষেত্র নিয়ন্ত্রণ করেন।'
    },
    image: '🦩',
    role: 'furious_five',
    stats: { agility: 94, chi: 82, appetite: 40, wisdom: 87 },
    specialMove: { en: 'Tornado Wing Gust & Sky Glide', bn: 'টরনেডো উইং গাস্ট ও স্কাই গ্লাইড' }
  },
  {
    id: 'tailung',
    name: { en: 'Tai Lung', bn: 'তাই লাং' },
    title: { en: 'The Ferocious Snow Leopard', bn: 'ভয়ংকর স্নো লেপার্ড' },
    quote: { en: 'Finally! A worthy opponent! Our battle will be LEGENDARY!', bn: 'অবশেষে! একজন যোগ্য প্রতিদ্বন্দ্বী! আমাদের লড়াই হবে ইতিহাস!' },
    description: {
      en: 'Master Shifu’s first pupil who succumbed to pride and rage after being denied the Dragon Scroll, breaking out of Chorh-Gom prison to challenge Po.',
      bn: 'মাস্টার শিফুর প্রথম শিষ্য যিনি অহংকার ও ক্ষোভে পথভ্রষ্ট হন এবং ড্রাগন স্ক্রোলের জন্য পুরো ভ্যালিতে তাণ্ডব চালান।'
    },
    image: '🐆',
    role: 'villain',
    stats: { agility: 97, chi: 86, appetite: 60, wisdom: 65 },
    specialMove: { en: 'Blue Fire Nerve Block Punch', bn: 'ব্লু ফায়ার নার্ভ ব্লক পাঞ্চ' }
  },
  {
    id: 'shen',
    name: { en: 'Lord Shen', bn: 'লর্ড শেন' },
    title: { en: 'Peacock Master of Fireworks & Cannons', bn: 'বারুদ ও কামানের ময়ূর শাসক' },
    quote: { en: 'The only cause of unhappiness is not accepting what is.', bn: 'অসুখী হওয়ার একমাত্র কারণ হলো যা সত্যি তা মেনে না নেওয়া।' },
    description: {
      en: 'An aristocratic peacock who sought to conquer China using devastating metal gunpowder cannons and blade-sharp feather daggers.',
      bn: 'এক অহংকারী ময়ূর শাসক যিনি নিজের বারুদ ও কামানের শক্তিতে পুরো চীন জয় করতে চেয়েছিল।'
    },
    image: '🦚',
    role: 'villain',
    stats: { agility: 93, chi: 72, appetite: 40, wisdom: 82 },
    specialMove: { en: 'Feather Dagger Barrage & Cannon Fire', bn: 'ফেদার ড্যাগার ব্যারেজ ও ক্যানন ফায়ার' }
  },
  {
    id: 'kai',
    name: { en: 'General Kai (The Collector)', bn: 'জেনারেল কাই (দ্য কালেক্টর)' },
    title: { en: 'Supreme Jade Warrior of Spirit Realm', bn: 'স্পিরিট রিয়েলমের গ্রীন জেডের সেনাপতি' },
    quote: { en: 'I am Kai! Maker of Widows, Conqueror of Beasts!', bn: 'আমি কাই! সমস্ত বীরদের সংহারক ও চি সংগ্রহকারী!' },
    description: {
      en: 'Oogway’s former brother-in-arms who stole the Chi of thousands of masters in the Spirit Realm to create an army of Jade Zombies.',
      bn: 'ওগওয়ের প্রাচীন যুদ্ধসঙ্গী যিনি সমস্ত মাস্টারদের চি চুরি করে জেডের তৈরি অনুগত সৈন্যবাহিনী গড়ে তুলেছিলেন।'
    },
    image: '🐂',
    role: 'villain',
    stats: { agility: 89, chi: 98, appetite: 70, wisdom: 75 },
    specialMove: { en: 'Jade Chain Blade Lash & Chi Steal', bn: 'জেড চেইন ব্লেড ল্যাশ ও চি স্টিল' }
  },
  {
    id: 'chameleon',
    name: { en: 'The Chameleon', bn: 'দ্য কেমেলিয়ন' },
    title: { en: 'Shape-shifting Sorceress of Juniper City', bn: 'জুনিপার সিটির রূপ পরিবর্তনকারী জাদুকরী' },
    quote: { en: 'Why learn kung fu when I can steal every master’s strength?', bn: 'অন্যের সব শক্তি চুরি করতে পারলে কষ্ট করে কুংফু শেখার কী দরকার?' },
    description: {
      en: 'A powerful sorceress who could transform into any creature and absorb the kung fu abilities of every villain from the Spirit Realm.',
      bn: 'এক শক্তিশালী জাদুকরী যিনি যেকোনো প্রাণীর রূপ ধারণ করতে পারতেন এবং সমস্ত খলনায়কদের কুংফু কৌশল নিজের ভেতর শুষে নিতেন।'
    },
    image: '🦎',
    role: 'villain',
    stats: { agility: 92, chi: 94, appetite: 55, wisdom: 88 },
    specialMove: { en: 'Spirit Realm Form Shift & Chi Drain', bn: 'স্পিরিট শিফট ও চি ড্রেন' }
  },
  {
    id: 'zhen',
    name: { en: 'Zhen', bn: 'ঝেন' },
    title: { en: 'The Clever Corsac Fox & Spiritual Successor', bn: 'চতুর ফক্স ও হবু স্পিরিচুয়াল লিডার' },
    quote: { en: 'Trust is hard to earn, but essential to give.', bn: 'বিশ্বাস অর্জন করা কঠিন, কিন্তু কাউকে বিশ্বাস করা জরুরি।' },
    description: {
      en: 'A quick-witted street-smart fox thief from Juniper City who redeemed herself, teamed up with Po, and became the candidate for the next Dragon Warrior.',
      bn: 'জুনিপার সিটির চতুর শিয়াল চোর যিনি পরবর্তীতে পো-র সাথে দল বেঁধে ভ্যালি রক্ষা করেন এবং পরবর্তী ড্রাগন ওয়ারিয়র হওয়ার যোগ্যতা লাভ করেন।'
    },
    image: '🦊',
    role: 'hero',
    stats: { agility: 95, chi: 82, appetite: 65, wisdom: 85 },
    specialMove: { en: 'Shadow Fox Vault & Staff Spin', bn: 'শ্যাডো ফক্স ভল্ট ও স্টাফ স্পিন' }
  },
  {
    id: 'ping',
    name: { en: 'Mr. Ping', bn: 'মি. পিং' },
    title: { en: 'Master Noodle Chef & Loving Adoptive Father', bn: 'মাস্টার নুডল শেফ ও ভালোবাসাময় বাবা' },
    quote: { en: 'The secret ingredient of my Secret Ingredient Soup is... NOTHING!', bn: 'আমার স্পেশাল স্যুপের গোপন উপাদান হলো... কিছুই না! বিশ্বাসই মূল শক্তি!' },
    description: {
      en: 'A caring goose noodle chef who raised Po with unconditional love and revealed the true wisdom behind the Secret Ingredient Soup.',
      bn: 'এক মমতাময় হাঁস শেফ যিনি পো-কে পরম স্নেহে বড় করেছেন এবং শিখিয়েছেন যে নিজের প্রতি আত্মবিশ্বাসই সবচেয়ে বড় গোপন উপাদান।'
    },
    image: '🦆',
    role: 'ally',
    stats: { agility: 70, chi: 50, appetite: 90, wisdom: 92 },
    specialMove: { en: 'Secret Ingredient Soup Cleaver Slash', bn: 'সিক্রেট ইনগ্রেডিয়েন্ট নুডল স্যুপ সার্ভ' }
  },
  {
    id: 'lishan',
    name: { en: 'Li Shan', bn: 'লি শান' },
    title: { en: 'Po’s Biological Panda Father', bn: 'পো-র জন্মদাতা বাবা' },
    quote: { en: 'Pandas don’t walk! We roll!', bn: 'পান্ডারা হেঁটে চলায় সময় নষ্ট করে না, আমরা গড়িয়ে চলি!' },
    description: {
      en: 'Po’s jovial, dumpling-loving biological father who leads the secret Panda Village and helped Po reconnect with his panda roots.',
      bn: 'পো-র হাসিখুশি আসল বাবা যিনি লুকানো পান্ডা গ্রামের নেতা এবং পো-কে আসল পান্ডাদের মতো চি শক্তি ব্যবহারে সাহায্য করেন।'
    },
    image: '🐼',
    role: 'ally',
    stats: { agility: 65, chi: 88, appetite: 100, wisdom: 80 },
    specialMove: { en: 'Panda Village Cannonball Roll', bn: 'পান্ডা ভিলেজ ক্যাননবল রোল' }
  }
];
