'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CasePage = () => {
  const [caseData, setCaseData] = useState(null);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [question, setQuestion] = useState('');
  const [interrogationResponse, setInterrogationResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const [showLanguagePopup, setShowLanguagePopup] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const generateCase = async () => {
    if (!selectedLanguage) return;

    try {
      const res = await fetch('http://127.0.0.1:8000/api/generate-case/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language: selectedLanguage }),
      });

      const data = await res.json();
      if (data.case_id) {
        fetchCaseDetails(data.case_id);
      }
    } catch (error) {
      console.error('Error generating case:', error);
    }
  };

  const fetchCaseDetails = async (caseId) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/case-details/${caseId}/`);
      const data = await res.json();
      setCaseData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching case details:', error);
      setLoading(false);
    }
  };

  const interrogateSuspect = async (suspectId) => {
    if (!question.trim()) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/interrogate-suspect/${suspectId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, language: selectedLanguage }),
      });
      const data = await res.json();
      setInterrogationResponse(data.response);
    } catch (error) {
      console.error('Error interrogating suspect:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Language Selection Popup */}
      {showLanguagePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-xl">
            <h2 className="text-xl font-bold text-yellow-400">🌍 Select Your Language</h2>
            <select
              className="mt-4 p-2 w-full bg-gray-700 rounded-md text-white"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
            <button
              className="mt-3 w-full bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition"
              onClick={() => {
                setShowLanguagePopup(false);
                generateCase();
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
        <Link href="/">
          <button className="text-white hover:text-gray-300 transition duration-300">← Back</button>
        </Link>
        <h2 className="text-xl font-semibold">🔎 Case Investigation</h2>
      </nav>

      {/* Loading State */}
      {loading ? (
        <div className="mt-10 text-center">
          <p className="text-gray-400">Loading case details...</p>
        </div>
      ) : (
        caseData && (
          <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
            {/* Case Details */}
            <h1 className="text-3xl font-bold text-yellow-400">{caseData.title}</h1>
            <p className="text-gray-300 mt-2 italic">{caseData.description}</p>

            {/* Crime Execution */}
            <h3 className="mt-6 text-xl font-semibold text-gray-200">🕵️‍♂️ Crime Execution</h3>
            <p className="text-gray-400">{caseData.crime_execution}</p>

            {/* Culprit Actions */}
            <h3 className="mt-6 text-xl font-semibold text-gray-200">🔍 Culprit Actions</h3>
            <p className="text-gray-400">{caseData.culprit_actions}</p>

            {/* Suspects */}
            <h3 className="mt-6 text-xl font-semibold text-gray-200">🚔 Suspects</h3>
            <div className="flex gap-3 mt-3">
              {caseData.suspects?.map((suspect) => (
                <button
                  key={suspect.id}
                  className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
                  onClick={() => setSelectedSuspect(suspect)}
                >
                  {suspect.name}
                </button>
              ))}
            </div>

            {/* Evidence */}
            <h3 className="mt-6 text-xl font-semibold text-gray-200">📝 Evidence</h3>
            <ul className="mt-2">
              {caseData.evidence?.map((ev) => (
                <li
                  key={ev.id}
                  className={`p-2 rounded-md ${ev.is_key_evidence ? 'text-red-400 font-bold' : 'text-gray-400'}`}
                >
                  {ev.description}
                </li>
              ))}
            </ul>
          </div>
        )
      )}

      {/* Interrogation Popup */}
      {selectedSuspect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-xl">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => {
                setSelectedSuspect(null);
                setQuestion('');
                setInterrogationResponse('');
              }}
            >
              ❌
            </button>
            <h2 className="text-lg font-bold text-yellow-400">🗣️ Interrogating {selectedSuspect.name}</h2>
            <p className="text-gray-400 italic">Alibi: {selectedSuspect.alibi}</p>

            <input
              type="text"
              placeholder="Ask a question..."
              className="mt-4 p-2 w-full bg-gray-700 rounded-md text-white placeholder-gray-400"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
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
                setQuestion('');
                setInterrogationResponse('');
              }}
            >
              ❌ cancle
            </button>
            {/* Response */}
            {interrogationResponse && (
              <p className="mt-4 text-yellow-300 text-sm">💬 {interrogationResponse}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CasePage;
