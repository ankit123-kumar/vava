import React from "react";

function AttemptNavigation({ current, total, setCurrent, onSubmit, theme }) {

  return (
    <div className="flex justify-between mt-6">

      <button
        disabled={current === 0}
        onClick={() => setCurrent(current - 1)}
        className={`px-4 py-2 ${theme.text} border ${theme.border} rounded`}
      >
        Previous
      </button>

      {current === total - 1 ? (

        <button
          onClick={onSubmit}
          className="px-5 py-2 bg-red-600 text-white rounded"
        >
          Submit Test
        </button>

      ) : (

        <button
          onClick={() => setCurrent(current + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Next
        </button>

      )}

    </div>
  );
}

export default AttemptNavigation;