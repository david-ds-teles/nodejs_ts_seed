import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/', (req: Request, rsp: Response) => {
	rsp.send('hello from NodeJS Seed Project');
});

app.listen(PORT, () => {
	console.log('server started at port: ' + PORT);
});
