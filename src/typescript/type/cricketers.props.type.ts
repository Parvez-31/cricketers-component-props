import type { SubStats } from "../interface/cricketers.interface";
import type { Reviews } from "../interface/cricketers.interface";
import type { Cricketers } from "../interface/cricketers.interface";

export type SubStatsProps = {
  stats: SubStats;
};

export type ReviewsItemProps = {
  review: Reviews;
};

export type CricketersItemProps = {
  item: Cricketers;
};
