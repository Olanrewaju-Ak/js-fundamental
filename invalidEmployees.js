const sampleEmployees = [
  {
    id: 1,
    employee_name: 'Milena',
    employee_email: 'milena@company.org',
    employee_number: null,
    employee_id: '3056804574'
  },
  {
    id: 2,
    employee_name: 'Anthia',
    employee_email: 'anthia@company.org',
    employee_number: '745-430-6346',
    employee_id: '8910054654'
  },
  {
    id: 3,
    employee_name: 'Elissa',
    employee_email: 'elissa@company.org',
    employee_number: '293-415-1928',
    employee_id: '3753565938'
  },
  {
    id: 4,
    employee_name: 'Hortensia',
    employee_email: 'hortensia@company.org',
    employee_number: '141-807-0169',
    employee_id: null
  },
  {
    id: 5,
    employee_name: 'Marcelline',
    employee_email: 'marcelline@company.org',
    employee_number: null,
    employee_id: '0780303520'
  },
  {
    id: 6,
    employee_name: 'Colby',
    employee_email: null,
    employee_number: '495-893-8853',
    employee_id: '3011385777'
  }
];

//this function searches through an array of employees and returns an array of employees with missing info
const invalidEmployees = (employees) => {
  //Implement me
  let invalidEmployeesList = [];
  for (const employee of employees) {
    if (employeesWithMissingInformation(employee)) {
      invalidEmployeesList.push(employee);
    }
  }
  return invalidEmployeesList;
};

//implement a helper function that checks an employee to see if they have missing info
const employeesWithMissingInformation = (employee) => {
  for (const info in employee) {
    if (employee[info] === null) {
      return true;
    }
  }
  return false;
};

//All this function does is take the array of employees with missing info and return a new array with just their names;
const invalidEmployeesNames = (employees) => {
  let invalidList = invalidEmployees(employees);
  let invalidEmployessNamesList = [];
  for (const employee of invalidList) {
    invalidEmployessNamesList.push(employee.employee_name);
  }
  return invalidEmployessNamesList;
};

console.log(invalidEmployeesNames(sampleEmployees));
