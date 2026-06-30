import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-orange-50/50 flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main Error Card */}
      <div className="relative max-w-4xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(249,115,22,0.25)] flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 md:gap-16 border border-orange-100 z-10">
        {/* Left Side: Animated SVG Kitten in Delivery Bag */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <svg
            viewBox="0 0 300 300"
            className="w-full max-w-xs md:max-w-md drop-shadow-xl overflow-visible"
          >
            {/* Floating Hot Steam / Scent Lines */}
            <g
              stroke="#FB923C"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M 120,60 Q 110,40 120,20">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,10; 0,-10; 0,10"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0; 1; 0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 150,50 Q 160,30 150,10">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,10; 0,-10; 0,10"
                  dur="2.5s"
                  repeatCount="indefinite"
                  delay="0.5s"
                />
                <animate
                  attributeName="opacity"
                  values="0; 1; 0"
                  dur="2.5s"
                  repeatCount="indefinite"
                  delay="0.5s"
                />
              </path>
              <path d="M 180,60 Q 170,40 180,20">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,10; 0,-10; 0,10"
                  dur="2.2s"
                  repeatCount="indefinite"
                  delay="1s"
                />
                <animate
                  attributeName="opacity"
                  values="0; 1; 0"
                  dur="2.2s"
                  repeatCount="indefinite"
                  delay="1s"
                />
              </path>
            </g>
            {/* Back Flap of the Delivery Bag */}
            <path
              d="M 60,150 L 240,150 L 220,90 L 80,90 Z"
              fill="#C2410C"
            />{" "}
            {/* orange-700 */}
            {/* The Animated Kitten */}
            <g>
              {/* Peeking Animation: Moves the cat up and down */}
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,35; 0,0; 0,35"
                dur="5s"
                keyTimes="0; 0.2; 1"
                repeatCount="indefinite"
              />
              {/* Ears */}
              <polygon points="110,90 90,30 140,70" fill="#FDBA74" />
              <polygon points="190,90 210,30 160,70" fill="#FDBA74" />
              <polygon points="110,85 100,45 130,70" fill="#FFEDD5" />{" "}
              {/* Inner Ear L */}
              <polygon points="190,85 200,45 170,70" fill="#FFEDD5" />{" "}
              {/* Inner Ear R */}
              {/* Head */}
              <circle cx="150" cy="110" r="50" fill="#FFEDD5" />{" "}
              {/* orange-100 base */}
              <path d="M 100,110 A 50 50 0 0 0 200 110 Z" fill="#FDBA74" />{" "}
              {/* Orange Tabby Mask */}
              {/* Blinking Eyes */}
              <ellipse cx="130" cy="100" rx="6" ry="6" fill="#1F2937">
                <animate
                  attributeName="ry"
                  values="6; 0.5; 6; 6"
                  keyTimes="0; 0.05; 0.1; 1"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="170" cy="100" rx="6" ry="6" fill="#1F2937">
                <animate
                  attributeName="ry"
                  values="6; 0.5; 6; 6"
                  keyTimes="0; 0.05; 0.1; 1"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </ellipse>
              {/* Cute Nose & Mouth */}
              <polygon points="146,115 154,115 150,122" fill="#F472B6" />
              <path
                d="M 135,125 Q 150,140 165,125"
                fill="none"
                stroke="#1F2937"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Whiskers */}
              <line
                x1="115"
                y1="110"
                x2="85"
                y2="105"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="115"
                y1="120"
                x2="85"
                y2="125"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="185"
                y1="110"
                x2="215"
                y2="105"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="185"
                y1="120"
                x2="215"
                y2="125"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Paws grabbing the edge of the bag */}
              <path d="M 105,150 Q 115,130 130,150 Z" fill="#FFEDD5" />
              <path d="M 170,150 Q 185,130 195,150 Z" fill="#FFEDD5" />
            </g>
            {/* Front of the Delivery Bag */}
            <path
              d="M 50,150 L 250,150 L 230,260 L 70,260 Z"
              fill="#EA580C"
            />{" "}
            {/* orange-600 */}
            <path
              d="M 50,150 L 250,150 L 240,165 L 60,165 Z"
              fill="#F97316"
            />{" "}
            {/* orange-500 top lip */}
            {/* App Logo / Food Dome Icon on the Bag */}
            <g transform="translate(150, 215)">
              <path
                d="M -30,10 L 30,10"
                stroke="#FFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path d="M -25,5 A 25 25 0 0 1 25 5 Z" fill="#FFF" />
              <circle cx="0" cy="-25" r="5" fill="#FFF" />
            </g>
          </svg>
        </div>

        {/* Right Side: Error Text & Actions */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm border border-red-200">
            Error {error.status || "404"}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
            Someone took a bite <br className="hidden md:block" /> out of this
            page!
          </h1>

          <p className="text-lg text-slate-600 mb-8 font-medium">
            {error.statusText ||
              error.message ||
              "The delivery cat couldn't find the address you're looking for. The menu might have changed!"}
          </p>

          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-orange-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(249,115,22,0.4)] overflow-hidden w-full md:w-auto"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_forwards] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="mr-3 text-xl transition-transform group-hover:scale-110">
              🍔
            </span>
            Back to Menu
          </Link>
        </div>
      </div>

      {/* Define custom keyframes for the button shimmer effect within standard Tailwind arbitrarily */}
      <style >{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Error;
