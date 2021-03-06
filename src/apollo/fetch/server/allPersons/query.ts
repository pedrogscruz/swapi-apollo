import { gql } from 'apollo-boost';

const allPerson = gql`
	query allPersons($skip: Int, $first: Int, $nameStartsWith: String, $gender: PERSON_GENDER, $birthYear: String) {
		allPersons(skip: $skip, first: $first, filter: {name_contains: $nameStartsWith, gender: $gender,  birthYear_starts_with: $birthYear }) {
			id
			name
			gender
			_filmsMeta {
				count
			}
		}
	}
`;

export default allPerson;