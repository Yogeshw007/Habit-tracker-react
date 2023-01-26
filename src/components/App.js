import {
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './Navbar'
import TrackHabits from "../pages/TrackHabits";
import Habits from "../pages/Habits";
import Fof from "../pages/Fof";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Habits />} />
        <Route exact path="/track-habits" element={<TrackHabits />} />
        <Route path="/404" element={<Fof />} />
      </Routes>
    </div>
  );
}

export default App;