import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Selector } from './Selector/Selector';

export class NavPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services: ['s1', 's2', 's3'],
		};
	}
	render() {
		return (
			<>
				<Navbar className="p-2" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">Tarik</Navbar.Brand>
				</Navbar>
				<Navbar bg="dark" variant="dark" className="text-light p-3 justify-content-between">
					<Selector services={this.state.services} className="d-flex flex-nowrap" />
					<div className="d-flex" />
					<div className="d-flex">other stuff</div>
				</Navbar>
			</>
		);
	}
}

//export default NavPanel;
