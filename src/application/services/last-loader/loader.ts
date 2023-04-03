import { RankingScore } from '../../../domain/entities';
import { RankingUnavailableError } from '../../../domain/errors/ranking-unavailable';
import { LastRankingLoader } from '../../../domain/usecases/last-loader';
import { LoadLastRankingRepository } from '../../constracts/last-ranking-repository';

export class LastRankingLoaderService implements LastRankingLoader {
	constructor(
		private readonly loadLastRankingRepository: LoadLastRankingRepository
	) {}
	async load(): Promise<RankingScore[]> {
		if (new Date().getHours() > 22) {
			throw new RankingUnavailableError();
		}
		return this.loadLastRankingRepository.loadLastRanking();
	}
}
