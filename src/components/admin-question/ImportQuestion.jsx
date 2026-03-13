import React, { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";

import FileUploadBox from "./FileUploadBox";
import QuestionPreviewTable from "./QuestionPreviewTable";
import ImportInstructions from "./ImportInstructions";

function ImportQuestion({ theme }) {

  const [questions, setQuestions] = useState([]);

  const handleFileUpload = (file) => {

    if (file.name.endsWith(".csv")) {

      Papa.parse(file, {
        header: true,
        complete: (result) => {
          setQuestions(result.data);
        }
      });

    } else {

      const reader = new FileReader();

      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, {
          type: "binary"
        });

        const sheet =
          workbook.Sheets[workbook.SheetNames[0]];

        const data =
          XLSX.utils.sheet_to_json(sheet);

        setQuestions(data);
      };

      reader.readAsBinaryString(file);
    }

  };

  const handleImport = () => {
    console.log("Send to backend", questions);
  };

  return (
    <div className="space-y-6">

      <ImportInstructions theme={theme} />

      <FileUploadBox
        onFileUpload={handleFileUpload}
        theme={theme}
      />

      {questions.length > 0 && (
        <>
          <QuestionPreviewTable
            questions={questions}
            theme={theme}
          />

          <button
            onClick={handleImport}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Import Questions
          </button>
        </>
      )}

    </div>
  );
}

export default ImportQuestion;