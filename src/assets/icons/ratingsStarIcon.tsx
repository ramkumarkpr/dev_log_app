const RatingStarIcon = () => {
  return (
    <>
      <div>
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" fill="#FFF9C4" opacity="0.3" />
          <circle cx="50" cy="50" r="35" fill="#FFEB3B" opacity="0.2" />

          <polygon
            points="50,5 61,35 93,35 67,53 78,85 50,67 22,85 33,53 7,35 39,35"
            fill="#FFD700"
            stroke="#F9A825"
            stroke-width="2"
            stroke-linejoin="round"
          />

          <polygon
            points="50,15 57,35 78,35 62,47 68,70 50,57 32,70 38,47 22,35 43,35"
            fill="#FFF176"
            opacity="0.6"
          />

          <g fill="#FFD700">
            <polygon points="12,12 15,20 23,23 15,26 12,34 9,26 1,23 9,20" />
            <polygon points="88,12 91,20 99,23 91,26 88,34 85,26 77,23 85,20" />
            <polygon points="12,88 15,80 23,77 15,74 12,66 9,74 1,77 9,80" />
            <polygon points="88,88 91,80 99,77 91,74 88,66 85,74 77,77 85,80" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default RatingStarIcon;
