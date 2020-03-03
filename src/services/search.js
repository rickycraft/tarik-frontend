// all fetch calls are here
// const delay = require('delay');
const url = 'http://localhost:4000';

const headerJson = { 'Content-Type': 'application/json' };

export async function getServices() {
	try {
		const body = await fetch(url + '/services').then(res => res.json());
		return body.services;
	} catch {
		return [];
	}
}

export async function getFilters() {
	try {
		const body = await fetch(url + '/filters').then(res => res.json());
		return body.filters;
	} catch {
		return [];
	}
}

export async function addFilter(filter) {
	if (filter !== '') {
		const res = await fetch(url + '/filters', {
			method: 'POST',
			headers: headerJson,
			body: JSON.stringify({ filter: filter }),
		});
		return res;
	}
}

export async function getFlows(filter, service, min, ago) {
	const body = {
		filter: filter,
		service: service,
		timeStart: min,
		timeEnd: ago,
	};
	const res = await fetch(url + '/flow', {
		method: 'POST',
		headers: headerJson,
		body: JSON.stringify(body),
	}).then(res => res.json());
	return res;
}
