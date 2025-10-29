import fastag from "../assets/fastag.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10 text-gray-700 mt-15"
    >
      {/* Left Side: Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-xl mb-4 font-semibold">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">Logiclead</span>, your
          trusted platform for FASTag recharge. We make it easy for vehicle
          owners to recharge their FASTag quickly and securely from anywhere.
        </p>
        <p className="text-lg">
          Our goal is to save your time at toll plazas by providing a smooth
          recharge experience with multiple payment options. With reliable
          service, exciting offers, and dedicated support, we are here to make
          your travel easier and more convenient.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={fastag}
          alt="About FASTag Recharge"
          className="w-[400px] sm:w-[500px] h-auto rounded-lg shadow-xl shadow-blue-100 hover:shadow-2xl hover:shadow-blue-300 transition-shadow duration-300"
        />
      </div>
    </section>
  );
}
