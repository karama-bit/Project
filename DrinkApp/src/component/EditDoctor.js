import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditDoctor(){
    const params=useParams();
    const [doctor,setDoctor]=useState({})
    const url = "http://localhost:8080/api/doc/"+ params.id;

    const navigate=useNavigate();
        const getData = () => {
            const data = axios.get(url);
            data.then(resp => {setDoctor(resp.data);console.log(doctor)})
            .catch(error => console.log(error));
        }
        useEffect(() =>{
            getData();
        },[])
    
        const inputHandler=(e)=>{
            setDoctor((doctor)=>({
                ...doctor,
                [e.target.id]:e.target.value
            }))
        }

        const submitHandler=(e)=>{
            e.preventDefault();
            const data=axios.put(url,doctor);
            data.then(resp=>{
               // if(resp.status===200)
                navigate('/doctorlist')
            })
            .catch(error=>console.log(error));
        }

        return(
            <div>
                <h1>Edit Doctor</h1>
                <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Go Back</button>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={submitHandler}>
                        
                        <label>Id</label>
                        <input type = "number" id="id" placeholder="Enter Id"
                        value={doctor.id} className="form-control" onChange={inputHandler}/>
                        <label>Name</label>
                        <input type = "text" id="name" placeholder="Enter Name"
                        value={doctor.name} className="form-control" onChange={inputHandler}/>
                        <label>Department</label>
                        <input type = "text" id="department" placeholder="Enter Department"
                        value={doctor.department} className="form-control" onChange={inputHandler}/>
                        <label>Slot</label>
                        <input type = "number" id="slot" placeholder="Enter Slot"
                        value={doctor.slot} className="form-control" onChange={inputHandler}/>
                       
                        <br/>
                        <button className="btn btn-primary" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );


    }