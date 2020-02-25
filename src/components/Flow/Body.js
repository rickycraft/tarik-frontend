import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Card } from 'react-bootstrap';

/*
    view [hex,http,text]
    body
*/

export class Body extends Component {
	render() {
		let body;
		if (this.props.view === '0') {
			body = this.props.body.split('\n').map(line => (
				<p key={line} className="mb-1">
					{line}
				</p>
			));
		} else if (this.props.view === '1') {
			body = (
				<SyntaxHighlighter language="http" style={xcode}>
					{this.props.body}
				</SyntaxHighlighter>
			);
		} else if (this.props.view === '2') {
			body = 'implement hex';
		}

		return <Card.Body className="p-2">{body}</Card.Body>;
	}
}
