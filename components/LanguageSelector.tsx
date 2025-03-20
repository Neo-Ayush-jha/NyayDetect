import { useEffect } from "react";

interface Language {
  code: string;
  name: string;
}

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  setShowLanguagePopup: (value: boolean) => void;
  generateCase: () => void;
}

const LanguageSelector = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
  setShowLanguagePopup,
  generateCase,
}: LanguageSelectorProps) => {
  useEffect(() => {
    if (languages.length === 0) {
      fetchLanguages();
    }
  }, []);

  const fetchLanguages = async () => {
    try {
      const res = await fetch("https://libretranslate.com/languages");
      const data: Language[] = await res.json();
      setSelectedLanguage(data[0]?.code || "en");
    } catch (error) {
      console.error("Error fetching languages:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-bold text-yellow-400">🌍 Select Your Language</h2>
        <select
          className="mt-4 p-2 w-full bg-gray-700 rounded-md text-white"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang: Language) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
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
  );
};

export default LanguageSelector;
