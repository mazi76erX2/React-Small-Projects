import "./App.css";
import EsignatureApp from "./projects/01-Esignatures/EsignatureApp";
import RandomizeColors from "./projects/02-RandomizeColors/RandomizeColors";
import LikeMyPhoto from "./projects/03-Like-My-Photo/LikeMyPhoto";
import Testimonials from "./projects/04-Testimonials/Testimonials";
import Alerts from "./projects/05-Alerts/Alerts";

function App() {
  return (
    <div className="App">
      {/* <EsignatureApp /> */}
      {/* <RandomizeColors />
       */}
      {/* <LikeMyPhoto /> */}
      {/* <Testimonials /> */}
      <Alerts />
    </div>
  );
}

export default App;
