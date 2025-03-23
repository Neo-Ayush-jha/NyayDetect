"use client";

import React, { useState } from "react";
import { Suspect, CaseData } from "@/app/types";
import Image from "next/image";
import { toast } from "react-hot-toast";

interface Evidence {
  id: number;
  description: string;
  is_key_evidence: boolean;
}

interface CaseDetailsProps {
  caseData: CaseData;
  setSelectedSuspect: (suspect: Suspect) => void;
  // fetchCaseDetails: () => Promise<void>;
}

const CaseDetails: React.FC<CaseDetailsProps> = ({
  caseData,
  setSelectedSuspect,
  // fetchCaseDetails,
}) => {
  const [showHelp, setShowHelp] = useState(false);
  const [solving, setSolving] = useState(false);

  const solveCase = async (suspectId: number) => {
    setSolving(true);

    try {
      const res = await fetch(
        `https://mystery-game.onrender.com/api/solve_case/${caseData.case_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ suspect_id: suspectId }), // Passing suspect ID in request body
        }
      );

      const data = await res.json();
      // await fetchCaseDetails();
      if (data.is_solved) {
        toast.success(`🎉 Correct! You found the culprit: ${data.culprit}`);
      } else if (data.message === "This case is already solved.") {
        toast.success("ℹ️ This case is already solved.");
      } else {
        toast.error("❌ Wrong guess! Try again.");
      }
    } catch (error) {
      console.error("Error solving case:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSolving(false);
    }
  };

  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-yellow-400">{caseData.title}</h1>
      <p className="text-gray-300 mt-2 italic">{caseData.description}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">
        🕵️‍♂️ Crime Execution
      </h3>
      <p className="text-gray-400">{caseData.crime_execution}</p>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"
        onClick={() => setShowHelp(true)}
      >
        🆘 Help
      </button>

      {showHelp && (
        <>
          <h3 className="mt-6 text-xl font-semibold text-gray-200">
            🔍 Culprit Actions
          </h3>
          <p className="text-gray-400">{caseData.culprit_actions}</p>
        </>
      )}

      <h3 className="mt-6 text-xl font-semibold text-gray-200">🚔 Suspects</h3>

      <div className="flex gap-3 mt-3 flex-wrap">
        {caseData.suspects?.map((suspect: Suspect) => (
          <div
            key={suspect.id}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition flex flex-col items-center gap-3 p-4"
          >
            <div className="w-16 h-16 relative">
              <Image
                src={`https://api.dicebear.com/7.x/adventurer/png?seed=suspect-${suspect.id}`}
                alt={suspect.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <span className="text-white text-lg">{suspect.name}</span>
            {/* 
            {caseData.is_solved ? (
              <span className="text-green-400 font-bold">
                ✅ This case is solved
              </span>
            ) : (
              
            )} */}
            <>
              <button
                className="bg-blue-500 px-4 py-2 rounded-md hover:bg-gray-600 transition flex items-center gap-3"
                onClick={() => setSelectedSuspect(suspect)}
              >
                <span className="text-white">Interrogation</span>
              </button>
              <button
                className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-md"
                onClick={() => solveCase(suspect.id)}
                disabled={solving}
              >
                {solving ? "Checking..." : "🚔 Guess Guilty"}
              </button>
            </>
          </div>
        ))}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-200">📝 Evidence</h3>
      <ul className="mt-2">
        {caseData.evidence?.map((ev: Evidence) => (
          <li
            key={ev.id}
            className={`p-2 rounded-md ${
              ev.is_key_evidence ? "text-red-400 font-bold" : "text-gray-400"
            }`}
          >
            {ev.description}
          </li>
        ))}
      </ul>

      {caseData.is_guilty && (
        <div className="mt-6 p-4 bg-red-700 text-white font-bold rounded-lg">
          🔥 The guilty party has been identified!
        </div>
      )}
    </div>
  );
};

export default CaseDetails;
