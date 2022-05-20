import React from 'react';

export const AnswerElement = (props) => {
	return (
		<>
			<p key={props.key}>{props.answer}</p>
		</>
	);
};
