import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Card } from 'react-bootstrap';

/*
    style [hex,http,text]
    body
*/

export class Body extends Component {
	render() {
		let body;
		if (this.props.language === 'text') {
			body = this.props.body.split('\n').map(line => (
				<p key={line} className="mb-1">
					{line}
				</p>
			));
		} else if (this.props.language === 'hex') {
			body = 'implement hex';
		} else
			body = (
				<SyntaxHighlighter language={this.props.language} style={xcode}>
					{this.props.body}
				</SyntaxHighlighter>
			);

		return <Card.Body className="p-2">{body}</Card.Body>;
	}
}
