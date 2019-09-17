import { Analyzer } from '../Analysis';
import { MatchData } from '../MatchData';

export class AvgScoreAnalysis implements Analyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		const scores: number[] = [];

		matches.forEach(match => {
			if (match[1] === this.team) {
				scores.push(match[3]);
			}
			if (match[2] === this.team) {
				scores.push(match[4]);
			}
		});

		const avgScore = this.average(scores);

		return `Team ${this.team} had an average score of ${avgScore} this season.`;
	}

	average(scores: number[]): number {
		const sum = scores.reduce((a: number, b: number) => a + b);

		return sum / scores.length;
	}
}
