// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: '' 
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
   
    const employeeCopy = {...employee}
    employeeCopy[streetAddress] = value;
    
    return employeeCopy;
}
//employee.name = 'Sam'

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value;
return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const employeeCopy2 = {...employee}
    delete employeeCopy2[key];
    
    return employeeCopy2;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
}