export interface Suspect {
    id: number;
    name: string;
    age: number;
    occupation: string;
    alibi: string;
  }
  
  export interface Evidence {
    id: number;
    description: string;
    is_key_evidence: boolean;
  }
  
  export interface CaseData {
    case_id: number;
    title: string;
    description: string;
    crime_execution: string;
    culprit_actions: string;
    suspects: Suspect[];
    evidence: Evidence[];
    is_guilty: boolean;
  }
  