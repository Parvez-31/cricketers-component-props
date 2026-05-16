import type { SubStatsProps } from "../typescript/type/cricketers.props.type";
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
