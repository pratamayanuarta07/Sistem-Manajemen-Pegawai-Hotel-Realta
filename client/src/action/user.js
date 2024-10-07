import axios from 'axios';

export const GET_ITEM = "GET_ITEM";
export const GET_SELF = "GET_SELF";
export const GET_EMP_DEPT = "GET_EMP_DEPT";
export const GET_EMP_SALARY = "GET_EMP_SALARY";
export const GET_EMP = "GET_EMP";
export const ADD_ITEM = "ADD_ITEM";
export const ADD_WORO = "ADD_WORO";
export const ADD_WODE = "ADD_WODE";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_WODE = "DELETE_WODE";
export const LOGIN = "LOGIN";
export const REFRESH = "REFRESH";
export const ADD_POST = "ADDPOST";
export const ADD_EMP = "ADD_EMP";
export const GET_POSTING = "GET_POSTING";
export const UPDATE_POSTING = "UPDATE_POSTING";
export const GET_POSTING1 = "GET_POSTING1";
export const UPDATE_POSTING1 = "UPDATE_POSTING1";
export const GET_ONE = "GET_ONE";
export const PICK_ONE = "PICK_ONE";
export const UPDATE_USR = "UPDATE_USR";
export const UPDATE_WORO = "UPDATE_WORO";
export const UPDATE_WODE = "UPDATE_WODE";
export const GET_EMP_NAME = "GET_EMP";
export const GET_WORO = "GET_WORO";
export const GET_WODE = "GET_WODE";
export const GET_WORO_BY_DATE = "GET_WORO";

