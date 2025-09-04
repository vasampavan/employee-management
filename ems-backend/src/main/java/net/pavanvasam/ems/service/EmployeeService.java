package net.pavanvasam.ems.service;

import net.pavanvasam.ems.dto.EmployeeDto;
public interface EmployeeService {
EmployeeDto creteEmployee(EmployeeDto employeeDto);
EmployeeDto getEmployeeById(Long employeeId);
}
