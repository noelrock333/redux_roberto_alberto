import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
