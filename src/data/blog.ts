export interface BlogCategory {
  id: string;
  label: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imageSrc: string;
  avatarSrc: string;
  author: string;
  date: string;
  readTime?: string;
}

export interface ArticleDetail extends BlogArticle {
  breadcrumbCategory: string;
  introduction: string;
  body: string;
  conclusion: string;
  imageCaption: string;
  role: string;
}

/** Blog category tabs — exact Figma labels from Frame 1037 */
export const blogCategories: BlogCategory[] = [
  { id: "all", label: "View all" },
  { id: "technology", label: "Technology News" },
  { id: "health", label: "Health and Well-being" },
  { id: "travel", label: "Travel and Adventure" },
  { id: "food", label: "Food" },
];

/** Featured article — Figma Frame 1034 */
export const featuredBlogArticle: BlogArticle = {
  id: "featured",
  slug: "latest-technology-trends",
  title: "The Latest Technology Trends",
  category: "Technology News",
  excerpt:
    " Discover the latest technological\ninnovations and their impact on our\ndaily lives.",
  imageSrc: "/images/blog/featured-latest-technology-trends.png",
  avatarSrc: "/images/blog/avatar-john-smith.png",
  author: "John Smith",
  date: "11 Jan 2022",
  readTime: "5 min read",
};

/**
 * Blog grid articles — Figma Blog frame layout (3 columns, 25px gap).
 * Row 1: beside featured | Row 2–3: full width grid.
 */
export const blogArticles: BlogArticle[] = [
  {
    id: "tips-healthy-eating",
    slug: "tips-healthy-eating",
    title: "Tips for Healthy Eating",
    category: "Health and Well-being",
    excerpt: " Learn how to maintain a balanced \ndiet for a healthier life.",
    imageSrc: "/images/blog/tips-healthy-eating.png",
    avatarSrc: "/images/blog/avatar-lisa-miller.png",
    author: "Lisa Miller",
    date: "12 sept 2022",
    readTime: "1 day read",
  },
  {
    id: "exotic-cities",
    slug: "exotic-cities",
    title: "Exotic Cities to Visit",
    category: "Travel and Adventure",
    excerpt: "Discover unique urban destinations\naround the world.",
    imageSrc: "/images/blog/exotic-cities.png",
    avatarSrc: "/images/blog/avatar-jessica-turner.png",
    author: "Jessica Turner",
    date: "21 Jan 2023",
  },
  {
    id: "future-smartphones",
    slug: "future-smartphones",
    title: "Future Smartphones",
    category: "Technology News",
    excerpt:
      "An overview of the next generations of\nsmartphones and their advanced\nfeatures.",
    imageSrc: "/images/blog/future-smartphones.png",
    avatarSrc: "/images/blog/avatar-david-brown.png",
    author: "David Brown",
    date: "17 Apr 2022",
  },
  {
    id: "world-cuisine",
    slug: "world-cuisine",
    title: "World Cuisine Recipes",
    category: "Food and Gastronomy",
    excerpt: "Explore delicious international recipes\nto try at home.",
    imageSrc: "/images/blog/world-cuisine-recipes.png",
    avatarSrc: "/images/blog/avatar-sophia-martinez.png",
    author: "Sophia Martinez",
    date: "25 May 2023",
  },
  {
    id: "natural-wonders",
    slug: "natural-wonders",
    title: "Exploring the Natural Wonders",
    category: "Travel and Adventure",
    excerpt:
      "Breathtaking destinations for nature\nand adventure enthusiasts.",
    imageSrc: "/images/blog/natural-wonders.png",
    avatarSrc: "/images/blog/avatar-daniel-white.png",
    author: "Daniel White",
    date: "9 aug 2023",
  },
  {
    id: "rise-of-5g",
    slug: "rise-of-5g",
    title: "The Rise of 5G Technology",
    category: "Technology News",
    excerpt:
      "Explore the rapid advancement of 5G\ntechnology and its potential to\nrevolutionize connectivity.",
    imageSrc: "/images/blog/rise-of-5g.png",
    avatarSrc: "/images/blog/avatar-mark-roberts.png",
    author: "Mark Roberts",
    date: "11 Jan 2022",
    readTime: "1 hour read",
  },
  {
    id: "secrets-of-pastry",
    slug: "secrets-of-pastry",
    title: "The Secrets of Pastry",
    category: "Food and Gastronomy",
    excerpt:
      "Tips to become an expert pastry chef and create incredible desserts.",
    imageSrc: "/images/blog/secrets-of-pastry.png",
    avatarSrc: "/images/blog/avatar-maria-rodriguez.png",
    author: "Maria Rodriguez",
    date: "5 dec 2022",
    readTime: "5 min read",
  },
  {
    id: "ethical-ai",
    slug: "ethical-ai",
    title: "The Ethical Implications of AI",
    category: "Technology News",
    excerpt:
      "Explore the ethical dilemmas and\nconsiderations surrounding the use of\nartificial intelligence in various sectors.",
    imageSrc: "/images/blog/ethical-ai.png",
    avatarSrc: "/images/blog/avatar-alex-johnson.png",
    author: "Alex Johnson",
    date: "12 oct 2022",
  },
];

