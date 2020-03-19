/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Person
// ====================================================

export interface Person_Person_species {
  __typename: "Species";
  /**
   * The name of this species.
   */
  name: string;
  /**
   * The language commonly spoken by this species.
   */
  language: string | null;
}

export interface Person_Person_vehicles {
  __typename: "Vehicle";
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
   */
  name: string;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
   */
  model: string | null;
}

export interface Person_Person {
  __typename: "Person";
  /**
   * The name of this person.
   */
  name: string;
  species: Person_Person_species[] | null;
  vehicles: Person_Person_vehicles[] | null;
}

export interface Person {
  Person: Person_Person | null;
}

export interface PersonVariables {
  id: string;
}
