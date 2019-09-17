import fs from 'fs';

import { OutputTarget } from '../Analysis';

export class HtmlReport implements OutputTarget {
	print(report: string): void {
		const html = `
        <div>
            <h1>Analysis Report</h1>
            <div>${report}</div>
        </div>
        `;

		fs.writeFileSync('report.html', html);
	}
}
