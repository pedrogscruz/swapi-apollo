import React, { FC, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAllPersonsQuery from 'apollo/fetch/server/allPersons/useAllPersonsQuery';

import { allPersonsVariables } from 'apollo/fetch/server/allPersons//types/allPersons';

const Home: FC = () => {
	const newVariables = useRef<allPersonsVariables>({});
	const { loading, data, variables, refetch, fetchMore } = useAllPersonsQuery({ variables: { first: 10 } });

	const changeEvent = useCallback((field: keyof allPersonsVariables, value) => {
		newVariables.current[field] = value || undefined; // some types doens`t accept an empty string
		!loading && refetch(newVariables.current);
	}, [loading]);

	const getMorePersons = useCallback(() => {
		if (!data) return;
		fetchMore({
			variables: { ...newVariables.current, skip: data.allPersons.length },
			updateQuery: (previousResult, { fetchMoreResult }) => ({
				allPersons: [
					...previousResult.allPersons,
					...fetchMoreResult?.allPersons || []
				],
				__typename: "Query"
			})
		});
	}, [data?.allPersons.length]);

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
			{data.allPersons.map(({ id, name, gender, _filmsMeta: { count } }) => (
				<div key={id}><Link to={`/${id}`}>{name}</Link> - {gender} / {id}</div>
			))}
			<button disabled={loading || data.allPersons.length % 10 !== 0} onClick={getMorePersons}>fetch</button>
		</div>
	);
}

export default Home;