import React from "react";
import { Suspect, CaseData } from "@/app/types"; 
import { User2 } from "lucide-react";


interface Evidence {
  id: number;
  description: string;
  is_key_evidence: boolean;
}


interface CaseDetailsProps {
  caseData: CaseData;
  setSelectedSuspect: (suspect: Suspect) => void;
}

const CaseDetails: React.FC<CaseDetailsProps> = ({ caseData, setSelectedSuspect }) => {
  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-yellow-400">{caseData.title}</h1>
      <p className="text-gray-300 mt-2 italic">{caseData.description}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">🕵️‍♂️ Crime Execution</h3>
      <p className="text-gray-400">{caseData.crime_execution}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">🔍 Culprit Actions</h3>
      <p className="text-gray-400">{caseData.culprit_actions}</p>

      <h3 className="mt-6 text-xl font-semibold text-gray-200">🚔 Suspects</h3>
      <div className="flex gap-3 mt-3 flex-1 ">
        {caseData.suspects?.map((suspect: Suspect) => (
          <button
            key={suspect.id}
            className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition flex gap-3 flex-1 items-center justify-center"
            onClick={() => setSelectedSuspect(suspect)}
          >
            <User2/>
            {suspect.name}
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
