import "./App.css";
import { cricketers } from "./services/json/cricketers.json";
const App = () => {
  return (
    <>
      <section className="flex justify-center gap-4">
        {cricketers.map((item) => {
          return (
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
                  return (
                    <div key={stats.id}>
                      <p>{stats.format}</p>
                      <p>{stats.matches}</p>
                      <p>{stats.runs}</p>
                      <p>{stats.average}</p>
                      <p>{stats?.centuries}</p>
                      <p>{stats?.wickets}</p>
                    </div>
                  );
                })}
              </section>
              
              {/* reviews */}
              
              <section>
                {item.reviews.map((review) => {
                  return <div key={review.id}>
                    <p>{review.fanName}</p>
                    <p>{review.rating}</p>
                    <p>{review.comment}</p>
                    <p>{review.createdAt}</p>
                  </div>
                })}
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default App;
