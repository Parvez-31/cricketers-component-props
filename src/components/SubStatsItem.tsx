import type { SubStats } from "../typescript/interface/cricketers.interface";
type SubStatsProps = {
  stats: SubStats;
};
const SubStatsItem = ({ stats }: SubStatsProps) => {
  return (
    <>
      <div key={stats.id}>
        <p>{stats.format}</p>
        <p>{stats.matches}</p>
        <p>{stats.runs}</p>
        <p>{stats.average}</p>
        <p>{stats?.centuries}</p>
        <p>{stats?.wickets}</p>
      </div>
    </>
  );
};

export default SubStatsItem;
