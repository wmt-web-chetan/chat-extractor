import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See WhatsApp Extractor in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI-powered Chrome extension transforms your WhatsApp Web experience in just minutes.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl p-1 shadow-2xl">
            {/* Animated gradient border layers */}
            <div className="absolute inset-0 rounded-3xl animate-gradient-rotate p-1"></div>
            <div className="absolute inset-0 rounded-3xl animate-gradient-spin opacity-60 p-1"></div>
            <div className="absolute inset-0 rounded-3xl animate-gradient-pulse opacity-40 p-1"></div>
            
            {/* Inner border container */}
            <div className="relative bg-gradient-to-br from-[#874EFF] to-[#C83FFF] rounded-3xl p-2 z-10">
              <div className="bg-black rounded-2xl aspect-video relative overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                <source src="/api/placeholder/video/demo.mp4" type="video/mp4" />
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                {/* Fallback content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#874EFF]/20 to-[#C83FFF]/20 flex items-center justify-center">
                  <div className="text-white/80 text-center">
                    <p className="text-lg mb-2">🎬 Video Demo</p>
                    <p className="text-sm">Your browser doesn't support video playback</p>
                  </div>
                </div>
              </video>
              
              {/* Overlay for branding */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-white/90 text-sm font-medium">WhatsApp Extractor Demo</p>
              </div>
              
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;