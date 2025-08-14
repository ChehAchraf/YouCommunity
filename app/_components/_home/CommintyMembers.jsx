import InfiniteMenu from "@/blocks/Components/InfiniteMenu/InfiniteMenu";

const items = [
  {
    image: "/ayoub.jpeg",
    link: "https://google.com/",
    title: "Ayoub",
    description: "Full Stack Developer & Community Leader",
  },
  {
    image: "azzedine.jpeg",
    link: "https://google.com/",
    title: "Azzedine",
    description: "Frontend Specialist & Mentor",
  },
  {
    image: "wissam.jpg",
    link: "https://google.com/",
    title: "Wissam",
    description: "Backend Developer & Problem Solver",
  },
  {
    image: "hammouch.jpg",
    link: "https://google.com/",
    title: "Hammouch",
    description: "UI/UX Designer & Creative Thinker",
  },
];

function CommintyMembers() {
  return (
    <div className="py-24 px-6 lg:px-24 bg-gradient-to-b from-black/20 to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center space-y-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet our <span className="text-blue-400">Community</span> Members
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
            Discover the people who make our community thrive — passionate
            learners, creative thinkers, and future innovators, all coming
            together to share, collaborate, and grow.
          </p>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">Active Now</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">Online</span>
            </div>
          </div>
        </div>
        
        <div className="relative" style={{ height: "600px" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-3xl"></div>
          <InfiniteMenu className="w-full" items={items} />
        </div>
      </div>
    </div>
  );
}

export default CommintyMembers;
