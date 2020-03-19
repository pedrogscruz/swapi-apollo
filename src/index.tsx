import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
	@import url(https://fonts.googleapis.com/css?family=News+Cycle:400,700);
	body {
		margin: 0;
		background-color: #000;
	}
`;

ReactDOM.render((
	<>
		<GlobalStyle />
		<App />
	</>
), document.getElementById('root'));