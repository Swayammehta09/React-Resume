import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Chart from "./components/Chart";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
    <div class="bg">
      <Navigation />
      <Introduction />
      <br />
      <Education />
      <br />
      <Experience/>
      <br/>
      <Chart />
      <br />
      </div>
    </>
  );
}

export default App;
