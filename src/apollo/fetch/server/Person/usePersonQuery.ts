import { useQuery, QueryHookOptions } from '@apollo/react-hooks';
import { Person, PersonVariables } from './types/Person';
import PERSON from './query';

export default (options?: QueryHookOptions<Person, PersonVariables>) => useQuery<Person, PersonVariables>(PERSON, options);