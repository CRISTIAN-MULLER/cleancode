import { RankingScoreDTO } from '../dtos/ranking-score/ranking-score-dto';

export interface LoadLastRankingRepository {
	loadLastRanking: () => Promise<RankingScoreDTO[]>;
}
