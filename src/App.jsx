
// import { LineChart } from "recharts";
import "./App.css";
import Nav from "./component/Nav/Nav";
import PriceOptions from "./component/Nav/PriceOptions/PriceOptions";
import LineChart from './component/Nav/LineChart/LineChart';
import PhoneApi from "./component/Phone/PhoneApi";
function App() {


  return (
    
    <>
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <PhoneApi></PhoneApi>
    </>
  );
}

export default App;
