import React, { useState } from "react";
import FormInput from "./FormInput";
import QuestionSelector from "./QuestionSelector";
import RandomizationToggle from "./RandomizationToggle";
import TestPreviewModal from "./TestPreviewModal";

function CreateTestForm({ theme }) {

  const [form, setForm] = useState({
    title: "",
    subject: "",
    duration: "",
    marks: "",
    negative: "",
    start: "",
    end: ""
  });

  const [randomize, setRandomize] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  const questions = [
    { id: 1, text: "What is JVM?" },
    { id: 2, text: "Explain Spring Boot." },
    { id: 3, text: "What is React Virtual DOM?" }
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">

      {/* Basic Info */}

      <div className="grid md:grid-cols-2 gap-6">

        <FormInput
          label="Test Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          theme={theme}
        />

        <FormInput
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          theme={theme}
        />

        <FormInput
          label="Duration (minutes)"
          name="duration"
          type="number"
          value={form.duration}
          onChange={handleChange}
          theme={theme}
        />

        <FormInput
          label="Total Marks"
          name="marks"
          type="number"
          value={form.marks}
          onChange={handleChange}
          theme={theme}
        />

        <FormInput
          label="Negative Marking"
          name="negative"
          type="number"
          value={form.negative}
          onChange={handleChange}
          theme={theme}
        />

        <FormInput
          label="Start Date/Time"
          name="start"
          type="datetime-local"
          value={form.start}
          onChange={handleChange}
          theme={theme}
        />

        <FormInput
          label="End Date/Time"
          name="end"
          type="datetime-local"
          value={form.end}
          onChange={handleChange}
          theme={theme}
        />

      </div>

      <RandomizationToggle
        enabled={randomize}
        setEnabled={setRandomize}
        theme={theme}
      />

      <QuestionSelector
        questions={questions}
        selected={selectedQuestions}
        setSelected={setSelectedQuestions}
        theme={theme}
      />

      {/* Actions */}

      <div className="flex gap-4">

        <button
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          Create Test
        </button>

        <button
          onClick={() => setPreviewOpen(true)}
          className="border px-5 py-2 rounded-lg"
        >
          Preview Test
        </button>

      </div>

      <TestPreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        test={{
          ...form,
          questions: selectedQuestions
        }}
        theme={theme}
      />

    </div>
  );
}

export default CreateTestForm;