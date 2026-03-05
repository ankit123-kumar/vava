import React from "react";

function TestPagination({ page, setPage, totalPages, theme }) {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`${theme.card} ${theme.border} ${theme.text} border px-3 py-1 rounded`}
      >
        Prev
      </button>

      <span className={`${theme.text} text-sm`}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={`${theme.card} ${theme.border} ${theme.text} border px-3 py-1 rounded`}
      >
        Next
      </button>

    </div>
  );
}

export default TestPagination;