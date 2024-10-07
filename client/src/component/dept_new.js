import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getItem, getSelf } from '../action/user';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

const DeptNew = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
      };
      const dropdownOptions = ['Pilihan 1', 'Pilihan 2', 'Pilihan 3'];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSearch, setsearch] = useState(false);
    const [isSearch2, setsearch2] = useState([1]);
    const [item, setItem] = useState('');
    const {getSelfItemResult} = useSelector((state) => state.list);
    const {getListItemResult} = useSelector((state) => state.list);
    const [test, settest] = useState([]);
    const redirect = (id, name) => {
        navigate(`/edit_dept/${id}/${name}`);
    }
    const add = async (e) => {
            if (item) {
            console.log(item);
            e.preventDefault();
            dispatch(getItem(item)); 
            setsearch(true);    
        }
        else{
            setsearch(false);
        } 
    }
    const change = (e) => {
        setItem(e.target.value);
    }

    useEffect(() => {
        dispatch(getSelf());
    }, [isSearch]);
    console.log(item);
    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Department</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data Department</h6>
            </div>
            <br></br>
            <form  class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={(e) => add(e)}>
                <div class="input-group">
                  <input type="text" onChange={(e) => change(e)} class="form-control bg-light border-0 small" placeholder="Cari Department" aria-label="Search" aria-describedby="basic-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                    <th >Id</th>
                    <th >Department</th>
                    <th ><Link to='add_dept'>+ add</Link></th>
                    </tr>
                  </thead>
                  <tbody>
                  {/* {isSearch ? getListItemResult.length > 0 ? getListItemResult.map((item) => (<tr>
                        <td>{item.dept_id}</td>
                        <td>{item.dept_name}</td>
                        <td><button className='btn btn-primary' onClick={()=>redirect(item.dept_id)}>Edit</button></td>
                    </tr>)) : <p>ccccc</p> : getSelfItemResult && getSelfItemResult.map((item) => (
                    <tr>
                        <td>{item.dept_id}</td>
                        <td>{item.dept_name}</td>
                        <td><button className='btn btn-primary' onClick={()=>redirect(item.dept_id)}>Edit</button></td>
                    </tr>
                  ))} */}
                    { isSearch ? getListItemResult.length > 0 ? getListItemResult.map((item) => (<tr>
                        <td>{item.dept_id}</td>
                        <td>{item.dept_name}</td>
                        <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {dropdownOptions.map((option, index) => (
          <Dropdown.Item key={index}>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown></td>
                    </tr>)) : <p>ccccc</p> :  getSelfItemResult && getSelfItemResult.map((item) => (
                          <tr>
                          <td>{item.dept_id}</td>
                          <td>{item.dept_name}</td>
                          <td><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        :
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item key={1} onClick={() => redirect(item.dept_id, item.dept_name)}>Edit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
                          {/* <td><button className='btn btn-primary' onClick={()=>redirect(item.dept_id)}>Edit</button></td> */}
                      </tr>  
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}

export default DeptNew;
