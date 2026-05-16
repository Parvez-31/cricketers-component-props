import ReviewsItem from "./ReviewsItem";
import SubStatsItem from "./SubStatsItem";
import type { CricketersItemProps } from "../typescript/type/cricketers.props.type";

const CricketersItem = ({ item }: CricketersItemProps) => {
  return (
    <>
      <section key={item.id} className="border border-red-500">
        <p>{item.name}</p>
        <p>{item.country}</p>
        <p>{item.role}</p>
        <p>{item.jerseyNumber}</p>
        <p>{item.age}</p>
        <p>{item.battingStyle}</p>
        <p>{item.bowlingStyle}</p>
        <p>{item?.isCaptain}</p>

        {/* category */}

        <section>
          <p>{item.category.name}</p>
          <p>{item.category.slug}</p>
          <p>{item.category.icon}</p>
        </section>

        {/* images */}

        <section>
          <div className="">
            {item.images.map((img, i) => {
              return (
                <div key={i}>
                  <img src={img} alt="crickets" />
                </div>
              );
            })}
          </div>
        </section>

        {/* subStats */}

        <section>
          {item.subStats.map((stats) => {
            return <SubStatsItem key={stats.id} stats={stats} />;
          })}
        </section>

        {/* reviews */}

        <section>
          {item.reviews.map((review) => {
            return <ReviewsItem key={review.id} review={review} />;
          })}
        </section>
      </section>
    </>
  );
};

export default CricketersItem;
