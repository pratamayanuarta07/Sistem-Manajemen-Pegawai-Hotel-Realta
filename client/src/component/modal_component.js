import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEmp, getEmpDept, getEmpName, getItem, getSelf } from '../action/user';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ id, show, handleClose }) => {
    const dispatch = useDispatch();
    const {getEmpDeptItemResult} = useSelector((state) => state.list);
    useEffect(() => {
        if (show) {
            dispatch(getEmpDept(id));    
        }
    }, [show]);
    
    
    return (
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Employee Department History</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {getEmpDeptItemResult && getEmpDeptItemResult.map((item) => (
           <div> 
            <h5>Department : {item.department.dept_name}</h5>
            <h5>Tanggal Masuk : {item.edhi_start_date}</h5>
            <h5>Tanggal Selesai : {item.edhi_end_date}</h5>
            <h5>Shift : {item.shift.shift_name}</h5>
            <h5>Mulai Shift : {item.shift.shift_start_time}</h5>
            <h5>Selesai Shift : {item.shift.shift_end_time}</h5>
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
};

export default ModalComponent;
