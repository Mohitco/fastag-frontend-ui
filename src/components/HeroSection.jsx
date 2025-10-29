import bharat from '../assets/Bharat.png';
import hero from '../assets/herosection.png';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden
      before:content-[''] before:absolute before:w-[250px] before:h-[250px]
      before:top-[-60px] before:left-[-100px] before:bg-blue-300 before:rounded-full before:opacity-25 before:-z-10
      after:content-[''] after:absolute after:w-[300px] after:h-[300px]
      after:bottom-[180px] after:right-[-150px] after:bg-blue-300 after:rounded-full after:opacity-25 after:-z-10"
    >
      {/* Flex container (Text + Card only) */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 px-6 sm:px-10 md:px-16 lg:px-20 py-16 mt-17">
        {/* Left Text Section */}
        <div className="flex-1 md:text-left">
          <h1 className="text-black text-center md:w-[60%] md:text-left text-4xl sm:text-5xl font-Bangers font-bold leading-tight">
            FASTag Recharge Online at Logicalead
          </h1>
          <div className="mt-8 font-sans">
            <ul className="list-disc space-y-2">
              <li className="marker:text-green-600 marker:text-2xl">Multiple Payment option</li>
              <li className="marker:text-green-600 marker:text-2xl">Multiple Discounts & Offers for FASTag</li>
              <li className="marker:text-green-600 marker:text-2xl">24x7 Customer Support</li>
            </ul>
          </div>
        </div>

        {/* Center Recharge Card */}
        <div className="flex-1 w-full max-w-md border rounded-2xl mt-8 md:mt-0 shadow-sm">
          <div className="bg-[#00686E] rounded-t-2xl flex justify-between items-center p-5">
            <h2 className="text-white text-[20px]">FASTag Recharge</h2>
            <img className="h-[30px]" src={bharat} alt="icon" loading="lazy" />
          </div>
          <div className="p-6 flex justify-center">
            <form className="w-full">
              <input
                type="text"
                placeholder="Enter Vehicle number"
                className="border border-gray-300 rounded-[10px] mb-4 p-2 w-full outline-none
                           focus:border-blue-600 focus:ring-4 focus:ring-blue-200 focus:shadow-blue-100"
              />
              <button
                type="submit"
                className="bg-[#38A3A9] hover:bg-[#00686E] rounded-[10px] w-full p-2 text-white font-semibold transition-all duration-300"
              >
                Proceed
              </button>
              <p className="mt-2 text-sm text-gray-600 text-center">
                ⚡Get the best deals on FASTag Recharge
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Full-width Hero Image (outside flex) */}
      <div className="w-full">
        <img
          src={hero}
          alt="hero"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
