import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LayoutNew from './component/layout_new';
import DeptNew from './component/dept_new';
import AddDeptNew from './component/add_dept_new';
import EditDeptNew from './component/edit_dept_new';
import EmployeeNew from './component/employee_new';
import AddEmployeeNew from './component/add_employee_new';
import EditEmployeeNew from './component/edit_employee_new';
import WorkOrderNew from './component/work_order_new';
import AddWoroNew from './component/add_woro_new';
import EditWoroNew from './component/edit_woro_new';
import WorkOrderDetailNew from './component/work_order_detail_new';
import AddWodeNew from './component/add_wode_new';
import EditWodeNew from './component/edit_wode_new';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<LayoutNew></LayoutNew>}>
            <Route index element={<DeptNew></DeptNew>}></Route>
            <Route path='/add_dept' element={<AddDeptNew></AddDeptNew>}></Route>
            <Route path='/edit_dept/:id/:name' element={<EditDeptNew></EditDeptNew>}></Route>
            <Route path='/employee' element={<EmployeeNew></EmployeeNew>}></Route>
            <Route path='/employee/add_employee' element={<AddEmployeeNew></AddEmployeeNew>}></Route>
            <Route path='/edit_employee/:national_id/:id/:fullname/:birth_date/:hire_date/:image' element={<EditEmployeeNew></EditEmployeeNew>}></Route>
            <Route path='/work_order' element={<WorkOrderNew></WorkOrderNew>}></Route>
            <Route path='/work_order/add_woro' element={<AddWoroNew></AddWoroNew>}></Route>
            <Route path='/edit_woro/:id/:date' element={<EditWoroNew></EditWoroNew>}></Route>
            <Route path='/work_order_detail/' element={<WorkOrderDetailNew></WorkOrderDetailNew>}></Route>
            <Route path='/work_order_detail/add_wode' element={<AddWodeNew></AddWodeNew>}></Route>
            <Route path='/edit_wode/:id/:task_name/:start/:end/:note' element={<EditWodeNew></EditWodeNew>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
