import "./styles.css";
import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <div>
      {process.env.NODE_ENV} <b>{process.env.name}</b>
      <ClickCounter />
    </div>
  );
};

export default App;
