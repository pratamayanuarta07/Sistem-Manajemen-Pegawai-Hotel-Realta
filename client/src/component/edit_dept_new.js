import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { updateuser } from '../action/user';

const EditDeptNew = () => {
    const {id, name} = useParams();
    const a = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState({
        name:name
    });
    const {updateDeptItemResult, updateDeptItemError} = useSelector((state) => state.list);
    const [isAdd, setAdd] = useState(false);
    const add = (e) => {
        e.preventDefault();
        dispatch(updateuser(id, item));
        setAdd(true);
    }
    console.log(item);
    const change = (e) => {
        setItem({[e.target.name] : e.target.value});
    }
    useEffect(() => {
        if (isAdd) {
            if (updateDeptItemResult) {
              if (updateDeptItemResult.message) {
                Swal.fire(
                  "Kesalahan Pada Input Data",
                  'Nama Department Sudah Ada',
                  "warning"
                );
                setAdd(false); 
              }
              else if (updateDeptItemResult.status === 400) {
                Swal.fire(
                  "Kesalahan Pada Input Data",
                  updateDeptItemResult.pesan,
                  "warning"
                );
                setAdd(false);
              }
              else{
                Swal.fire(
                  `Berhasil Mengupdate Data`,
                  'Proses Update Data Berhasil',
                  "success"
                );
                setAdd(false);
                navigate('/');
              }
            }
            
        }
    }, [dispatch, isAdd, updateDeptItemResult, updateDeptItemError]);

    return (
        <div>
            <h1 class="h3 mb-2 text-gray-800">Edit Department</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Editing Data For Department</h6>
            </div>
            <div class="card-body">
            <form onSubmit={(e) => add(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Department Name</label>
    <input required name='name' value={item.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => change(e)} placeholder="Masukkan Department"></input>
    <small id="emailHelp" class="form-text text-muted">Masukkan Nama Department</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
          </div>
        </div>
    );
}

export default EditDeptNew;
