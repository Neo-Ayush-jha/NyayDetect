import React from "react";

interface Suspect {
  id: number;
  name: string;
  alibi: string;
}

interface SuspectInterrogationProps {
  selectedSuspect: Suspect;
  setSelectedSuspect: (suspect: Suspect | null) => void;
  question: string;
  setQuestion: (question: string) => void;
  interrogationResponse: string;
  interrogateSuspect: (suspectId: number) => void;
}

const SuspectInterrogation: React.FC<SuspectInterrogationProps> = ({
  selectedSuspect,
  setSelectedSuspect,
  question,
  setQuestion,
  interrogationResponse,
  interrogateSuspect,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-xl relative">
        <h2 className="text-lg font-bold text-yellow-400">
          🗣️ Interrogating {selectedSuspect.name}
        </h2>
        <p className="text-gray-400 italic">Alibi: {selectedSuspect.alibi}</p>

        <textarea
          placeholder="Ask a question..."
          className="mt-4 p-2 w-full bg-gray-700 rounded-md text-white placeholder-gray-400 resize-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4} // You can adjust the number of rows as needed
        />

        <button
          className="mt-3 w-full bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => interrogateSuspect(selectedSuspect.id)}
        >
          Submit
        </button>
        <button
          className="mt-3 w-full bg-red-500 p-2 rounded-md hover:bg-red-600 transition"
          onClick={() => {
            setSelectedSuspect(null);
            setQuestion("");
          }}
        >
          ❌ Cancel
        </button>

        {interrogationResponse && (
          <p className="mt-4 text-yellow-300 text-sm">
            💬 {interrogationResponse}
          </p>
        )}
      </div>
    </div>
  );
};

export default SuspectInterrogation;
