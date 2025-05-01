import "./globals.css";
export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Tilted gray background */}
        <div className="absolute inset-0 z-0 bg-gray-300 clip-diagonal"></div>

        {/* Content layer (z-10 to go above background) */}
        <div className="relative z-10 flex w-full h-full">
          {/* Left side */}
          <div className="w-1/2 flex flex-col justify-center items-start pl-20">
            <h2 className="text-xl font-medium m-4">Hi, I am</h2>
            <h1 className="text-5xl font-bold mt-2">Archita Chaudhary</h1>
            <p className="text-gray-500 mt-1 font-semibold">
              Front-end Developer
            </p>
          </div>

          {/* Right side */}
          <div className="w-1/2 bg-black flex items-end justify-center">
            <img
              src="/your-image.png"
              alt="Profile"
              className="h-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
