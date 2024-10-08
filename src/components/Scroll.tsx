import React from 'react';

const Scroll = () => {
  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
  ];

  return (
    <div className="relative border max-w-fit border-white">
      {/* Wrapper with the animation */}
      <div className="flex items-center gap-2 whitespace-nowrap animate-scroll">
        {/* Duplicated content for smooth scrolling */}
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello1</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>Hello</div>
       <div className='bg-blue-300 h-32 w-32 flex items-center justify-center flex-shrink-0'>HelloEnd</div>
      </div>
    </div>
  );
};

export default Scroll;
