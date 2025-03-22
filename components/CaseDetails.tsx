"use client";

import React from "react";
import { Suspect, CaseData } from "@/app/types";
import Image from "next/image";

interface Evidence {
  id: number;
  description: string;
  is_key_evidence: boolean;
}

interface CaseDetailsProps {
  caseData: CaseData;
  setSelectedSuspect: (suspect: Suspect) => void;
}

const CaseDetails: React.FC<CaseDetailsProps> = ({
  caseData,
  setSelectedSuspect,
}) => {
  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-yellow-400">{caseData.title}</h1>
      <p className="text-gray-300 mt-2 italic">{caseData.description}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">
        🕵️‍♂️ Crime Execution
      </h3>
      <p className="text-gray-400">{caseData.crime_execution}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">
        🔍 Culprit Actions
      </h3>
      <p className="text-gray-400">{caseData.culprit_actions}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">🚔 Suspects</h3>
      <div className="flex gap-3 mt-3 flex-wrap">
        {caseData.suspects?.map((suspect: Suspect) => (
          <button
            key={suspect.id}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition flex items-center gap-3"
            onClick={() => setSelectedSuspect(suspect)}
          >
            <div className="w-8 h-8 relative">
              <Image
                src={`https://api.dicebear.com/7.x/adventurer/png?seed=suspect-${suspect.id}`}
                alt={suspect.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <span className="text-white">{suspect.name}</span>
          </button>
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
