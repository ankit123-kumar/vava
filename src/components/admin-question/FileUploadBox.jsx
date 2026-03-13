import React from "react";

function FileUploadBox({ onFileUpload, theme }) {

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) onFileUpload(file);
  };

  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-xl p-8 text-center`}
    >

      <p className={`${theme.text} font-medium`}>
        Upload CSV or Excel file
      </p>

      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFile}
        className="mt-4"
      />

    </div>
  );
}

export default FileUploadBox;