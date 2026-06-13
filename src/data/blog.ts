export interface BlogCategory {
  id: string;
  label: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageSrc: string;
  avatarSrc: string;
  author: string;
  date: string;
  readTime?: string;
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
