import React from "react";
import Loader from "@/components/Loader"; // Make sure you have a Loader component

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
  loading:boolean;
}

const SuspectInterrogation: React.FC<SuspectInterrogationProps> = ({
  selectedSuspect,
  setSelectedSuspect,
  question,
  setQuestion,
  interrogationResponse,
  interrogateSuspect,
  loading,
}) => {

  const handleInterrogate = async () => {
    if (!question.trim()) return;
    await interrogateSuspect(selectedSuspect.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl relative">
        <h2 className="text-lg font-bold text-yellow-400">
          🗣️ Interrogating {selectedSuspect.name}
        </h2>
        <p className="text-gray-400 italic">Alibi: {selectedSuspect.alibi}</p>

        <textarea
          placeholder="Ask a question..."
          className="mt-4 p-2 w-full bg-gray-700 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          disabled={loading}
        />

        <button
          className={`mt-3 w-full p-2 rounded-md transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={handleInterrogate}
          disabled={loading}
        >
          {loading ? "Interrogating..." : "Submit"}
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

        {loading && (
          <div className="flex justify-center mt-4">
            <Loader /> {/* ✅ Show animated loader while loading */}
          </div>
        )}

        {!loading && interrogationResponse && (
          <p className="mt-4 text-yellow-300 text-sm bg-gray-700 p-3 rounded-md">
            💬 {interrogationResponse}
          </p>
        )}
      </div>
    </div>
  );
};

export default SuspectInterrogation;
