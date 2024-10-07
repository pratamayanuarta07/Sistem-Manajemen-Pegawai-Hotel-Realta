import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEmp, getEmpName, getItem, getSelf, getWoro, getWoroByDate } from '../action/user';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import PaginationNew from './pagination_new';
const WorkOrderNew = () => {
    const [data2, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Ubah sesuai kebutuhan
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [isSearch, setsearch] = useState(false);
    const [data, setdata] = useState([]);
    const [item, setItem] = useState('');
    const [item2, setItem2] = useState('');
    const [list, setList] = useState([]);
    const [a, seta] = useState(false);
    const {getWoroItemResult} = useSelector((state) => state.list);
    const {getWoroByItemResult} = useSelector((state) => state.list);
    const [test, settest] = useState([]);
    const redirect = (id, date) => {
        navigate(`/edit_woro/${id}/${date}`);
    }
    const redirect2 = (id, date, status) => {
        localStorage.setItem('id', id);
        localStorage.setItem('date', date);
        localStorage.setItem('status', status);
        navigate(`/work_order_detail`);
    }
    const add = async (e) => {
        if (item) {
            e.preventDefault();
            dispatch(getWoroByDate(item, item2)); 
            setsearch(true);    
        }
    }
    const change = (e) => {
        seta(true);
        setActive(e.target.value);
    }
    const [ab, setab] = useState(0);
    //console.log(getWoroItemResult);
    useEffect( () => {
        const get_data = async () => {
            const result = await axios({
                method: "GET",
                url: "http://localhost:3400/work_order"
                 });
            setdata((result.data.data));
        }

        const get_data_date = async () => {
            const result = await axios({
                method: "GET",
                url: `http://localhost:3400/work_order_date/${item}/${item2}`
                 });
            setdata((result.data.data));
        }

        const all = async () => {
            let a = [];
            if (getWoroItemResult) {
              getWoroItemResult.map((item) => {
                if (item.woro_status === active) {
                  a.push(item);
              }
              });
              setab(a);
            }
            //console.log(result.data);
        }

        if (isSearch) {
            get_data_date()
            setCurrentPage(1);
        }
        else{
            dispatch(getWoro());
            get_data();
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
        if (getWoroItemResult) {
          console.log(getWoroItemResult);
          let a = [];
          getWoroItemResult.map((item) => {
            if (item.woro_status === active) {
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
    else{
      
      if (getWoroItemResult) {
         indexOfLastItem = currentPage * itemsPerPage;
         indexOfFirstItem = indexOfLastItem - itemsPerPage;
         currentItems = getWoroItemResult.slice(indexOfFirstItem, indexOfLastItem);
         totalPages = Math.ceil(getWoroItemResult.length / itemsPerPage);
      }
         
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Lakukan sesuatu, misalnya memuat data dari API dengan nomor halaman baru
    };
    //console.log(item);
    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Work Order</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Work Order</h6>
            </div>
            <br></br>
            <form  class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={(e) => add(e)}>
                <div class="input-group">
                  <label >From</label>
                  <input style={{marginLeft:'20px'}} name='key' type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setItem(e.target.value)} placeholder="Enter email"></input>
                  <label style={{marginLeft:'20px'}}>To</label>
                  <input style={{marginLeft:'20px'}} name='key' type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setItem2(e.target.value)} placeholder="Enter email"></input>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                  <select style={{marginLeft:'570px', borderRadius:'100px'}} class="form-select" aria-label="Default select example" onChange={(e) => setActive(e.target.value)}>
  <option selected>Pilih Status</option>
  <option value="">ALL</option>
  <option value="OPEN">OPEN</option>
  <option value="CLOSED">CLOSED</option>
  <option value="CANCELED">CANCELED</option>

</select>
                  
                </div>
              </form>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Work Order Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created By</th>
                    <th scope="col"><Link to='add_woro'>+ add</Link></th>
                  </tr>
                  </thead>
                  <tbody>
                  { isSearch ? currentItems.length > 0 ? currentItems.map((item) => (<tr>
                        <td>{item.woro_id}</td>
                        <td>{item.woro_start.split('T')[0]}</td>
                        <td>{item.woro_status}</td>
                        <td>{item.user.user_full_name}</td>
                        <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item key={1} onClick={() => redirect(item.woro_id, item.woro_start)}>Edit</Dropdown.Item>
      <Dropdown.Item key={2} onClick={() => redirect2(item.woro_id, item.woro_start.split('T')[0], item.woro_status)}>Work Order Detail</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown></td>
                    </tr>)) : <p>Loading</p> :  currentItems && currentItems.map((item) => (
                          <tr>
                        <td>{item.woro_id}</td>
                        <td>{item.woro_start.split('T')[0]}</td>
                        <td>{item.woro_status}</td>
                        <td>{item.user.user_full_name}</td>
                          <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item key={1} onClick={() => redirect(item.woro_id, item.woro_start)}>Edit</Dropdown.Item>
      <Dropdown.Item key={2} onClick={() => redirect2(item.woro_id, item.woro_start.split('T')[0], item.woro_status)}>Work Order Detail</Dropdown.Item>
      
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

export default WorkOrderNew;
