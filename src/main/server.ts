import { setupRoutes } from './config/routes';

import express from 'express';

const app = express();
setupRoutes(app);

app.use(express.json());

app.listen(3000, () => {
	console.log('listening at http://localhost:3000');
});
