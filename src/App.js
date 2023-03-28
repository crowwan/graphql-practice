import logo from "./logo.svg";
import { test } from "./util/graphql";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const repo = await test();
      setData(repo.discussions.nodes);
    })();
  }, []);
  return (
    <div className="App">{data && data.map((a) => <div>{a.title}</div>)}</div>
  );
}

export default App;
