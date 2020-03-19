import { gql } from 'apollo-boost';

const Person = gql`
	query Person($id: ID!) {
		Person(id: $id) {
			name
    	species {
        name
        language
      }
			vehicles {
        name
        model
      }
		}
	}
`;

export default Person;