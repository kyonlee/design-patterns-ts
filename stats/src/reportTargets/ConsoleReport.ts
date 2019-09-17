import { OutputTarget } from '../Analysis';

export class ConsoleReport implements OutputTarget {
	print(report: string): void {
		console.log(report);
	}
}
