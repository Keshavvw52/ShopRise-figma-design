export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** FAQ content — exact Figma text from FAQ frame */
export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "  1. What is ShopRise",
    answer:
      "ShopRise is an online marketplace that allows users to buy and sell a wide range of items, including electronics, furniture, clothing, and more. It's a convenient platform for connecting with local buyers and sellers.",
  },
  {
    id: "2",
    question: "  1. How do I create an account on ShopRise?",
    answer:
      'To create an account on ShopRise, simply download the ShopRise app from the App Store or Google Play, or visit our website. Click on the "Sign Up" button and follow the prompts to set up your account.',
  },
  {
    id: "3",
    question: "  1. Is ShopRise available in my location?",
    answer:
      "ShopRise is based in the USA, and it is available in most major cities and regions across the country. You can use the app to discover local listings and sellers in your area.",
  },
  {
    id: "4",
    question: "  1. How can I list an item for sale on ShopRise?",
    answer:
      'Listing an item on ShopRise is easy. After signing in, click the "Sell" button, provide details about your item, add photos, set a price, and publish your listing. You can manage your listings through your account.',
  },
  {
    id: "5",
    question: "  1. Are there any fees for using ShopRise?",
    answer:
      "Listing and buying items on ShopRise is entirely free. However, please note that there are fees associated with successful transactions. These fees include a 10% transaction fee and a 2.5% processing fee.",
  },
  {
    id: "6",
    question: "  1. How do I contact a seller or buyer on ShopRise?",
    answer:
      'You can communicate with other users through the in-app messaging system. When you\'re interested in an item, simply click "Message" on the listing, and you can start a conversation with the seller or buyer.',
  },
  {
    id: "7",
    question: "  1. Is it safe to meet with people I connect with on ShopRise?",
    answer:
      "While ShopRise provides a platform to connect buyers and sellers, it's important to exercise caution when meeting with strangers. We recommend meeting in well-lit, public places and conducting transactions during daylight hours. Please review our safety tips in the app for more guidance.",
  },
];
