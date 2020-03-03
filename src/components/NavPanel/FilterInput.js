import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { addFilter } from '../../services/search';

export class FilterInput extends Component {
	constructor(props) {
		super(props);
		this.state = { filter: '', isloading: false };
	}

	onChange = e => this.setState({ filter: e.target.value });

	insertFilter = async () => {
		if (this.state.filter !== '') {
			this.setState({ isloading: true });
			await addFilter(this.state.filter);
			this.setState({ filter: '', isloading: false });
		}
		this.props.updateFilters();
	};

	render() {
		return (
			<Form inline>
				<FormControl
					type="text"
					placeholder="add filter"
					value={this.state.filter}
					onChange={this.onChange}
					className="mr-2"
				/>
				<Button variant="success" onClick={this.insertFilter} disabled={this.state.isloading}>
					Search
				</Button>
			</Form>
		);
	}
}
