import { MatchReader } from './MatchReader';
import { Analysis } from './Analysis';

const matchesData = MatchReader.csvMatchReader('football.csv');
const analysis = Analysis.avgScoreConsole('Liverpool');

matchesData.load();
analysis.buildAndPrintReport(matchesData.matches);
