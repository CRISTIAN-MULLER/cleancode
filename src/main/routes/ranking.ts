import { Router } from 'express';
import { makeLoadLastRankingController } from '../factories/load-last-ranking-controller';
import { adaptRoute } from '../adapters/express';

export default (router: Router): void => {
	router.get('/ranking/last', adaptRoute(makeLoadLastRankingController()));
};
