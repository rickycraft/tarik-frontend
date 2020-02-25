import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class FilterInput extends Component {
	render() {
		return <Form inline>
        <FormControl type="text" placeholder="New filter" value={this.props.value} onChange={this.props.onChange} className="mr-2" />
        <Button variant="outline-success">Search</Button>
      </Form>;
	}
}
