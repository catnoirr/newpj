import React from 'react';

const FeaturedLogos = () => {
  return (
    <div className="flex flex-col  justify-center  py-8   gap-2 mt-8">
        <div className='flex justify-center flex-col items-center gap-2'>
            <div className='text-4xl font-semibold text-slate-600'>Our Client</div>
      <div className="text-lg font-semibold text-gray-500 p-2">We have been working with some Fortune 500+ clients</div>
      </div>
      <div className="flex  justify-around items-center" >
        {/* Logo 1 */}
        <img src="./Logo1.png" alt="Logo 1" className=" md:w-16 md:h-16 w-8 h-8" />
        {/* Logo 2 */}
        <img src="./Logo2.png" alt="Logo 2" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 3 */}
        <img src="Logo3.png" alt="Logo3.png" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 4 */}
        <img src="./Logo4.png" alt="Logo 4" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 5 */}
        <img src="./Logo5.png" alt="Logo 5" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 6 */}
        <img src="./Logo6.png" alt="Logo 5" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 7 */}
        <img src="./Logo3.png" alt="Logo 5" className="md:w-16 md:h-16 w-10 h-10" />
      </div>
    </div>
  );
};

export default FeaturedLogos;
