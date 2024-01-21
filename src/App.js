import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home/Home";
import SubHeader from "./Components/SubHeader/SubHeader";

function App() {
  const [name, setName] = useState();
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Home></Home>
    </div>
  );
}

export default App;
