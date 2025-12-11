const ProfilePublicLesson = ({ lessonData }) => {
  return (
    <div>
      {lessonData && lessonData.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {lessonData.map((lesson, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 1
                  ? "hover:border-blue-500"
                  : "hover:border-green-500"
              } bg-slate-800 shadow border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition`}
            >
              <h4 className="text-xl font-semibold">{lesson?.title}</h4>
              <p className="text-gray-400 mt-2 text-xs text-justify">
                {lesson?.description}
              </p>
              <span className="text-xs px-2 py-1 bg-blue-700 rounded mt-2 inline-block">
                {lesson?.category}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-10">
          No lessons found. Start by creating your first lesson!
        </div>
      )}
    </div>
  );
};

export default ProfilePublicLesson;
