import React, { FC, useRef, useCallback, useEffect } from 'react';
import { allPersonsVariables } from 'apollo/fetch/server/allPersons//types/allPersons';

import useAllPersonsQuery from 'apollo/fetch/server/allPersons/useAllPersonsQuery';
import Loading from 'components/Loading';
import { Header, Footer, ScrollWrapper, Item } from './components';
import { Text, Input, Select, Button } from 'components';

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

	if (!data) return <Loading />;
	return (
		<div>
			<Header>
			<Text>
				Name:
				<Input type='text' onChange={(e) => changeEvent('nameStartsWith', e.target.value)} />
			</Text>
			<Text>
				Gender:
				<Select onChange={(e) => changeEvent('gender', e.target.value)}>
					<option value=''>any</option>
					<option value='UNKNOWN'>unknown</option>
					<option value='MALE'>male</option>
					<option value='FEMALE'>female</option>
					<option value='HERMAPHRODITE'>hermaphrodite</option>
				</Select>
			</Text>
			<Text>
				Birth Year:
				<Input type='number' onChange={(e) => changeEvent('birthYear', e.target.value)} />
			</Text>
			</Header>
			<ScrollWrapper>
				{data.allPersons.map((person, index) => <Item person={person} last={index + 1 === data.allPersons.length} />)}
			</ScrollWrapper>
			<Footer>
				<Button disabled={loading || data.allPersons.length % 10 !== 0} onClick={getMorePersons}>fetch</Button>
			</Footer>
		</div>
	);
}

export default Home;