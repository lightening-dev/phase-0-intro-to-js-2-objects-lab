// Write your solution in this file!

const employee ={
    name: "John Smith", streetAddress: "123 Columbus Cir",

}

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const employeeNum2 = {...employee};

    employeeNum2[key] = value;


    return employeeNum2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   
    

    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {

    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value)  {

    delete employee[key];

    return employee;

}