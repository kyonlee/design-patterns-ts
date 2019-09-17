import { MatchData } from './MatchData';
import { AvgScoreAnalysis } from './analyzers/AvgScoreAnalysis';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Analysis {
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	static avgScoreConsole(team: string): Analysis {
		return new Analysis(new AvgScoreAnalysis(team), new ConsoleReport());
	}

	static avgScoreHtml(team: string): Analysis {
		return new Analysis(new AvgScoreAnalysis(team), new HtmlReport());
	}

	static winsConsole(team: string): Analysis {
		return new Analysis(new WinsAnalysis(team), new ConsoleReport());
	}

	static winsHtml(team: string): Analysis {
		return new Analysis(new WinsAnalysis(team), new HtmlReport());
	}

	buildAndPrintReport(matches: MatchData[]): void {
		const report = this.analyzer.run(matches);

		this.outputTarget.print(report);
	}
}
