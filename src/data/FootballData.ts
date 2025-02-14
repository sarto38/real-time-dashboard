export interface FootballData {
  filters: Filters;
  resultSet: ResultSet;
  matches: Match[];
}

export interface Filters {
  dateFrom: string;
  dateTo: string;
  permission: string;
}

export interface ResultSet {
  count: number;
  competitions: string;
  first: string;
  last: string;
  played: number;
}

export interface Match {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  referees: Referee[];
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface Score {
  winner: string;
  duration: string;
  fullTime: FullTime;
  halfTime: HalfTime;
}

export interface FullTime {
  home: number | null;
  away: number | null;
}

export interface HalfTime {
  home: number | null;
  away: number | null;
}

export interface Referee {
  id: number;
  name: string;
  type: string;
  nationality: string;
}
