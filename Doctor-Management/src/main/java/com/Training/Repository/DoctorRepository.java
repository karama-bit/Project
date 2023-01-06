package com.Training.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Training.Model.Doctor;


public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
	
	

}
