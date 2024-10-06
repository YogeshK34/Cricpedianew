export interface Bowlertype {
  id: number;               // Unique identifier for the player
  name: string;             // Player's name
  career: string;           // Career span (years)
  matches: number;          // Number of matches played
  innings: number;          // Number of innings bowled
  balls_bowled: number;     // Total balls bowled
  overs_bowled: number;     // Total overs bowled (in decimal form)
  maidens: number;          // Number of maiden overs bowled
  runs_conceded: number;    // Total runs conceded
  wickets: number;          // Total wickets taken
  best_bowling: string;     // Best bowling figures (wickets/runs)
  five_wicket_hauls: number; // Number of 5-wicket hauls
};
