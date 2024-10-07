import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { addItem, addPost, addWoro, updateWoro } from '../action/user';
const EditWoroNew = () => {
    const {id, date} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState({
        userid : 1,
        start_date:date.split('T')[0],
        status:''
    });
    const [isAdd, setAdd] = useState(false);
    const add = (e) => {
        e.preventDefault();
        dispatch(updateWoro(id, item));
        setAdd(true);
    }
    console.log(item);
    const change = (e) => {
        setItem({...item, [e.target.name] : e.target.value});
    }

    useEffect(() => {
        if (isAdd) {
            Swal.fire(
              `Berhasil Mengupdate Data`,
              'Proses Update Data Berhasil',
                "success"
              );
              setAdd(false);
              navigate('/work_order');
        }
    }, [dispatch, isAdd]);
    return (
        <div>
        <h1 class="h3 mb-2 text-gray-800">Edit Work Order</h1>
        <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Editing New Data For Work Order</h6>
        </div>
        <div class="card-body">
        <form onSubmit={(e) => add(e)}>
<div class="form-group">
<label for="exampleInputEmail1">Start Date</label>
<input required name='start_date' value={item.start_date} type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => change(e)} placeholder="Masukkan Department"></input>
<label for="exampleInputEmail1">Status</label>
    <select name='status' class="form-select" aria-label="Default select example" onChange={(e) => change(e)}>
  <option selected>Open this select menu</option>
  <option value="OPEN">OPEN</option>
  <option value="CLOSED">CLOSED</option>
  <option value="CANCELED">CANCELED</option>
</select>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
      </div>
    </div>
    );
}

export default EditWoroNew;
