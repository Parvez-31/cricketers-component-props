import "./App.css";
import CricketersItem from "./components/CricketersItem";
import { cricketers } from "./services/json/cricketers.json";
const App = () => {
  return (
    <>
      <section className="flex justify-center gap-4">
        {cricketers.map((item) => {
          return <CricketersItem key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default App;
