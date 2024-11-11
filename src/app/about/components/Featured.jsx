import React from 'react';

const FeaturedLogos = () => {
  return (
    <div className="flex flex-col  justify-center  py-8 bg-white  gap-2">
      <div className="text-sm font-semibold text-gray-500">Featured In</div>
      <div className="flex  justify-around" >
        {/* Logo 1 */}
        <img src="./Logo1.png" alt="Logo 1" className=" md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 2 */}
        <img src="./Logo2.png" alt="Logo 2" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 3 */}
        <img src="Logo3.png" alt="Logo3.png" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 4 */}
        <img src="./Logo4.png" alt="Logo 4" className="md:w-16 md:h-16 w-10 h-10" />
        {/* Logo 5 */}
        <img src="./Logo5.png" alt="Logo 5" className="md:w-16 md:h-16 w-10 h-10" />
      </div>
    </div>
  );
};

export default FeaturedLogos;