//pakek
export const getWoroByDate = (start, end) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_WORO_BY_DATE,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: `http://localhost:3400/work_order_date/${start}/${end}`,
                         })
            .then((response) => {
                console.log('30. Berhasil Dapet Data : ', response.data.data);
                dispatch({
                    type: GET_WORO_BY_DATE,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_WORO_BY_DATE,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const getWoro = () =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_WORO,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: "http://localhost:3400/work_order/",
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data.data);
                dispatch({
                    type: GET_WORO,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_WORO,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const getWode = (id) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_WODE,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: "http://localhost:3400/work_order_detail/"+id,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data.data);
                dispatch({
                    type: GET_WODE,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_WODE,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const getEmpSalary = (id) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_EMP_SALARY,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: "http://localhost:3400/pay_history/"+id,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data.data);
                dispatch({
                    type: GET_EMP_SALARY,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_EMP_SALARY,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const getEmpDept = (id) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_EMP_DEPT,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: "http://localhost:3400/dept_history/"+id,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data.data);
                dispatch({
                    type: GET_EMP_DEPT,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_EMP_DEPT,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}




//pakek
export const getSelf = () =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_SELF,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: "http://localhost:3400/department/",
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data.data);
                dispatch({
                    type: GET_SELF,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_SELF,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}





//pakek
export const getItem = (name) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_ITEM,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: `http://localhost:3400/search_dept/${name}`,
                         })
            .then((response) => {
                console.log('4. Berhasil Dapet Data : ', response);
                dispatch({
                    type: GET_ITEM,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_ITEM,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const getEmp = () =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_EMP,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: `http://localhost:3400/employee`,
                         })
            .then((response) => {
                console.log('4. Berhasil Dapet Data : ', response);
                dispatch({
                    type: GET_EMP,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_EMP,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const getEmpName = (name) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: GET_EMP_NAME,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "GET",
            url: `http://localhost:3400/employee_name/`+name,
                         })
            .then((response) => {
                console.log('4. Berhasil Dapet Data : ', response);
                dispatch({
                    type: GET_EMP_NAME,
                    payload: {
                        loading: false,
                        data:response.data.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: GET_EMP_NAME,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}


//pakek
export const addWoro = (data1) =>{
    return (dispatch) => {
        console.log('2. Masuk Action');
        dispatch({
            type: ADD_WORO,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "POST",
            url: "http://localhost:3400/work_order",
            data:data1
             })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data);
                //sessionStorage.setWORO('msg', response.data.status);
                dispatch({
                    type: ADD_WORO,
                    payload: {
                        loading: false,
                        data:response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                console.log('3. Gagal', err.message);
                dispatch({
                    type: ADD_WORO,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const addWode = (data1) =>{
    return (dispatch) => {
        console.log('2. Masuk Action');
        dispatch({
            type: ADD_WODE,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "POST",
            url: "http://localhost:3400/work_order_detail",
            data:data1
             })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data);
                //sessionStorage.setWODE('msg', response.data.status);
                dispatch({
                    type: ADD_WODE,
                    payload: {
                        loading: false,
                        data:response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                console.log('3. Gagal', err.message);
                dispatch({
                    type: ADD_WODE,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const addItem = (data1) =>{
    return (dispatch) => {
        console.log('2. Masuk Action');
        dispatch({
            type: ADD_ITEM,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "POST",
            url: "http://localhost:3400/department",
            data:data1
             })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data);
                //sessionStorage.setItem('msg', response.data.status);
                dispatch({
                    type: ADD_ITEM,
                    payload: {
                        loading: false,
                        data:response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                console.log('3. Gagal', err.message);
                dispatch({
                    type: ADD_ITEM,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}



//pakek
export const deleteWode = (id, image) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: DELETE_WODE,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "DELETE",
            url: `http://localhost:3400/work_order_detail/${id}`,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data);
                dispatch({
                    type: DELETE_WODE,
                    payload: {
                        loading: false,
                        data:response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                console.log('3. Gagal', err.message);
                dispatch({
                    type: DELETE_WODE,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}







//pakek
export const addPost = (data1) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: ADD_POST,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "POST",
            url: "http://localhost:3400/employee",
            data:data1,
            headers:{'Content-Type': 'multipart/form-data'}
             })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response.data);
                //sessionStorage.setItem('msg', response.data.status);
                dispatch({
                    type: ADD_POST,
                    payload: {
                        loading: false,
                        data:response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                console.log('3. Gagal', err.message);
                sessionStorage.setItem('msg', 'eror');
                dispatch({
                    type: ADD_POST,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}







//pakek
export const updatePosting = (id, data1) =>{
    return (dispatch) => {
        //console.log('2. Masuk Action');
        dispatch({
            type: UPDATE_POSTING,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });

        axios({
            method: "PATCH",
            url: "http://localhost:3400/employee/"+id,
            data:data1,
            headers:{'Content-Type': 'multipart/form-data'}
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response);
                //console.log('4. Berhasil Dapet Data : ', response.data.data[0]);
                dispatch({
                    type: UPDATE_POSTING,
                    payload: {
                        loading: false,
                        data:response,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: UPDATE_POSTING,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const updateuser = (id, data1) =>{
    return (dispatch) => {
        console.log('2. Masuk Action');
        dispatch({
            type: UPDATE_USR,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });
        axios({
            method: "PATCH",
            url: "http://localhost:3400/department/"+id,
            data:data1,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response);
                //console.log('4. Berhasil Dapet Data : ', response.data.data[0]);
                dispatch({
                    type: UPDATE_USR,
                    payload: {
                        loading: false,
                        data:response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: UPDATE_USR,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const updateWoro = (id, data1) =>{
    return (dispatch) => {
        console.log('2. Masuk Action');
        dispatch({
            type: UPDATE_WORO,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });
        axios({
            method: "PATCH",
            url: "http://localhost:3400/work_order/"+id,
            data:data1,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response);
                //console.log('4. Berhasil Dapet Data : ', response.data.data[0]);
                dispatch({
                    type: UPDATE_WORO,
                    payload: {
                        loading: false,
                        data:response,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: UPDATE_WORO,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}

//pakek
export const updateWode = (id, data1) =>{
    return (dispatch) => {
        console.log('2. Masuk Action');
        dispatch({
            type: UPDATE_WODE,
            payload: {
                loading: true,
                data:false,
                errorMessage: false
            }
        });
        axios({
            method: "PATCH",
            url: "http://localhost:3400/work_order_detail/"+id,
            data:data1,
                         })
            .then((response) => {
                console.log('3. Berhasil Dapet Data : ', response);
                //console.log('4. Berhasil Dapet Data : ', response.data.data[0]);
                dispatch({
                    type: UPDATE_WODE,
                    payload: {
                        loading: false,
                        data:response,
                        errorMessage: false
                    }
                });
            })
            .catch((err) => {
                //console.log('3. Gagal', err.message);
                dispatch({
                    type: UPDATE_WODE,
                    payload: {
                        loading: false,
                        data:false,
                        errorMessage: err.message
                    }
                });
            });
    }
}