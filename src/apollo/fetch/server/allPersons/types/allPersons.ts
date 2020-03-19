/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PERSON_GENDER } from "./../../../../graphql/types";

// ====================================================
// GraphQL query operation: allPersons
// ====================================================

export interface allPersons_allPersons__filmsMeta {
  __typename: "_QueryMeta";
  count: number;
}

export interface allPersons_allPersons {
  __typename: "Person";
  id: string;
  /**
   * The name of this person.
   */
  name: string;
  /**
   *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
   */
  gender: PERSON_GENDER | null;
  /**
   * Meta information about the query.
   */
  _filmsMeta: allPersons_allPersons__filmsMeta;
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
