import axios from "axios";
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useNavigate, useParams } from "react-router-dom";

export function Appointment(props){
    const [doctor,setDoctor]=useState({});
    const [show, setShow] = useState(false);
    
    const param=useParams();
    const navigate=useNavigate();
    const url = "http://localhost:8080/api/doc/book/"+param.id;
    const url_view = "http://localhost:8080/api/doc/"+param.id;
    
    const getData = () =>{
        const data = axios.get(url_view);
        data.then(resp => {console.log(resp.data); return setDoctor(resp.data)})
        .catch(error => console.log(error));
    }
    useEffect(() => {
        getData();
    },[])

    

    const bookAppointment=()=>{
        const data = axios.get(url);
        data.then(resp=>{console.log(resp); getData()})
        .catch(error=>console.log(error));
        setShow(true);
    }
    

return(
    <div>
        {
            show && <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Appointment booked successfully!</Alert.Heading>
          </Alert>
        }
        <h1>Book Your Appointments here...</h1>
        <button className = "btn btn-secondary" onClick={()=>{navigate(-1)}}>Go Back</button>
        
        <ul className="list-group">
            <li className="list-group-item">Id: {doctor.id}</li>
            <li className="list-group-item">Name: {doctor.name}</li>
            <li className="list-group-item">Department: {doctor.department}</li>
            <li className="list-group-item">Slot: {doctor.slot}</li>
        </ul>
        <button disabled={doctor.slot === 0} className="btn btn-primary" type="submit" onClick={bookAppointment}>Book Appointment</button>

        
    </div>
);

}