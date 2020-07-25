import Api from "../api";
import {ActionType} from "./types";

const setEmployees = (data, totalPages) => {
  const pages = Array.from({length: totalPages}, (x, i) => i + 1);
  return {
    type: ActionType.EMPLOYEE_DETAILS,
    payload: {
      employees: data,
      totalPages,
      pages,
    }
  }
}

export const getEmployees = (pageNumber) => {
  return (dispatch) => {
    Api.get(`users?page=${pageNumber}`)
        .then(res => dispatch(setEmployees(res.data, res.total_pages)))
        .catch(error => console.log(error));
  }
}

export const updateEmployee = (userId, updatedEmployee, updatedEmployees, totalPages) => {
  updatedEmployees.find(employee => employee.id === userId).first_name = updatedEmployee.first_name;
  return (dispatch) => {
    Api.put(`users/${userId}`, updatedEmployee)
        .then(res => dispatch(setEmployees(updatedEmployees, totalPages)))
        .catch(error => console.log(error));
  }
}

export const deleteEmployee = (userId, pageNumber, updatedEmployees, totalPages) => {
  return (dispatch) => {
    Api.delete(`users/${userId}`)
        .then(res => dispatch(setEmployees(updatedEmployees, totalPages)))
        .catch(error => console.log(error))
  };
}