/** Full article content — Figma Articles frame (424:4368), Exotic Cities */
export const articleDetails: Record<string, ArticleDetail> = {
  "exotic-cities": {
    id: "exotic-cities",
    slug: "exotic-cities",
    title: "Exotic Cities to Visit",
    category: "Travel and Adventure",
    breadcrumbCategory: "Travel and Adventure",
    excerpt: "Discover unique urban destinations\naround the world.",
    imageSrc: "/images/blog/exotic-cities.png",
    avatarSrc: "/images/blog/avatar-jessica-turner.png",
    author: "Jessica Turner",
    role: "Community manager",
    date: "21 Jan 2023",
    imageCaption: "Ibiza Espagne",
    introduction:
      "In a world brimming with destinations to explore, there's a magnetic pull towards cities that promise something out of the ordinary. While iconic metropolises have their timeless charm, there's an allure in venturing off the beaten path to discover exotic cities that beckon with a sense of wonder.\nThese cities are where tradition intertwines with modernity, where history and culture unfold in the most captivating of ways. Join us as we embark on a journey to explore some of the most enchanting exotic cities the world has to offer, where each step promises a new adventure.",
    body:
      "Exotic cities are like hidden gems, waiting to be discovered by intrepid travelers seeking experiences beyond the usual tourist hotspots. These cities offer a glimpse into unique cultures, cuisines, and lifestyles that differ from the familiar. They ignite our curiosity, beckoning us to explore the uncharted, and they remind us that the world is an intricate tapestry of diverse wonders.\n\nOne of the joys of visiting exotic cities lies in the opportunity to immerse oneself in local traditions and customs. From savoring street food in Hoi An to joining a traditional tea ceremony in Kyoto, these cities offer experiences that engage all your senses.\n\nThe tantalizing aroma of spices, the sounds of bustling markets, the touch of ancient cobblestone streets, and the sight of stunning landscapes—all come together to create unforgettable memories. These cities are where you can become a temporary local, sharing in the rhythms of everyday life\n\nExotic cities aren't just destinations; they're gateways to adventures waiting to be had. Whether it's hiking through the Icelandic wilderness near Reykjavik, wandering the historic streets of Dubrovnik, or gazing at the shimmering lanterns of Hoi An, there's no shortage of experiences to uncover.",
    conclusion:
      "Exotic cities are more than just places on a map; they are invitations to embark on journeys of discovery and wonder. As we conclude our exploration of these captivating destinations, we're reminded that the world is a vast and diverse playground, offering endless opportunities for adventure and cultural enrichment.\n\nWhether you're drawn to the historical allure of Dubrovnik, the spiritual depth of Kyoto, or the sensory delights of Marrakech, remember that the exotic cities of the world are waiting to be explored, leaving an indelible mark on your wanderlust-filled heart. So, pack your bags, embrace the unknown, and let the magic of exotic cities inspire your next adventure.",
  },
};

export function getArticleBySlug(slug: string): ArticleDetail | undefined {
  return articleDetails[slug];
}

export function getAllArticleSlugs(): string[] {
  return Object.keys(articleDetails);
}
