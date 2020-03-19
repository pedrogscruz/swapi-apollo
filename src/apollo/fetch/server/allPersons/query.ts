import { gql } from 'apollo-boost';

const allPerson = gql`
	query allPersons($skip: Int, $first: Int, $nameStartsWith: String, $gender: PERSON_GENDER, $birthYear: String) {
		allPersons(skip: $skip, first: $first, filter: {name_starts_with: $nameStartsWith, gender: $gender,  birthYear_starts_with: $birthYear }) {
			name
		}
	}
`;

export default allPerson;