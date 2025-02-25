import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://localhost:8000/api/cases/");
  const data = await response.json();
  return NextResponse.json(data);
}

const fetchCases = async () => {
    const { data } = await axios.get("/api/cases");
    return data;
  };
  