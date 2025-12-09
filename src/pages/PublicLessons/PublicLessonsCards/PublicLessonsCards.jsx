import React from 'react'
import PublicLessonsCard from '../PublicLessonsCard/PublicLessonsCard';
export const lifeLessons = [
  {
    id: 1,
    title: "Stop Comparing Your Journey",
    shortDescription:
      "তোমার জীবনের গতি অন্যের সাথে তুলনা করলে নিজের progress নষ্ট হয়। নিজের পথে ফোকাস করো।",
    category: "Motivation",
    emotionalTone: "Inspirational",
    creator: {
      name: "Hasan Mahamud",
      photo: "https://i.ibb.co.com/1Jrjwxcc/Adobe-Express-file.png",
    },
    accessLevel: "free", // free | premium
    createdAt: "2025-01-12",
  },
  {
    id: 2,
    title: "Silence is a Superpower",
    shortDescription:
      "সব কথা সবার কাছে বলা লাগে না। নীরবতা অনেক সময় শক্তি ও শান্তি দেয়।",
    category: "Self-control",
    emotionalTone: "Calm",
    creator: {
      name: "Jui",
      photo: "https://i.ibb.co.com/1Jrjwxcc/Adobe-Express-file.png",
    },
    accessLevel: "premium",
    createdAt: "2025-01-18",
  },
  {
    id: 3,
    title: "Hard Work Beats Talent",
    shortDescription:
      "ট্যালেন্ট যদি পরিশ্রম না করে, তখন নিয়মিত practice করা লোকটাই জিতে যায়।",
    category: "Study",
    emotionalTone: "Positive",
    creator: {
      name: "Arif Rahman",
      photo: "https://i.ibb.co.com/wZDQKkrK/Gemini-Generated-Image-o0oi1bo0oi1bo0oi.png",
    },
    accessLevel: "free",
    createdAt: "2025-02-01",
  },
  {
    id: 4,
    title: "Choose Your Circle Wisely",
    shortDescription:
      "ভুল মানুষদের সাথে সময় কাটালে মানসিক অবস্থার উপর খারাপ প্রভাব পড়ে।",
    category: "Relationship",
    emotionalTone: "Emotional",
    creator: {
      name: "Sadia Noor",
      photo: "https://i.ibb.co.com/1Jrjwxcc/Adobe-Express-file.png",
    },
    accessLevel: "free",
    createdAt: "2025-02-10",
  },
  {
    id: 5,
    title: "Learn to Say No",
    shortDescription:
      "সবার মন রাখতে গিয়ে নিজের ক্ষতি কোরো না। কখন 'No' বলতে হবে, সেটা বুঝতে শেখো।",
    category: "Personal Growth",
    emotionalTone: "Awareness",
    creator: {
      name: "Mehedi Islam",
      photo: "https://i.ibb.co.com/wZDQKkrK/Gemini-Generated-Image-o0oi1bo0oi1bo0oi.png",
    },
    accessLevel: "free",
    createdAt: "2025-02-15",
  },
  {
    id: 6,
    title: "Doing Nothing is Also Rest",
    shortDescription:
      "মাঝে মাঝে কিছু না করাও জরুরি। এতে মন ও শরীর দুটোই রিসেট হয়।",
    category: "Mental Health",
    emotionalTone: "Relaxing",
    creator: {
      name: "Samiha Khan",
      photo: "https://i.ibb.co.com/VW6xJpc9/bb82c1dc-1e94-4500-8f74-93dd09407d75.jpg",
    },
    accessLevel: "premium",
    createdAt: "2025-02-20",
  },
];

const PublicLessonsCards = () => {
  return (
     <div className="container max-w-7xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lifeLessons.map((lesson) => (
          <PublicLessonsCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}

export default PublicLessonsCards