// all fetch calls are here
// const delay = require('delay');

export async function getServices() {
	return ['serv 1', 'serv 2', 'serv 3', 'serv 4'];
}

export async function getFilters() {
	return ['filt 1', 'filt 2', 'filt 3'];
}

export async function addFilter(filter) {
	if (filter !== '') console.log('added filter', filter);
	return null;
}

export async function getFlows(filter, service, min, ago) {
	console.log(filter, service, min, ago);
	return [
		{
			id: 1,
			ip_src: '1.1.1.1',
			p_src: 80,
			ip_dest: '192.168.1.100',
			p_dest: 80,
			packets: [
				{
					content: 'Header: \nciao andata',
					id: 10,
					timestamp: 10,
					src: '1.1.1.1',
				},
				{
					content: 'Header: \nciao ritorno',
					id: 11,
					timestamp: 11,
					src: '192.168.1.100',
				},
				{
					content: 'Header: \nciao ritorno 2',
					id: 12,
					timestamp: 12,
					src: '1.1.1.1',
				},
			],
		},
	];
}
/* 
type Flow struct {
	Id int              `json:"id"`
	IpSrc string        `json:"ip_src"`
	PSrc int            `json:"p_src"`
	IpDest string       `json:"ip_dest"`
	PDest int           `json:"p_dest"`
	Packets []Packet    `json:"packets"`
}

type Packet struct {
	Id int              `json:"id"`
	Src string          `json:"src"`
	Timestamp float64   `json:"timestamp"`
	Content []byte      `json:"content"`
}
*/
