"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import CaseDetails from "@/components/CaseDetails";
import SuspectInterrogation from "@/components/SuspectInterrogation";
import Loader from "@/components/Loader";

// types.ts
export interface Suspect {
  id: number;
  name: string;
  age: number;
  occupation: string;
  alibi: string;
}

interface Evidence {
  id: number;
  description: string;
  is_key_evidence: boolean;
}

interface CaseData {
  case_id: number;
  title: string;
  description: string;
  crime_execution: string;
  culprit_actions: string;
  suspects: Suspect[];
  evidence: Evidence[];
  is_guilty: boolean;
}

const CasePage = () => {
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [selectedSuspect, setSelectedSuspect] = useState<Suspect | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [interrogationResponse, setInterrogationResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [interrogationLoading, setInterrogationLoading] = useState<boolean>(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [languages, setLanguages] = useState<{ code: string; name: string }[]>([]);

  useEffect(() => {
    fetchLanguages();
  }, []);

  const fetchLanguages = async () => {
    try {
      const res = await fetch("https://libretranslate.com/languages");
      const data = await res.json();
      setLanguages(data);
      setSelectedLanguage(data[0]?.code || "en");
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  };

  const generateCase = async () => {
    if (!selectedLanguage) return;
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/generate-case/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language: selectedLanguage }),
      });

      const data = await res.json();
      if (data.case_id) {
        fetchCaseDetails(data.case_id);
      }
    } catch (error) {
      console.error("Error generating case:", error);
      setLoading(false);
    }
  };

  const fetchCaseDetails = async (caseId: number) => {
    setLoading(true);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/case-details/${caseId}/`);
      const data: CaseData = await res.json();
      setCaseData(data);
    } catch (error) {
      console.error("Error fetching case details:", error);
    } finally {
      setLoading(false);
    }
  };

  const interrogateSuspect = async (suspectId: number) => {
    if (!question.trim()) return;
    setInterrogationLoading(true);

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/interrogate-suspect/${suspectId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, language: selectedLanguage }),
      });
      const data = await res.json();
      setInterrogationResponse(data.response);
    } catch (error) {
      console.error("Error interrogating suspect:", error);
    } finally {
      setInterrogationLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white p-6">
      {showLanguagePopup && (
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setShowLanguagePopup={setShowLanguagePopup}
          generateCase={generateCase}
        />
      )}

      <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
        <Link href="/">
          <button className="text-white hover:text-gray-300 transition duration-300">
            ← Back
          </button>
        </Link>
        <h2 className="text-xl font-semibold">🔎 Case Investigation</h2>
      </nav>

      {loading ? (
        <Loader />
      ) : (
        caseData && (
          <CaseDetails
            caseData={caseData}
            setSelectedSuspect={(suspect: Suspect) => setSelectedSuspect(suspect)}
          />
        )
      )}

      {selectedSuspect && (
        <SuspectInterrogation
          selectedSuspect={selectedSuspect}
          setSelectedSuspect={() => setSelectedSuspect(null)}
          question={question}
          setQuestion={setQuestion}
          interrogationResponse={interrogationResponse}
          interrogateSuspect={interrogateSuspect}
          loading={interrogationLoading}
        />
      )}
    </div>
  );
};

export default CasePage;