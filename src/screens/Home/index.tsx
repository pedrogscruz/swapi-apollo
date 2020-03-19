import React, { FC, useRef, useCallback, useEffect } from 'react';
import useAllPersonsQuery from 'apollo/fetch/server/allPersons/useAllPersonsQuery';
import { allPersonsVariables } from 'apollo/fetch/server/allPersons//types/allPersons';


const Home: FC = () => {
	const newVariables = useRef<allPersonsVariables>({});
	const { loading, error, data, refetch, variables } = useAllPersonsQuery({ variables: { first: 10 } });

	const changeEvent = useCallback((field: keyof allPersonsVariables, value) => {
		newVariables.current[field] = value;
		console.log('loading', loading)
		!loading && refetch(newVariables.current);
	}, [loading]);

	const stringnifyFilters = useCallback(({ nameStartsWith, gender, birthYear }: allPersonsVariables) => (
		JSON.stringify({ nameStartsWith, gender, birthYear })
	), []);

	useEffect(() => {
		if (!loading && stringnifyFilters(newVariables.current) !== stringnifyFilters(variables))
			refetch(newVariables.current);
	}, [loading]);

	if (!data) return <span>Loading</span>;
	return (
		<div>
			<input type='text' onChange={(e) => changeEvent('nameStartsWith', e.target.value)} />
			<select onChange={(e) => changeEvent('gender', e.target.value)}>
				<option value=''>no filter</option>
				<option value='UNKNOWN'>unknown</option>
				<option value='MALE'>male</option>
				<option value='FEMALE'>female</option>
				<option value='HERMAPHRODITE'>hermaphrodite</option>
			</select>
			<input type='number' onChange={(e) => changeEvent('birthYear', e.target.value)} />
			{data.allPersons.map((item) => (
				<div key={item.name}>{item.name} - {item.birthYear}</div>
			))}
		</div>
	);
}

export default Home;