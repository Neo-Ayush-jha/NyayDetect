'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

const fetchCaseDetails = async (id: string) => {
  const { data } = await axios.get(`http://localhost:8000/api/cases/${id}/`);
  return data;
};

export default function CaseDetails() {
  const params = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["case", params.id],
    queryFn: () => fetchCaseDetails(params.id as string),
  });

  if (isLoading) return <p>Loading case details...</p>;
  if (error) return <p>Error loading case</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold">{data.title}</h2>
      <p className="mt-2">{data.description}</p>
    </div>
  );
}
