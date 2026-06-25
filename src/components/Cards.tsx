const Cards = () => {
  const dashboardList = [
    {
      id: 1,
      title: "Tasks Logged Today",
      value: 8,
      range: "+2",
    },
    {
      id: 2,
      title: "Learning Hours",
      value: "6.5h",
      range: "+1.2h",
    },
    {
      id: 3,
      title: "Weekly Streak",
      value: 17,
      range: "+1",
    },
    {
      id: 4,
      title: "AI Insights used",
      value: 12,
      range: "+5",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dashboardList.map((data) => (
            <div
              key={data.id}
              className="w-full rounded-xl border-gray-200 bg-gray-50 p-5 shadow-lg hover:shadow-md transition-all hover:-translate-y-2"
            >
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-500">
                  {data.title}
                </p>

                <h3 className="text-4xl font-bold text-gray-900">
                  {data.value}
                </h3>

                <p className="text-sm font-medium text-green-600">
                  {data.range} from yesterday
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
