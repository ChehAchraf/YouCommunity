import React from "react";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";
import PixelTransition from "@/blocks/Animations/PixelTransition/PixelTransition";

function WhyComminuty() {
  return (
    <div className="px-6 lg:px-24 py-20 bg-gradient-to-b from-black/50 to-black/20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* text */}
        <div className="max-w-lg lg:max-w-md space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why a <span className="text-blue-400">Community</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            Our YouCode Community is more than just a group — it's a hub where
            creativity meets collaboration. Here, students and tech enthusiasts
            come together to take on exciting coding challenges, participate in
            friendly competitions, and stay updated with important announcements.
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            It's also the perfect place to discover how to join YouCode, get
            insider tips on thriving during the SAS period, and access valuable
            resources about the school and its programs.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-xs font-bold text-black">
                +50
              </div>
            </div>
            <span className="text-gray-400 text-sm">Active members</span>
          </div>
        </div>

        {/* animated cards */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          style={{ width: "700px", height: "500px" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card className="rounded-2xl overflow-hidden shadow-xl">
              <h3 className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg">
                We can help each others! 🤝
              </h3>
              <div className="flex-1">
                <PixelTransition
                  className="w-full h-full"
                  firstContent={
                    <img
                      src={"/bestplace.jpeg"}
                      alt="Community helping each other"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "3rem",
                          color: "#ffffff",
                        }}
                      >
                        Join us!
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                />
              </div>
            </Card>
            <Card className="rounded-2xl overflow-hidden shadow-xl">
              <h3 className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg">
                We can Have fun! 🎉
              </h3>
              <div className="flex-1">
                <PixelTransition
                  className="w-full h-full"
                  firstContent={
                    <img
                      src={"/fun.jpeg"}
                      alt="Community having fun"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "3rem",
                          color: "#ffffff",
                        }}
                      >
                        Join us!
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                />
              </div>
            </Card>
            <Card className="rounded-2xl overflow-hidden shadow-xl">
              <h3 className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-lg">
                We are a family! ❤️
              </h3>
              <div className="flex-1">
                <PixelTransition
                  className="w-full h-full"
                  firstContent={
                    <img
                      src={"/family.jpeg"}
                      alt="Community family"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "3rem",
                          color: "#ffffff",
                        }}
                      >
                        Join us!
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                />
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}

export default WhyComminuty;
