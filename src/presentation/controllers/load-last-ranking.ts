import { LastRankingLoader } from '../../domain/usecases/last-loader';
import { Controller } from '../contracts/controllers';
import { HttpResponse, ok, serverError } from '../contracts/http';
import { RankingScoreViewModel } from '../view-models/ranking-store';

export class LoadLastRankingController implements Controller {
	constructor(private readonly lastRankingLoader: LastRankingLoader) {}
	async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
		try {
			const ranking = await this.lastRankingLoader.load();
			const viewModels = RankingScoreViewModel.mapCollection(ranking);
			return ok(viewModels);
		} catch (error: any) {
			return serverError(error);
		}
	}
}
