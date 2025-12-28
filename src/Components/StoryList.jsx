
const StoryList = ({ stories, onSelect}) => {
  return (
    <div className='flex overflow-x-auto gap-3 p-4 bg-gray-900'>
        {stories.map((story, index) => (
            <img 
              key={story.id}
              src={story.image}
              alt='story'
              onClick={() => onSelect(index)}
              className="w-16 h-16 rounded-full border-2 border-red-500 object-cover cursor-pointer flex-shrink-0"
            />
        ))}
      
    </div>
  )
}

export default StoryList;