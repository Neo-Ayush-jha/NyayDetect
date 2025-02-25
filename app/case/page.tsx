"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

const fetchCases = async () => {
  const { data } = await axios.get("http://localhost:8000/api/cases/");
  return data;
};

export default function CaseList() {
  const { data, isLoading, error } = useQuery({ queryKey: ["cases"], queryFn: fetchCases });

  if (isLoading) return <p>Loading cases...</p>;
  if (error) return <p>Error fetching cases</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Mystery Cases</h2>
      <ul>
        {data.map((caseItem: { id: number; title: string }) => (
          <li key={caseItem.id} className="mt-2">
            <Link href={`/case/${caseItem.id}`} className="text-blue-400">
              {caseItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


