import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class NavPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<Navbar className="p-2" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">Tarik</Navbar.Brand>
				</Navbar>
				<Navbar bg="dark" variant="dark"></Navbar>
			</>
		);
	}
}

//export default NavPanel;
