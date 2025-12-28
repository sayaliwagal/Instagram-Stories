import React, { useEffect, useState } from 'react';
import storieys from './data/stories';
import StoryList from './Components/StoryList';
import StoryViewer from './Components/StoryViewer';
import Loader from './Components/Loader';

const App = () => {
  const [ stories, setStories ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ currentIndex, setCurrentIndex ] = useState(null);

  useEffect(() => {
    //Simulate fetch delay
    setTimeout(() => {
      setStories(storieys);
      setLoading(false);
    }, 1000)
  }, []);

  if(loading) return <Loader />;

  return (
    <div className="bg-slate-900 min-h-screen md:hidden">
        <StoryList
           stories={stories}
           onSelect={(index) => setCurrentIndex(index)}
           />
           {currentIndex !== null && (
            <StoryViewer 
               stories={stories}
               currentIndex={currentIndex}
               setCurrentIndex={setCurrentIndex}
               onClose={() => setCurrentIndex(null)}
               />
           )}
    </div>
  )
}

export default App
