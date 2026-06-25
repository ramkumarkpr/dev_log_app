import RatingStarIcon from "../../../assets/icons/ratingsStarIcon";

const FocusAreaForm = () => {
  const focusAreas = [
    { id: "1", label: "Development", level: "", percentage: 100 },
    { id: "1", label: "Learning", level: "", percentage: 50 },
    { id: "1", label: "Design", level: "", percentage: 40 },
    { id: "1", label: "Planning", level: "", percentage: 20 },
  ];

  const getPercentageColor = (perc: number) => {
    if (perc === 100) {
      return <RatingStarIcon />;
    }

    if (perc >= 70 && perc <= 90) {
      return "text-green-500";
    }

    if (perc >= 50 && perc < 70) {
      return "text-yellow-600";
    }

    if (perc < 50) {
      return "text-red-600";
    }

    return "text-gray-500";
  };

  return (
    <>
      <main>
        <section className="grid grid-cols-2 gap-3">
          <div className="border border-gray-500 rounded shadow-lg">
            <h4 className="font-bold p-2">Top Focus Area</h4>

            {focusAreas.map((area) => (
              <div className="flex justify-between px-2 items-center gap-5">
                <div className="flex flex-col w-1/2">
                  <div className="text-gray-600 font-medium">{area.label}</div>
                  <div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={area.percentage}
                      className="mb-3 w-full"
                    />
                  </div>
                </div>
                <div>
                  <span
                    className={`font-bold ${getPercentageColor(area.percentage)}`}
                  >
                    {area.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-gray-500 rounded shadow-lg h-full w-full">
            <h4 className="font-bold p-2">AI Insights</h4>
            <div className="h-1/2 w-full flex justify-center items-center">
              <p className="flex items-center justify-center text-gray-700 font-bold">
                No records found
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FocusAreaForm;
