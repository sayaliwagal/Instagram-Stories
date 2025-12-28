import React, { useEffect } from 'react'

const StoryViewer = ({stories, currentIndex, setCurrentIndex, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentIndex < stories.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }else {
                onClose();
            }
        }, 5000);
        return () => clearTimeout(timer); //clear timer on story change or unmount
    }, [currentIndex, stories.length, setCurrentIndex, onClose]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === "ArrowLeft"){
                goPrev();
            }
            if(e.key === "ArrowRight"){
                goNext();
            }
            if(e.key === "Escape"){
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

   //Navigate to previous or next story based on tap position
    const goPrev = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goNext = () => {
        if(currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }else {
            onClose();
        }
    };
  return (
    <div className="fixed inset-0 bg-gray-900 z-50">
        {/* Auto-advance to next story after 5 seconds */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-600 z-50">
            <div key={currentIndex} className="h-full bg-white animate-progress"/>
        </div>
      <img 
            src={stories[currentIndex].image} 
            alt="story"
            className="w-full h-full object-cover"
             />

             {/* Left Tap  */}
             <div className="absolute left-0 top-0 w-1/2 h-full"
             onClick={goPrev} />

             {/* Right Tap  */}
             <div className="absolute right-0 top-0 w-1/2 h-full"
             onClick={goNext} />
             
             {/* Close */}

             <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 border-2 shadow rounded-full bg-gray-100 text-gray-800 text-3xl font-extrabold">
                X
              </button>
    </div>
  )
}

export default StoryViewer
