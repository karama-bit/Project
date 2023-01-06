import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ViewDoctor(props){
    const [doctor,setDoctor]=useState({});
    const param=useParams();
    const navigate=useNavigate();
    const url = "http://localhost:8080/api/doc/"+param.id;
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => {console.log(resp.data); return setDoctor(resp.data)})
        .catch(error => console.log(error));
    }
    useEffect(() => {
        getData();
    },[])

    return(
        <div>
            <h1>View Doctor List</h1>
            <button className = "btn btn-secondary" onClick={()=>{navigate(-1)}}>Go Back</button>
            <ul className="list-group">
                <li className="list-group-item">Id: {doctor.id}</li>
                <li className="list-group-item">Name: {doctor.name}</li>
                <li className="list-group-item">Department: {doctor.department}</li>
                <li className="list-group-item">Slot: {doctor.slot}</li>
            </ul>
        </div>
    );
}