import Api from "../api";
import {ActionType} from "./types";

const setEmployees = (data, totalPages, employeeIdList) => {
  const employeeIds = employeeIdList ? employeeIdList : [];
  if (!employeeIdList) {
    data.forEach((item) => {
      employeeIds.push(item.id);
    });
  }
  const pages = Array.from({length: totalPages}, (x, i) => i + 1);
  return {
    type: ActionType.EMPLOYEE_DETAILS,
    payload: {
      employees: data,
      employeeIds,
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

export const updateEmployee = (userId, updatedEmployee) => {

}

export const deleteEmployee = (userId, pageNumber, updatedEmployees, employeeIds, totalPages) => {
  return (dispatch) => {
    Api.delete(`users/${userId}`)
        .then(res => dispatch(setEmployees(updatedEmployees, totalPages, employeeIds)))
        .catch(error => console.log(error))
  };
}
