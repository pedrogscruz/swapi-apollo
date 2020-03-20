import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import usePersonQuery from 'apollo/fetch/server/Person/usePersonQuery';
import { Loading, Text } from 'components';

type ImageModalProps = RouteComponentProps<{ id: string }>;

const Infos: FC<ImageModalProps> = ({ match: { params: { id } } }) => {
	const { data } = usePersonQuery({ variables: { id }});
	if (!data) return <Loading />;
	if (!data.Person) return <span>Not found</span>;
	return (
		<div>
			<Text>{data.Person.name}</Text>
			<Text>Vehicles: {data.Person.vehicles?.map(({ name, model }) => `${name} (${model})`).join(', ') || <b>None</b>}</Text>
			<Text>Species: {data.Person.species?.map(({ name, language }) => `${name} (${language})`).join(', ') || <b>None</b>}</Text>
		</div>
	);
}

export default Infos;