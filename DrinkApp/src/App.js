
import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import { DoctorList } from './component/DoctorList';

import { ViewDoctor } from './component/ViewDoctor';
import { EditDoctor } from './component/EditDoctor';
import { AddDoctor } from './component/AddDoctor';
import { Appointment } from './component/Appointment';



function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <nav className="btn btn-warning navbar navbar-expand-lg navheader">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/adddoctor" >AddDoctor</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/doctorlist">DoctorList</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route exact path="/doctorlist" element={<DoctorList/>}></Route>
        <Route exact path="/adddoctor" element={<AddDoctor/>}></Route>
        <Route exact path="/viewdoctor/:id" element={<ViewDoctor />}></Route>
        <Route exact path="/editdoctor/:id" element={<EditDoctor />}></Route>
        <Route exact path="/appointment/:id" element={<Appointment/>}></Route>
      </Routes>

      </BrowserRouter>
     </div>
  );
}

export default App;
