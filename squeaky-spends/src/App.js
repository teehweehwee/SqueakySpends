import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewEntryForm from "./pages/NewEntryForm";
import IncomeSummary from "./pages/IncomeSummary";
import ExpenseSummary from "./pages/ExpenseSummary";
import FinalSummary from "./pages/FinalSummary";

function App() {
  return (
    <div>
<Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/new-entry' element={<NewEntryForm />} />
          <Route path='/income' element={<IncomeSummary />}></Route>
          <Route path='/expense' element={<ExpenseSummary />}></Route>
          <Route path='/total' element={<FinalSummary />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
