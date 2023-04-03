import { Controller } from '../../presentation/contracts/controllers';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const { statusCode, data } = await controller.handle();
		res.status(statusCode).send(data);
	};
};
