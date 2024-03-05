package com.manideep.Employment.Management.System.repository;

import com.manideep.Employment.Management.System.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
