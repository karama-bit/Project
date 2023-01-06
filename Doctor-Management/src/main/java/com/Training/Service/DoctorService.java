package com.Training.Service;

import java.util.List;

import com.Training.Model.Doctor;

public interface DoctorService {
	public Doctor findById(int id);

	public List<Doctor> getAllDoctorInfo();

	public Doctor AddDoctor(Doctor doctor);

	public void removeDoctorById(int id);

	public Doctor updateDoctorById(Doctor doctor, int id);	
	
	public Doctor BookAppointment(int id);
	

}
