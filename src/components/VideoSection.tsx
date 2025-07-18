import React, { useState, useRef } from 'react';
import { Maximize2, Minimize2, X } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See GistGem in Action
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI-powered Chrome extension transforms your WhatsApp Web experience in just minutes.
          </p> */}
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl p-1 shadow-2xl">
            {/* Animated gradient border layers */}
            {/* <div className="absolute inset-0 rounded-3xl animate-gradient-rotate p-1"></div>
            <div className="absolute inset-0 rounded-3xl animate-gradient-spin opacity-60 p-1"></div>
            <div className="absolute inset-0 rounded-3xl animate-gradient-pulse opacity-40 p-1"></div> */}
            
            {/* Inner border container */}
            <div className="relative bg-gradient-to-br from-[#874EFF] to-[#C83FFF] rounded-3xl p-2 z-10">
              <div className="bg-black rounded-2xl aspect-video relative overflow-hidden group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-2xl cursor-pointer"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                onClick={handleVideoClick}
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
              
              {/* Fullscreen button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              >
                <Maximize2 className="h-5 w-5 text-white" />
              </button>
              
              {/* Overlay for branding */}
              {/* <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-white/90 text-sm font-medium">WhatsApp Extractor Demo</p>
              </div> */}
              
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 hover:bg-black/70 transition-colors duration-300 z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* Minimize button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-16 bg-black/50 backdrop-blur-sm rounded-lg p-3 hover:bg-black/70 transition-colors duration-300 z-10"
            >
              <Minimize2 className="h-6 w-6 text-white" />
            </button>
            
            {/* Video container */}
            <div className="relative w-full h-full">
              <div className="bg-black w-full h-full relative overflow-hidden">
                <video
                  className="w-full h-full object-contain cursor-pointer"
                  autoPlay
                  loop
                  
                  playsInline
                  controls={true}
                  onClick={handleVideoClick}
                >
                  <source src="/api/placeholder/video/demo.mp4" type="video/mp4" />
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay for branding */}
                {/* <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <p className="text-white/90 text-sm font-medium">WhatsApp Extractor Demo</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;