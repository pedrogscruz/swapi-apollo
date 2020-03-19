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
  /**
   * The name of this person.
   */
  name: string;
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
