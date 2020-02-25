import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Selector } from './Selector/Selector';
import { FilterInput } from './FilterInput';
import { Commands } from './Commands';

export class NavPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: '',
		};
	}

	addFilter = () => {
		alert('added filter ' + this.state.filter);
	};
	updateFilter = e => this.setState({ filter: e.target.value });

	render() {
		return (
			<>
				<Navbar className="p-2" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">Tarik</Navbar.Brand>
				</Navbar>
				<Navbar bg="dark" variant="dark" className="text-light p-2 justify-content-between">
					<Selector search className="d-flex flex-nowrap" />
					<Commands checked={this.props.view} onClick={this.props.updateView} />
					<FilterInput
						className="d-flex"
						onChange={this.updateFilter}
						value={this.state.filter}
						addFilter={this.addFilter}
					/>
				</Navbar>
			</>
		);
	}
}

//export default NavPanel;
