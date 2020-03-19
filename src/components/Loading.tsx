import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.section`
	font-family: "News Cycle", sans-serif;
	color: #00BFFF;
	font-weight: 400;
	letter-spacing: .1em;
`;

const Placholder = () => (
	<Wrapper>
		<Content>
			A Long Time Ago, in a galaxy far,<br /> far away ...  
		</Content>
	</Wrapper>
);

const Loading:FC<{loading: Boolean}> = ({ loading, children }) => (
	<>
		<Placholder  />
		{!loading && children}
	</>
);

export default Placholder;