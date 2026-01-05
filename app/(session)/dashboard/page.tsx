import CourseProgressCard from "@/component/dashboard/CourseProgressCard";
import StatCard from "@/component/dashboard/StatCard";
import QuickActions from "@/component/dashboard/QuickActions";
import ActiveTasks from "@/component/dashboard/ActiveTasks";
import Achievements from "@/component/dashboard/Achievements";
import { Award, BookOpen, TrendingUp, Zap } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      
      <div>
        <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1 md:mb-2">
          Welcome back, adefemioluwatobi13 👋
        </h1>
        <p className="text-sm xl:text-base text-[#F1EBFF99]">
          Here&apos;s your learning dashboard overview
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={TrendingUp} value="72%" subtitle="Current week streak" color="purple" />
        <StatCard icon={Award} value="2,450" subtitle="SYN tokens earned" color="pink2" />
        <StatCard icon={BookOpen} value="3" subtitle="Enrolled courses" color="pink" />
        <StatCard icon={Zap} value="8" subtitle="Earned badges" color="yellow" />
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          <QuickActions />

          {/* Courses */}
          <section>
            <h3 className="text-xl xl:text-2xl font-semibold mb-1">Your Courses</h3>
            <p className="text-sm xl:text-base text-soft-lavender mb-6">
              Continue your learning journey
            </p>

            <div className="space-y-6">
              <CourseProgressCard
                title="Smart Contracts 101"
                lessons={12}
                progress={65}
              />
              <CourseProgressCard
                title="SUI Move Programming"
                lessons={15}
                progress={45}
              />
              <CourseProgressCard
                title="Blockchain Fundamentals"
                lessons={10}
                progress={80}
              />
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          <ActiveTasks />
          <Achievements />
        </div>
      </div>
    </div>
  );
}
