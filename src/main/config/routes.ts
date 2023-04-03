import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export const setupRoutes = (app: Express): void => {
	const router = Router();
	app.use(router);
	readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
		const { default: route } = await import(`../routes/${fileName}`);
		route(router);
	});
};
