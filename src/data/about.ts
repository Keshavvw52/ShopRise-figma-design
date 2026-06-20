export interface AboutSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
}

export interface AboutStat {
  id: string;
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

/** Static About page copy — exact Figma text from About us frame */
export const aboutIntro: AboutSection = {
  id: "intro",
  title: "About ShopRise – Elevating Your Local Shopping Experience",
  paragraphs: [
    "Welcome to ShopRise, your premier Local Marketplace",
    "ShopRise isn't just a marketplace; it's a community revolutionizing local buying and selling.",
    "Founded in 2023, ShopRise has swiftly become a leading mobile marketplace for local buyers and sellers across the U.S. Our mission is clear: to create the most reliable and user-friendly local marketplace, empowering our users to engage in transactions with confidence and ease.",
  ],
};

export const aboutSections: AboutSection[] = [
  {
    id: "journey",
    title: "Our Journey",
    paragraphs: [
      "ShopRise started with a vision to streamline the local buying and selling process, making it as straightforward and safe as possible. Our platform is built on the belief that everyone deserves access to a marketplace that is not just efficient but also secure and centered around the community.",
    ],
  },
  {
    id: "why",
    title: "Why ShopRise?",
    paragraphs: [],
    bullets: [
      {
        label: "Trust and Safety",
        text: "We prioritize your safety with features like secure messaging, verified community meet-up spots, and a comprehensive rating system.",
      },
      {
        label: "Ease of Use",
        text: "Our app's intuitive design makes buying and selling a breeze—just a few taps and you're set!",
      },
      {
        label: "Eco-Friendly",
        text: "Promoting local transactions helps reduce environmental impact, supporting sustainability.",
      },
      {
        label: "Community-Centric",
        text: "At ShopRise, we're building more than a platform; we're nurturing a community, fostering connections that enrich local neighborhoods.",
      },
    ],
  },
  {
    id: "future",
    title: "Visioning the Future",
    paragraphs: [
      "Looking forward, ShopRise is dedicated to innovating and enhancing our services. Our aim is to broaden our reach, ensuring every user experience is seamless, secure, and satisfying. We're not just developing a marketplace; we're cultivating a community where everyone can find value and connection.",
    ],
  },
  {
    id: "join",
    title: "Join the ShopRise Community",
    paragraphs: [
      "Whether you're decluttering, hunting for a bargain, or starting a local business venture, ShopRise is your go-to platform. Download our app today and join a thriving community of users who choose ShopRise for all their local buying and selling needs.",
    ],
  },
];

export const howItWorksText = `ShopRise: The premier local marketplace where simplicity meets trustworthiness. Elevate your buying and selling experience with us.
  1. Explore a plethora of exceptional deals in your vicinity, from elegant furniture and cutting-edge electronics to pristine vehicles. Discover the joy of purchasing directly from your neighbors, fostering community ties while you shop.
  2. Engage directly with sellers via our secure in-app messaging platform. Effortlessly negotiate prices and coordinate convenient meeting times, ensuring a seamless and professional transaction experience.
  3. Dive into user profiles to glean insights from ratings, badges, and a comprehensive transaction history. Make informed decisions with the confidence that you're interacting with credible members of our community.
  4. Transform your possessions into potential profit! Just snap a photo with your smartphone and post your item in under 30 seconds. Effortless listing, rapid results.
  5. Be part of a thriving community! Join millions of discerning individuals on the paramount mobile platform dedicated to local commerce. Where buyers meet sellers, and community connections are forged.`;

export const aboutStats: AboutStat[] = [
  { id: "1", value: "5000+", label: "Ads" },
  { id: "2", value: "3264+", label: "Happy Customers" },
  { id: "3", value: "2001+", label: "Verified Users" },
];

/** Figma repeats the same testimonial card 3 times */
export const testimonials: Testimonial[] = Array.from({ length: 3 }, (_, i) => ({
  id: String(i + 1),
  name: "David Lee",
  role: "Director, AutoSale",
  quote: "We a dealer car company and sell a lot of cars here. Thanks",
}));

export const aboutHeroImage = "/images/about/about-hero.png";
