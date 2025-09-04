package net.pavanvasam.ems.service;
import java.util.List;
import net.pavanvasam.ems.dto.EmployeeDto;
public interface EmployeeService {
EmployeeDto creteEmployee(EmployeeDto employeeDto);
EmployeeDto getEmployeeById(Long employeeId);
List<EmployeeDto> getAllEmployees();
EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);
void  deleteEmployee(Long employeeId);
}
