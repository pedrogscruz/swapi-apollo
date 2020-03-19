import { useQuery, QueryHookOptions } from '@apollo/react-hooks';
import { allPersons, allPersonsVariables } from './types/allPersons';
import ALL_PERSONS from './query';

export default (options?: QueryHookOptions<allPersons, allPersonsVariables>) => useQuery<allPersons, allPersonsVariables>(ALL_PERSONS, options);