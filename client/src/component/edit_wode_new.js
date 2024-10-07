import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { addItem, addPost, addWode, addWoro, updateWode } from '../action/user';
import axios from 'axios';
const EditWodeNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const a = useParams();
    console.log(a);
    const [emp, setEmp] = useState([]);
    const [item, setItem] = useState({
        name:a.task_name,
        woro_id : localStorage.getItem('id'),
        emp_id:'',
        faci_id:'',
        seta_id:'',
        note:a.note,
        start:a.start.split('T')[0],
        end:a.end.split('T')[0],
        status:'INPROGRESS'
    });
    const [isAdd, setAdd] = useState(false);
    const add = (e) => {
        e.preventDefault();
        dispatch(updateWode(a.id, item));
        setAdd(true);
    }
    console.log(item);
    const change = (e) => {
        setItem({...item, [e.target.name] : e.target.value});
    }

    const get_emp = async () => {
        const result = await axios({
            method: "GET",
            url: "http://localhost:3400/employee"
             });
        setEmp(result.data.data);
    }
    const [seta, setseta] = useState([]);
    const get_seta = async () => {
        const result = await axios({
            method: "GET",
            url: "http://localhost:3400/seta"
             });
        //console.log(result)
        setseta(result.data.data);
    }
    const [faci, setfaci] = useState([]);
    const get_faci = async () => {
        const result = await axios({
            method: "GET",
            url: "http://localhost:3400/faci"
             });
        //console.log(result)
        setfaci(result.data.data);
    }
    //console.log(emp);
    useEffect(() => {
        get_emp();
        get_faci();
        get_seta();
        if (isAdd) {
            Swal.fire(
                `Berhasil Mengupdate Data`,
                  'Proses Update Data Berhasil',
                "success"
              );
              setAdd(false);
              navigate('/work_order_detail');
        }
    }, [dispatch, isAdd]);
    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Add Work Order Details</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Adding New Data For Work Order Details</h6>
            </div>
            <div class="card-body">
            <form onSubmit={(e) => add(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Task Name</label>
    <input required name='name' value={item.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => change(e)} placeholder="Masukkan Task Name"></input>
    <label for="exampleInputEmail1">Asign To</label>
    <select name='emp_id' class="form-select" aria-label="Default select example" onChange={(e) => change(e)}>
    <option selected>Open this select menu</option>
    {emp.map((x) => (
        <option value={x.emp_id}>{x.emp_fullname}</option>
    ))}
</select>
<label for="exampleInputEmail1">Start Date</label>
    <input name='start' value={item.start} type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => change(e)} placeholder="Enter email"></input>
    <label for="exampleInputEmail1">End Date</label>
    <input name='end' value={item.end} type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => change(e)} placeholder="Enter email"></input>
    <label for="exampleInputEmail1">Status</label>
    <select name='status' class="form-select" aria-label="Default select example" onChange={(e) => change(e)}>
  <option selected>Open this select menu</option>
  <option value='INPROGRESS'>INPROGRESS</option>
  <option value='COMPLETED'>COMPLETED</option>
  <option value='CANCELED'>CANCELED</option>
</select>
    <label for="exampleInputEmail1">Facilities</label>
        <select name='faci_id' class="form-select" aria-label="Default select example" onChange={(e) => change(e)}>
    <option selected>Open this select menu</option>
    {faci && faci.map((item) => (
        <option value={item.faci_id}>{item.faci_name}</option>
    ))}
    </select>
    <label for="exampleInputEmail1">Sevice Task</label>
        <select name='seta_id' class="form-select" aria-label="Default select example" onChange={(e) => change(e)}>
    <option selected>Open this select menu</option>
    {seta && seta.map((item) => (
        <option value={item.seta_id}>{item.seta_name}</option>
    ))}
    </select>
    <label for="exampleInputEmail1">Notes</label>
<textarea name='note' value={item.note} class="form-control" onChange={(e) => change(e)} placeholder="Enter email"></textarea>
<br></br>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
          </div>
        </div>
    );
}

export default EditWodeNew;
