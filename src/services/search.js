// all fetch calls are here

export function getServices() {
	return ['serv 1', 'serv 2', 'serv 3', 'serv 4'];
}

export function getFilters() {
	return ['filt 1', 'filt 2', 'filt 3'];
}

export function result(filter, service, min, ago) {
	console.log(filter, service, min, ago);
	return [
		{
			packets: [
				{
					payload: 'Header: \nciao andata',
					timestamp: 10,
					quad: ['1.1.1.1', 80, '192.168.1.100', 80], // fromip fromport toip toport
				},
				{
					payload: 'Header: \nciao ritorno',
					timestamp: 11,
					quad: ['192.168.1.100', 80, '1.1.1.1', 80], // fromip fromport toip toport
				},
				{
					payload: 'Header: \nciao ritorno 2',
					timestamp: 110,
					quad: ['192.168.1.100', 80, '1.1.1.1', 80], // fromip fromport toip toport
				},
			],
			id: 1,
		},
		{
			packets: [
				{
					payload: 'Header: \nciao andata f2',
					timestamp: 10,
					quad: ['1.1.1.1', 80, '192.168.1.100', 80], // fromip fromport toip toport
				},
				{
					payload: 'Header: \nciao ritorno f2',
					timestamp: 11,
					quad: ['192.168.1.100', 80, '1.1.1.1', 80], // fromip fromport toip toport
				},
				{
					payload: 'Header: \nciao ritorno 2 f2',
					timestamp: 110,
					quad: ['192.168.1.100', 80, '1.1.1.1', 80], // fromip fromport toip toport
				},
			],
			id: 2,
		},
	];
}
