import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEmp, getEmpDept, getEmpName, getEmpSalary, getItem, getSelf } from '../action/user';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const ModalSalary = ({ id, show, handleClose }) => {
    const dispatch = useDispatch();
    const {getEmpSalaryItemResult} = useSelector((state) => state.list);
    useEffect(() => {
        if (show) {
            dispatch(getEmpSalary(id));    
        }
    }, [show]);
    console.log(getEmpSalaryItemResult)
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Salary History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {getEmpSalaryItemResult && getEmpSalaryItemResult.map((item) => (
           <div> 
            <h5>Salary Rate : {item.ephi_rate_salary}</h5>
            <h5>Tanggal Perubahan Salary : {item.ephi_rate_change_date}</h5>
            <h5>Frekuensi Penerimaan Gaji : {item.ephi_pay_frequence === 1 ? 'Bulanan' : 'Mingguan'}</h5>
            </div>
        ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalSalary;
