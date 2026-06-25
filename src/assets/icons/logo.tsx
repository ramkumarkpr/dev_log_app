const Logo = () => {
  return (
    <>
      <div className="w-10 h-10 bg-[D4AF37] rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="300" height="300" rx="72" fill="#D4AF37" />

          {/* Code Symbol */}
          <polyline
            points="65,125 105,150 65,175"
            fill="none"
            stroke="#ffff"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <line
            x1="118"
            y1="150"
            x2="162"
            y2="150"
            stroke="#ffff"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Growth Chart */}
          <polyline
            points="120,215 140,202 160,208 180,188 202,172 225,158"
            fill="none"
            stroke="#ffff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="225" cy="158" r="6" fill="#ffff" />

          {/* Sparkles */}
          <circle cx="210" cy="60" r="5" fill="#ffff" />
          <circle cx="228" cy="75" r="3" fill="#ffff" opacity="0.8" />
          <circle cx="195" cy="72" r="3" fill="#ffff" opacity="0.6" />
        </svg>
      </div>
    </>
  );
};

export default Logo;
