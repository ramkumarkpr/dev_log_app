const GroupStarIcon = () => {
  return (
    <>
      <div>
        <span className="w-10 h-10">
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <g fill="#FFD700" stroke="#FFD700" stroke-width="2">
              <polygon points="50,10 58,42 90,50 58,58 50,90 42,58 10,50 42,42" />

              <polygon points="20,25 22,33 30,35 22,37 20,45 18,37 10,35 18,33" />

              <polygon points="70,65 72,73 80,75 72,77 70,85 68,77 60,75 68,73" />

              <circle cx="25" cy="75" r="3" />

              <circle cx="75" cy="20" r="3" />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
};

export default GroupStarIcon;
