/* tslint:disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export interface Athlete {
  name: string;
  age: number;
  sports: ("football" | "basketball")[];
}
export interface League {
  cities: {
    [k: string]: Team;
  };
}
export interface Team {
  name: string;
  sport: "football" | "basketball";
  athletes: Athlete[];
}