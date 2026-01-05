// pages/courses.tsx or components/CoursesPage.tsx
"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import CourseCard from "@/component/dashboard/CourseCard";
import {
  Lock,
  Settings,
  DollarSign,
  Globe,
  Palette,
  TrendingUp,
} from "lucide-react";

const allCourses = [
  {
    id: 1,
    title: "Smart Contracts 101",
    desc: "Learn the fundamentals of writing smart contracts on SUI blockchain",
    level: "Beginner" as const,
    lessons: 12,
    weeks: 6,
    rating: 4.8,
    enrollments: "13k",
    category: "Smart Contracts",
    icon: <Lock size={30} className="text-purple-400" />,
  },
  {
    id: 2,
    title: "SUI Move Programming",
    desc: "Master the Move language for building secure blockchain applications",
    level: "Intermediate" as const,
    lessons: 15,
    weeks: 8,
    rating: 4.9,
    enrollments: "0.9k",
    category: "Blockchain",
    icon: <Settings size={30} className="text-blue-400" />,
  },
  {
    id: 3,
    title: "DeFi Fundamentals",
    desc: "Understand decentralized finance protocols and mechanisms",
    level: "Intermediate" as const,
    lessons: 14,
    weeks: 7,
    rating: 4.7,
    enrollments: "21k",
    category: "DeFi",
    icon: <DollarSign size={30} className="text-green-400" />,
  },
  {
    id: 4,
    title: "Blockchain Basics",
    desc: "Complete introduction to blockchain technology and crypto fundamentals",
    level: "Beginner" as const,
    lessons: 10,
    weeks: 5,
    rating: 4.6,
    enrollments: "5.2k",
    category: "Blockchain",
    icon: <Globe size={30} className="text-cyan-400" />,
  },
  {
    id: 5,
    title: "NFT Development",
    desc: "Create and deploy your own NFT collections on SUI",
    level: "Intermediate" as const,
    lessons: 11,
    weeks: 6,
    rating: 4.5,
    enrollments: "17k",
    category: "NFTs",
    icon: <Palette size={30} className="text-pink-400" />,
  },
  {
    id: 6,
    title: "Advanced DeFi Strategies",
    desc: "Learn advanced trading and liquidity strategies in DeFi",
    level: "Advanced" as const,
    lessons: 16,
    weeks: 8,
    rating: 4.9,
    enrollments: "0.4k",
    category: "DeFi",
    icon: <TrendingUp size={30} className="text-orange-400" />,
  },
];

const tabs = ["All", "Blockchain", "Smart Contracts", "DeFi", "NFTs"];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesTab =
        activeTab === "All" || course.category === activeTab;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen text-white">
      <div className="">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1 md:mb-2">Learning Modules</h2>
        <p className="text-[#F1EBFF99] mb-8">
          Explore our comprehensive courses and lessons
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mb-10">
          <Search
            size={23}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-purple text-black"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No courses found matching your search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                desc={course.desc}
                level={course.level}
                lessons={course.lessons}
                weeks={course.weeks}
                rating={course.rating}
                enrollments={course.enrollments}
                icon={course.icon}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}