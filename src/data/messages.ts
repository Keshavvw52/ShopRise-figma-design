/** Chat / messages — Figma Chat + Messages frames */
export interface ChatThread {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  time: string;
  sender: "them" | "me";
}

export const chatThreads: ChatThread[] = [
  {
    id: "1",
    name: "Jennifer Garnet",
    preview: "Perfect, I'll take it! How do I proceed with ...",
    time: "18:05",
    unread: true,
  },
  {
    id: "2",
    name: "Jennifer Garnet",
    preview: "Perfect, I'll take it! How do I proceed with ...",
    time: "18:05",
    unread: true,
  },
  {
    id: "3",
    name: "Jennifer Garnet",
    preview: "Perfect, I'll take it! How do I proceed with ...",
    time: "18:05",
    unread: false,
  },
];

export const jenniferMessages: ChatMessage[] = [
  {
    id: "1",
    text: "Hi, I'm interested in the blue sofa.\nCan you provide more details?",
    time: "18:05",
    sender: "them",
  },
  {
    id: "2",
    text: "Great! What are the dimensions?",
    time: "18:15",
    sender: "them",
  },
  {
    id: "3",
    text: "Perfect, I'll take it! How do I \nproceed with the purchase?",
    time: "18:15",
    sender: "them",
  },
  {
    id: "4",
    text: "Sure! You can proceed with checkout on the listing page.",
    time: "18:20",
    sender: "me",
  },
];
