package net.pavanvasam.ems.service.impl;

import lombok.AllArgsConstructor;
import net.pavanvasam.ems.dto.EmployeeDto;
import net.pavanvasam.ems.entity.Employee;
import net.pavanvasam.ems.exception.ResourceNotFoundException;
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

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
       Employee employee= employeeRepository.findById(employeeId)
                .orElseThrow(()->new ResourceNotFoundException("Employee is not exist with given id: "+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
