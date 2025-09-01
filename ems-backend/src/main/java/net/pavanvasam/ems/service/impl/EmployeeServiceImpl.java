package net.pavanvasam.ems.service.impl;

import lombok.AllArgsConstructor;
import net.pavanvasam.ems.dto.EmployeeDto;
import net.pavanvasam.ems.entity.Employee;
import net.pavanvasam.ems.mapper.EmployeeMapper;
import net.pavanvasam.ems.repository.EmployeeRepository;
import net.pavanvasam.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto creteEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
