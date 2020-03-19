/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PERSON_GENDER } from "./../../../../graphql/types";

// ====================================================
// GraphQL query operation: allPersons
// ====================================================

export interface allPersons_allPersons {
  __typename: "Person";
  id: string;
  /**
   * The name of this person.
   */
  name: string;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin
   * is a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: string | null;
}

export interface allPersons {
  allPersons: allPersons_allPersons[];
}

export interface allPersonsVariables {
  skip?: number | null;
  first?: number | null;
  nameStartsWith?: string | null;
  gender?: PERSON_GENDER | null;
  birthYear?: string | null;
}
