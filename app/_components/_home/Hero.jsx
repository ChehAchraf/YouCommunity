import React from "react";
import LightRays from "@/blocks/Backgrounds/LightRays/LightRays";
import Magnet from "@/blocks/Animations/Magnet/Magnet";

function Hero() {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen"
      style={{ width: "100%" }}
    >
      {/* Background*/}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>

      {/* content */}
      <div className="relative z-10 text-white space-y-12 px-6 max-w-6xl mx-auto text-center">
        <div className="px-6 py-3 w-fit mx-auto rounded-full border font-medium text-sm border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-2xl hover:bg-white/15 transition-all duration-300 animate-pulse">
          🚀 Apes together, are strong ❤️
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            May the Community guide you <br />
            <span className="text-blue-400">on your path</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join our vibrant community of learners, creators, and innovators. 
            Together we build, learn, and grow stronger.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
          <Magnet disabled={false}>
            <button className="group cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:from-blue-600 hover:to-blue-700">
              <span className="flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Magnet>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
