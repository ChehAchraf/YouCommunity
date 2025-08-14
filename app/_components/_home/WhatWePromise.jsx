import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import { Activity, Users, Target, Zap, BookOpen, Trophy, Heart, Star } from "lucide-react";

function WhatWePromise() {
  const promises = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Boost Your Productivity",
      description: "We help you work smarter, focus better, and achieve more in less time with the right tools and guidance.",
      color: "rgba(255, 193, 7, 0.2)"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Build Strong Connections",
      description: "Connect with like-minded developers, share experiences, and grow your professional network in a supportive environment.",
      color: "rgba(59, 130, 246, 0.2)"
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Achieve Your Goals",
      description: "Set clear objectives, track your progress, and celebrate milestones with a community that believes in your success.",
      color: "rgba(34, 197, 94, 0.2)"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      title: "Continuous Learning",
      description: "Access exclusive resources, workshops, and mentorship programs to keep your skills sharp and up-to-date.",
      color: "rgba(147, 51, 234, 0.2)"
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-400" />,
      title: "Recognition & Rewards",
      description: "Get recognized for your contributions, participate in challenges, and earn rewards for your achievements.",
      color: "rgba(249, 115, 22, 0.2)"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Supportive Environment",
      description: "Experience a safe, inclusive space where everyone feels valued, heard, and encouraged to grow together.",
      color: "rgba(239, 68, 68, 0.2)"
    }
  ];

  return (
    <div className="px-6 lg:px-24 py-20 bg-gradient-to-b from-black/20 to-black/50">
      <div className="max-w-7xl mx-auto">
        {/* title and text  */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What do we <span className="text-blue-400">promise</span> you?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mt-8">
            We're committed to providing you with an exceptional experience that goes beyond just learning. 
            Here's what you can expect from our community.
          </p>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card group hover:scale-105 transition-all duration-300"
              spotlightColor={promise.color}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    {promise.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                    {promise.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm">
                  {promise.description}
                </p>
                
                <div className="flex items-center gap-2 pt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-400">Guaranteed</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            <span>Join Our Community</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWePromise;
