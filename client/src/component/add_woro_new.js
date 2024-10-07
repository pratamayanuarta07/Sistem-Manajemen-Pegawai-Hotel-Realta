import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { addItem, addPost, addWoro } from '../action/user';
const AddWoroNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState({
        userid : 1,
        start_date:'',
        status:'OPEN'
    });
    const [isAdd, setAdd] = useState(false);
    const add = (e) => {
        e.preventDefault();
        dispatch(addWoro(item));
        setAdd(true);
    }
    console.log(item);
    const change = (e) => {
        setItem({...item, [e.target.name] : e.target.value});
    }

    useEffect(() => {
        if (isAdd) {
            Swal.fire(
                `Berhasil Menambah Data`,
                'Menambah Data Work Order Berhasil',
                "success"
              );
              setAdd(false);
              navigate('/work_order');
        }
    }, [dispatch, isAdd]);
    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Add Work Order</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Adding New Data For Work Order</h6>
            </div>
            <div class="card-body">
            <form onSubmit={(e) => add(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Start Date</label>
    <input required name='start_date' type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => change(e)} placeholder="Masukkan Department"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
          </div>
        </div>
    );
}

export default AddWoroNew;
