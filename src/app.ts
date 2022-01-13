import express, { Request, Response } from 'express';
import { i18n } from './i18n';

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(i18n.init);

//endpoints
app.get('/', (req: Request, rsp: Response) => {
	rsp.send(rsp.__('hello'));
});

app.get('/user/:user', (req: Request, rsp: Response) => {
	const user = req.params['user'];
	rsp.send(rsp.__('hello {{name}}', { name: user }));
});

app.use('/plural', (req: Request, rsp: Response) => {
	rsp.send(rsp.__n('messages', 3));
});

app.listen(PORT, () => {
	console.log('server started at port: ' + PORT);
});
