const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/', express.static('build'));

app.post('/flow', (req, res) => {
	console.log(req.body);
	res.json(flows);
});

app.get('/services', (req, res) => {
	res.json({
		services: ['s1', 's2', 's3', 's4'],
	});
});

app.get('/filters', (req, res) => {
	res.json({
		filters: ['f1', 'f2', 'f3', 'f4'],
	});
});

app.post('/filters', (req, res) => {
	console.log(req.body.filter);
	res.status(200).send();
});

const flows = [
	{
		id: 1,
		ip_src: '1.1.1.1',
		p_src: 80,
		ip_dest: '192.168.1.100',
		p_dest: 80,
		packets: [
			{
				content: 'SGVhZGVyOiBcbmNpYW8gYW5kYXRh',
				id: 10,
				timestamp: 10,
				src: '1.1.1.1',
			},
			{
				content: 'SGVhZGVyOiBcbmNpYW8gcml0b3Jubw==',
				id: 11,
				timestamp: 11,
				src: '192.168.1.100',
			},
			{
				content:
					'SFRUUC8xLjEgNDAwIEJhZCBSZXF1ZXN0CkRhdGU6IFN1biwgMTggT2N0IDIwMTIgMTA6MzY6MjAgR01UClNlcnZlcjogQXBhY2hlLzIuMi4xNCAoV2luMzIpCkNvbnRlbnQtTGVuZ3RoOiAyMzAKQ29udGVudC1UeXBlOiB0ZXh0L2h0bWw7IGNoYXJzZXQ9aXNvLTg4NTktMQpDb25uZWN0aW9uOiBDbG9zZWQ=',
				id: 12,
				timestamp: 12,
				src: '1.1.1.1',
			},
			{
				content:
					'SFRUUC8xLjEgMjAwIE9LCkRhdGU6IFN1biwgMTAgT2N0IDIwMTAgMjM6MjY6MDcgR01UClNlcnZlcjogQXBhY2hlLzIuMi44IChVYnVudHUpIG1vZF9zc2wvMi4yLjggT3BlblNTTC8wLjkuOGcKTGFzdC1Nb2RpZmllZDogU3VuLCAyNiBTZXAgMjAxMCAyMjowNDozNSBHTVQKRVRhZzogIjQ1YjYtODM0LTQ5MTMwY2MxMTgyYzAiCkFjY2VwdC1SYW5nZXM6IGJ5dGVzCkNvbnRlbnQtTGVuZ3RoOiAxMgpDb25uZWN0aW9uOiBjbG9zZQpDb250ZW50LVR5cGU6IHRleHQvaHRtbAoKSGVsbG8gd29ybGQh',
				id: 15,
				timestamp: 170,
				src: '192.168.1.100',
			},
		],
	},
	{
		id: 2,
		ip_src: '1.1.1.1',
		p_src: 80,
		ip_dest: '192.168.1.100',
		p_dest: 80,
		packets: [
			{
				content: 'YW5kYXRhIDI=',
				id: 10,
				timestamp: 10,
				src: '1.1.1.1',
			},
			{
				content: 'SGVhZGVyOiBcbmNpYW8gcml0b3Jubw==',
				id: 11,
				timestamp: 11,
				src: '192.168.1.100',
			},
			{
				content:
					'SFRUUC8xLjEgNDAwIEJhZCBSZXF1ZXN0CkRhdGU6IFN1biwgMTggT2N0IDIwMTIgMTA6MzY6MjAgR01UClNlcnZlcjogQXBhY2hlLzIuMi4xNCAoV2luMzIpCkNvbnRlbnQtTGVuZ3RoOiAyMzAKQ29udGVudC1UeXBlOiB0ZXh0L2h0bWw7IGNoYXJzZXQ9aXNvLTg4NTktMQpDb25uZWN0aW9uOiBDbG9zZWQ=',
				id: 12,
				timestamp: 12,
				src: '1.1.1.1',
			},
			{
				content:
					'SFRUUC8xLjEgMjAwIE9LCkRhdGU6IFN1biwgMTAgT2N0IDIwMTAgMjM6MjY6MDcgR01UClNlcnZlcjogQXBhY2hlLzIuMi44IChVYnVudHUpIG1vZF9zc2wvMi4yLjggT3BlblNTTC8wLjkuOGcKTGFzdC1Nb2RpZmllZDogU3VuLCAyNiBTZXAgMjAxMCAyMjowNDozNSBHTVQKRVRhZzogIjQ1YjYtODM0LTQ5MTMwY2MxMTgyYzAiCkFjY2VwdC1SYW5nZXM6IGJ5dGVzCkNvbnRlbnQtTGVuZ3RoOiAxMgpDb25uZWN0aW9uOiBjbG9zZQpDb250ZW50LVR5cGU6IHRleHQvaHRtbAoKSGVsbG8gd29ybGQh',
				id: 15,
				timestamp: 170,
				src: '192.168.1.100',
			},
		],
	},
];

app.listen(port);
