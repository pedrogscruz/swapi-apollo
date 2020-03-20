import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { allPersons_allPersons } from 'apollo/fetch/server/allPersons//types/allPersons';

const Wrapper = styled.div<{last: boolean}>`
	border-bottom: ${props => !props.last && '5px white solid'};
	margin-bottom: 7px;
	padding: 20px;
`;

const Name = styled.div`
	font-family: "News Cycle", sans-serif;
	color: #FFD700;
	font-weight: 800;
	font-size: 20px;
	letter-spacing: .2em;
`;

const InfoWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`

const Info = styled.div`
	font-family: "News Cycle", sans-serif;
	color: #FFD700;
	font-weight: 660;
	font-size: 17px;
	text-align: right;
`;

const Item: FC<{ last: boolean, person: allPersons_allPersons }> = ({ last, person: { id, name, gender, _filmsMeta: { count } } }) => {
	return (
		<Wrapper last={last}>
			<Link to={`/${id}`} style={{textDecoration: 'none'}}><Name>{name}</Name></Link>
			<InfoWrapper>
				<Info>Gender: {gender}</Info>
				<Info>Movies: {count}</Info>
			</InfoWrapper>
		</Wrapper>
	)
};

export default Item;