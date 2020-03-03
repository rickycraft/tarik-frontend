import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Card } from 'react-bootstrap';

export class Body extends Component {
	base64ToHex(str) {
		const raw = atob(str);
		let result = '';
		for (let i = 0; i < raw.length; i++) {
			const hex = raw.charCodeAt(i).toString(16);
			result += hex.length === 2 ? hex : '0' + hex;
		}
		return result.toUpperCase();
	}

	render() {
		let body;
		if (this.props.view === '0') {
			body = atob(this.props.body)
				.split('\\n')
				.map(line => (
					<p key={line} className="mb-1">
						{line}
					</p>
				));
		} else if (this.props.view === '1') {
			body = (
				<SyntaxHighlighter language="http" style={xcode}>
					{atob(this.props.body)}
				</SyntaxHighlighter>
			);
		} else if (this.props.view === '2') {
			body = this.base64ToHex(this.props.body);
		}

		return <Card.Body className="p-2">{body}</Card.Body>;
	}
}
