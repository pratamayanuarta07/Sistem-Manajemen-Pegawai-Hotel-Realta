import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEmp, getEmpName, getItem, getSelf } from '../action/user';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import PaginationNew from './pagination_new';
import ModalComponent from './modal_component';
import ModalSalary from './modal_salary';
const EmployeeNew = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (id) => {
      setId(id);
      setShowModal(true)};
    const handleCloseModal = () => setShowModal(false);
    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = (id) => {
      setId(id);
      setShowModal2(true)};
    const handleCloseModal2 = () => setShowModal2(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [id, setId] = useState(0);
    //const totalPages = 10; // Ganti dengan jumlah total halaman yang sesuai
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      // Lakukan sesuatu, misalnya memuat data dari API dengan nomor halaman baru
    };
    const [active, setActive] = useState(false);
    const [isSearch, setsearch] = useState(false);
    const [isSearch2, setsearch2] = useState([1]);
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
    const {getEmpNameItemResult} = useSelector((state) => state.list);
    const {getListItemResult} = useSelector((state) => state.list);
    const {getEmpItemResult} = useSelector((state) => state.list);
    const [test, settest] = useState([]);
    const [ab, setab] = useState(0);
    const redirect = (item) => {  
      navigate(`/edit_employee/${item.emp_national_id}/${item.emp_id}/${item.emp_fullname}/${item.emp_birth_date}/${item.emp_hire_date}/${item.emp_photo.split('/').pop()}`);
    }
    const add = async (e) => {
        if (item) {
            e.preventDefault();
            dispatch(getEmpName(item)); 
            setsearch(true);    
        }
    }
    const change = (e) => {
        setItem(e.target.value);
    }

    useEffect(() => {
      const all = async () => {
        let a = [];
        console.log(active);
        if (getEmpItemResult) {
          getEmpItemResult.map((item) => {
            if (item.emp_current_flag === +active) {
              a.push(item);
          }
          });
          setab(a);
        }
        //console.log(result.data);
    }

        dispatch(getEmp());        
        if (isSearch) {
            dispatch(getEmpName(item));
            setCurrentPage(1);   
        }

        if (active) {
          all();
          setCurrentPage(1); 
       }
    }, [isSearch, active]);

    let indexOfLastItem = 0;
    let indexOfFirstItem = 0;
    let currentItems = 0;
    let totalPages = 0;

    if (active) {
      if (isSearch) {
        if (getEmpItemResult) {
          console.log(getEmpItemResult);
          let a = [];
          getEmpItemResult.map((item) => {
            if (item.emp_current_flag === +active) {
              a.push(item);
          }
          });
          indexOfLastItem = currentPage * itemsPerPage;
          indexOfFirstItem = indexOfLastItem - itemsPerPage;
          currentItems = a.slice(indexOfFirstItem, indexOfLastItem);
          totalPages = Math.ceil(a.length / itemsPerPage);        
      }
      }
      else{
        if (ab) {
          indexOfLastItem = currentPage * itemsPerPage;
          indexOfFirstItem = indexOfLastItem - itemsPerPage;
          currentItems = ab.slice(indexOfFirstItem, indexOfLastItem);
          totalPages = Math.ceil(ab.length / itemsPerPage);        
      }
      }
        
    }
    else {
      console.log('aaaa');
      if (getEmpItemResult) {
        indexOfLastItem = currentPage * itemsPerPage;
        indexOfFirstItem = indexOfLastItem - itemsPerPage;
        currentItems = getEmpItemResult.slice(indexOfFirstItem, indexOfLastItem);
        totalPages = Math.ceil(getEmpItemResult.length / itemsPerPage);  
      }
   }
   console.log(typeof(active));
    return (
        <div>
            <ModalComponent id={id} show={showModal} handleClose={handleCloseModal}></ModalComponent>
            <ModalSalary id={id} show={showModal2} handleClose={handleCloseModal2}></ModalSalary>
            <h1 class="h3 mb-2 text-gray-800">Employee</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Employee</h6>
            </div>
            <br></br>
            <form  class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={(e) => add(e)}>
                <div class="input-group">
                  <input type="text" onChange={(e) => change(e)} class="form-control bg-light border-0 small" placeholder="Cari Employee" aria-label="Search" aria-describedby="basic-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                  <select style={{marginLeft:'725px', borderRadius:'100px'}} class="form-select" aria-label="Default select example" onChange={(e) => setActive(e.target.value)}>
  <option selected>Pilih Status</option>
  <option value="">ALL</option>
  <option value="1">ACTIVE</option>
  <option value="0">INACTIVE</option>

</select>
                  
                </div>
              </form>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">National ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Birth Date</th>
                    <th scope="col">Hire Date</th>
                    <th scope="col">Status</th>
                    <th scope="col"><Link to='add_employee'>+ add</Link></th>
                  </tr>
                  </thead>
                  <tbody>
                  { isSearch ? currentItems.length > 0 ? currentItems.map((item) => (<tr>
                        <td>{item.emp_id}</td>
                        <td>{item.emp_national_id}</td>
                        <td>{item.emp_fullname}</td>
                        <td>{item.emp_birth_date.split('T')[0]}</td>
                        <td>{item.emp_hire_date.split('T')[0]}</td>
                        {item.emp_current_flag === 1 ? <td>ACTIVE</td> : <td>INACTIVE</td>}
                        <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item key={1} onClick={() => redirect(item)}>Edit</Dropdown.Item>
      <Dropdown.Item key={2} onClick={() => handleShowModal(item.emp_id)}>Employee Department History</Dropdown.Item>
      <Dropdown.Item key={3} onClick={() => handleShowModal2(item.emp_id)}>Employee Salary History</Dropdown.Item>
      {/* <ModalComponent show={showModal} handleClose={handleCloseModal}></ModalComponent> */}
      </Dropdown.Menu>
    </Dropdown></td>
                    </tr>)) : <p>ccccc</p> :  currentItems && currentItems.map((item) => (
                          <tr>
                        <td>{item.emp_id}</td>
                        <td>{item.emp_national_id}</td>
                        <td>{item.emp_fullname}</td>
                        <td>{item.emp_birth_date.split('T')[0]}</td>
                        <td>{item.emp_hire_date.split('T')[0]}</td>
                        {item.emp_current_flag === 1 ? <td>ACTIVE</td> : <td>INACTIVE</td>}
                          <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item key={1} onClick={() => redirect(item)}>Edit</Dropdown.Item>
      <Dropdown.Item key={2} onClick={() => handleShowModal(item.emp_id)}>Employee Department History</Dropdown.Item>
      <Dropdown.Item key={3} onClick={() => handleShowModal2(item.emp_id)}>Employee Salary History</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown></td>
                          {/* <td><button className='btn btn-primary' onClick={()=>redirect(item.dept_id)}>Edit</button></td> */}
                      </tr>  
                    ))}
                    
                    
                  </tbody>
                </table>
                <center>
                <PaginationNew
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                >
                </PaginationNew>
                </center>
              </div>
            </div>
          </div>
        </div>
    );
}

export default EmployeeNew;
