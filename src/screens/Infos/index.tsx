import React, { FC, useRef, useCallback, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import usePersonQuery from 'apollo/fetch/server/Person/usePersonQuery';

type ImageModalProps = RouteComponentProps<{ id: string }>;

const Infos: FC<ImageModalProps> = ({ match: { params: { id } } }) => {
	const { data } = usePersonQuery({ variables: { id }});
	if (!data) return <span>Loading</span>;
	if (!data.Person) return <span>Not found</span>;
	return (
		<div>
			<div>{data.Person.name}</div>
			<div>Vehicles: {data.Person.vehicles?.map(({ name, model }) => `${name} (${model})`).join(', ') || <b>None</b>}</div>
			<div>Species: {data.Person.species?.map(({ name, language }) => `${name} (${language})`).join(', ') || <b>None</b>}</div>
		</div>
	);
}

export default Infos;