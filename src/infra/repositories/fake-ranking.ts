import { LoadLastRankingRepository } from '../../application/constracts/last-ranking-repository';
import { RankingScoreDTO } from '../../application/dtos/ranking-score/ranking-score-dto';
import { ranking } from '../data-sources/ranking';

export class FakeRankingRepository implements LoadLastRankingRepository {
	async loadLastRanking(): Promise<RankingScoreDTO[]> {
		return ranking.map((ranking) => ({
			player: ranking.user,
			score: ranking.score,
			matchDate: new Date(ranking.date),
			heroes: ranking.heroes
		}));
	}
}
