import './App.css';
import AddUser from './Pages/AddUser/AddUser';
import EditUsersInfo from './Pages/EditUser/EditUsersInfo';
import ListOfUsers from './Pages/ListOfUsers/ListOfUsers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from './Context/Context';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        
    <Router>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/edit" element={<EditUsersInfo  />} />
          <Route path="/list" element={<ListOfUsers />} />
        </Routes>
      </Router>
  </ContextProvider>

    </div>
  );
}

export default App;
