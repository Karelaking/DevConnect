import CommunityList from "../components/CommunityList";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const CommunitiesPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section (Max width remains 7xl for full-bleed background) */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-cyan-800/60 pt-20 pb-12 shadow-lg shadow-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Title and CTA */}
            <div>
              <h1 className="text-6xl font-bold font-mono mb-4 text-white leading-tight">
                <span className="text-cyan-400 drop-shadow-md">JOIN</span>
                <span
  className="ml-2 font-extrabold text-black dark:text-white"
  style={{
    textShadow: `0 1px 2px #bae6fd, 0 0 2px #7dd3fc, 0 1px 1px rgba(0,0,0,0.08)`,
    WebkitTextStroke: '1px #7dd3fc'
  }}
>
  /build
</span>

              </h1>
              <p className="text-xl text-gray-300 font-mono mb-8" style={{textShadow: '0 1px 0 #0004'}}>
                Explore, connect, and collaborate in themed development communities.
              </p>
              
              <Link 
                to="/communities/create"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-400/80 hover:bg-cyan-400/90 border border-cyan-300/80 rounded-lg text-slate-900 font-mono font-bold transition-all duration-300 shadow-md hover:shadow-cyan-400/30 w-fit"
                style={{letterSpacing: '0.04em'}}
              >
                <Plus className="w-5 h-5 text-slate-900" />
                CREATE NEW COMMUNITY
              </Link>
            </div>
            
            {/* Right Column: Code Block Graphic */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-cyan-200/30 via-blue-200/20 to-slate-100/40 border border-cyan-400/40 rounded-lg p-8 font-mono text-sm text-gray-800 dark:text-gray-300" style={{backdropFilter:'blur(2px)', boxShadow:'0 2px 16px #0ff2'}}>
                <div className="text-green-600 font-bold">// Explore the communities</div>
                <div className="text-cyan-600 mt-2">const <span className="text-emerald-600">communities</span> <span className="text-emerald-600">=</span> <span className="text-emerald-600">{'['}</span></div>
                <div className="ml-4 text-gray-700 dark:text-gray-400 mt-1">
                  <span className="text-emerald-600">{'{'}</span> name: <span className="text-yellow-600 dark:text-yellow-400">'WebDev'</span>, members: <span className="text-pink-600 dark:text-pink-400">1024</span> <span className="text-emerald-600">{'}'}</span>,
                </div>
                <div className="ml-4 text-gray-700 dark:text-gray-400">
                  <span className="text-emerald-600">{'{'}</span> name: <span className="text-yellow-600 dark:text-yellow-400">'MachineLearning'</span>, members: <span className="text-pink-600 dark:text-pink-400">512</span> <span className="text-emerald-600">{'}'}</span>,
                </div>
                <div className="text-cyan-600">
                  <span className="text-emerald-600">{']'}</span>
                </div>
                <div className="text-cyan-600 mt-2 font-bold">join<span className="text-emerald-600">.</span>connect<span className="text-emerald-600">()</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section: max-w-5xl applied here for better margins */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        {/* Title for the list */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold font-mono text-cyan-400 drop-shadow mb-2">
            ~/<span className="text-white">ALL_COMMUNITIES</span>
          </h2>
          <p className="text-gray-300 font-mono text-base" style={{textShadow: '0 1px 0 #0004'}}>find your dev tribe</p>
        </div>
        <CommunityList />
      </div>
    </div>
  );
};