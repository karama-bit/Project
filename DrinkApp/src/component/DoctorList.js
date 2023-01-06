import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

export function DoctorList(props){
    const [doctor,setDoctor]= useState([]);
    const [show, setShow] = useState(false);
    const url= "http://localhost:8080/api/doc";

    const navigate = useNavigate();
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => setDoctor(resp.data))
        .catch(error => console.log(error));
    }

    const deleteDoctor=(id)=>{
        axios.delete(url+"/"+id)
        .then(resp=>{console.log(resp); getData()})
        .catch(error=>console.log(error));
    }

    const bookAppointment=(slot,id)=>{
        if(slot == 0)
        {
            setShow(true);
        }
        else{
            navigate("/appointment/"+id)
        }

        }
 

    useEffect(()=>{
        getData();
    }, [])



    const tabRow = doctor.map((doctor,index)=>{
        return (
            <tr key={index}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.department}</td>
                <td>{doctor.slot}</td>
                <td>
                    <button className="btn btn-primary"
                    onClick={() => navigate("/viewdoctor/"+doctor.id)}>View</button>&nbsp;
                    <button className="btn btn-danger" 
                    onClick={()=>deleteDoctor(doctor.id)}>Delete</button>&nbsp;
                    <button className="btn btn-success"
                    onClick={() => navigate("/editdoctor/"+doctor.id)}>Edit</button>&nbsp;
                    <button className="btn btn-info"
                    onClick={() => bookAppointment(doctor.slot, doctor.id)}>Book Appointment</button>&nbsp;
                </td>
            </tr>
        )
    })
    return(
        <div>
            <br></br>
            {
                

                show &&
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                      <Alert.Heading>"Sorry,No slots available"</Alert.Heading>
                    </Alert>
                
                
            }
            <h1 align="center"> Doctors List </h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th><th>NAME</th><th>DEPARTMENT</th><th>SLOTS</th><th>Features</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    )
}