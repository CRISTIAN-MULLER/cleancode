import { Controller } from '../../presentation/contracts/controllers';

import { LoadLastRankingController } from '../../presentation/controllers/load-last-ranking';
import { LastRankingLoaderService } from '../../application/services/last-loader/loader';
import { FakeRankingRepository } from '../../infra/repositories/fake-ranking';

export const makeLoadLastRankingController = (): Controller => {
	const repository = new FakeRankingRepository();
	const loader = new LastRankingLoaderService(repository);
	const controller = new LoadLastRankingController(loader);

	return controller;
};
