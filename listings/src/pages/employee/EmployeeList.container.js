import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "../../base/Header";
import styles from "./EmployeeList.module.scss";
import ItemList from "../../base/ItemList";
import Pagination from "../../atoms/Pagination";
import {deleteEmployee, getEmployees} from "../../actions/employeeAction";
import {ModalDataType} from "../../constants";

const header = {
  "email": "Email",
  "first_name": "First Name",
  "last_name": "Last Name",
  "actions": "Actions"
};

const EmployeeList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees(pageNumber));
  }, [dispatch, pageNumber]);
  const employees = useSelector(state => state.employee);
  const onPageNumberChanged = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  const deleteAction = (pageNumber, index) => {
    const employeeId = employees.payload?.employeeIds[index];
    const updatedEmployees = [...employees.payload?.employees];
    updatedEmployees.splice(index, 1);
    const pagesLength = employees.payload?.pages?.length;
    dispatch(deleteEmployee(employeeId, pageNumber, updatedEmployees, employees.payload?.employeeIds, pagesLength));
  };
  return (
      <div className={styles.container}>
        <Header />
        <div className={styles.employeeContainer}>
          <ItemList
              payload={employees.payload?.employees}
              pageNumber={pageNumber}
              header={header}
              validKeys={["first_name", "last_name", "email", "actions"]}
              dataType={ModalDataType.EMPLOYEE}
              deleteAction={deleteAction}
          />
          <Pagination
              pageNumberChange={onPageNumberChanged}
              pages={employees.payload?.pages}
              selectedPageNumber={pageNumber}
          />
        </div>
      </div>
  );
}

export default EmployeeList;
