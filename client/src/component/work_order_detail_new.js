import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteWode, getEmp, getEmpName, getItem, getSelf, getWode, getWoro, getWoroByDate } from '../action/user';
import axios from 'axios';
import Swal from "sweetalert2";
import { Dropdown } from 'react-bootstrap';
const WorkOrderDetailNew = () => {
    const [isdelete, setDelete] = useState(false)
    const deletee = async (id) => {
        Swal.fire({
            title: "Hapus Data",
            text: "Apakah Anda Yakin Ingin Menghapus Data?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus Data",
          }).then( (result) => {
            if (result.isConfirmed) {
                dispatch(deleteWode(id))
                setDelete(!isdelete);
                Swal.fire(
                    "Hapus Data Berhasil",
                    "Berhasil Menghapus Data",
                    "success"
                    )    
              }
            
          });
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {getWodeItemResult} = useSelector((state) => state.list);
    const redirect = (id, task_name, start, end, note) => {
        navigate(`/edit_wode/${id}/${task_name}/${start}/${end}/${note}`);
    }
    const redirect2 = () => {
        navigate(`/add_wode`);
    }
    useEffect(() => {
        dispatch(getWode(localStorage.getItem('id')));
    }, [isdelete]);
    console.log(getWodeItemResult);
    console.log(localStorage.getItem('id'));
    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Work Order Detail</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Work Order Detail</h6>
            </div>
            <br></br>
            <form  class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                  <h6>Work Order Created At {localStorage.getItem('date')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Status {localStorage.getItem('status')}</h6>
                  
                </div>
              </form>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assign To</th>
                    <th scope="col"><Link to='add_wode'>+ add</Link></th>
                  </tr>
                  </thead>
                  <tbody>
                  {getWodeItemResult ? getWodeItemResult.map((item) => (
                       <tr>
                       <td>{item.wode_id}</td>
                       <td>{item.wode_task_name}</td>
                       <td>{item.wode_notes}</td>
                       <td>{item.wode_status}</td>
                       <td>{item.employee.emp_fullname}</td>
                       <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item key={1} onClick={() => redirect(item.wode_id, item.wode_task_name, item.wode_start_date, item.wode_end_date, item.wode_notes)}>Edit</Dropdown.Item>
      <Dropdown.Item key={2} onClick={() => deletee(item.wode_id)}>Delete</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown></td>
                   </tr>  
                  )) : <p></p>}  
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}

export default WorkOrderDetailNew;
