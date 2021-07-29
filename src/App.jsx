import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//PAGES
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import Games from "./pages/Games.page";
import StreamingEvents from "./pages/OnlineStreaming.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};    // CREATE AN EMPTY OBJECT AND THEN ONLY ASSIGN TO IT
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



function App() {
  return (
    <>
        <DefaultHOC path= "/" exact component={HomePage} />
        <MovieHOC path="/movie/:id" exact component={Movie} />
        <DefaultHOC path="/plays" exact component={Plays} />
        <DefaultHOC path="/gamesandsports" exact component={Games} />
        <DefaultHOC path="/onlinestreamingevents" exact component={StreamingEvents} />
    </>
  );
}

export default App;
