package com.Training.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Training.Model.Doctor;
import com.Training.Service.DoctorServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DoctorController {
	 @Autowired
	    DoctorServiceImpl docService;
	
	    @RequestMapping(path="/hello",method=RequestMethod.GET)
	    public String sayHello() {
	    	return ("Hello world from Rest");
	    }
	
	    @GetMapping(path="/doc/{id}")
      public Doctor getDoctorById(@PathVariable int id) {
	    	return docService.findById(id);	    	
	    }
	    @GetMapping(path="/doc")
      public List<Doctor> getAllDoctor(){
	    	   return docService.getAllDoctorInfo();
	    }
	    
	    @PostMapping(path="/doc")
	    public Doctor addDoctor (@RequestBody Doctor doctor) {
	    	return   docService.AddDoctor(doctor);
	    }
	    
	    @DeleteMapping("/doc/{id}")
	   public void removeDoctorById(@PathVariable int id) {
		   docService.removeDoctorById(id);
	   }
	    
	    @PutMapping("/doc/{id}")
	    public Doctor updateDoctor (@RequestBody Doctor doctor,@PathVariable int id) {
	    	return docService.updateDoctorById(doctor,id);
	    }
	    @GetMapping("/doc/book/{id}")
	    public Optional<Doctor> bookDoctor(@PathVariable int id) {
	    	
	    	Doctor doctor2 = docService.BookAppointment(id);
	    	return Optional.ofNullable(doctor2);
	    }
	   


}
