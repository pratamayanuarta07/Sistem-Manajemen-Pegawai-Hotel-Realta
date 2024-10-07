const route = require('express').Router();
const { users, department, work_orders,work_order_details, job_role, facilities, service_task, shift, employee, employee_pay_history, employee_department_history } = require("../models");
const upload2 = require("../middleware/upload");
const { get_dept, get_by_name, insert_dept, update_dept } = require('../controller/department');
const { get_emp, get_emp_by_name, get_emp_by_status, insert_emp, update_emp, get_emp_pay_history, get_emp_dept_history, } = require('../controller/employee');
const { get_work_order, get_work_by_status_order, get_work_by_date_order, insert_work_order, update_work_order, get_work_order_detail, insert_work_order_detail, update_work_order_detail, delete_work_order_detail } = require('../controller/work_orders');



route.get('/department', get_dept);
route.get('/search_dept/:name', get_by_name);
route.post('/department', insert_dept);
route.patch('/department/:id', update_dept);


route.get('/employee', get_emp);
route.get('/employee_name/:name', get_emp_by_name);
route.get('/employee_flag/:flag', get_emp_by_status);
route.post('/employee', upload2.single('file'), insert_emp);
route.patch('/employee/:id', upload2.single('file'), update_emp);
route.get('/pay_history/:id', get_emp_pay_history);
route.get('/dept_history/:id', get_emp_dept_history);


route.get('/work_order', get_work_order);
route.get('/work_order_status/:status', get_work_by_status_order);
route.get('/work_order_date/:start/:end', get_work_by_date_order);
route.post('/work_order', insert_work_order);
route.patch('/work_order/:id', update_work_order);


route.get('/work_order_detail/:id', get_work_order_detail);
route.post('/work_order_detail', insert_work_order_detail);
route.patch('/work_order_detail/:id', update_work_order_detail);
route.delete('/work_order_detail/:id', delete_work_order_detail);


route.get('/job_role', async (req, res) => {
    try {
        const result = await job_role.findAll({schema:'HR'});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
});

route.get('/shift', async (req, res) => {
    try {
        const result = await shift.findAll({schema:'HR'});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
});

route.get('/faci', async (req, res) => {
    try {
        const result = await facilities.findAll({schema:'HR'});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
});

route.get('/seta', async (req, res) => {
    try {
        const result = await service_task.findAll({schema:'HR'});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
});

route.get('/user', async (req, res) => {
    try {
        //const result = await service_task.update({seta_seq:3, seta_name:'likeee'},{where:{seta_id:1}, schema:'HR'});
        const result = await users.findAll({schema:'HR'});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
});


route.get('/test', async (req, res) => {
    try {
        //const result = await job_role.create({joro_name:'Junior Software Engineer'}, {schema:'HR', returning:true});
        const result = await shift.create({shift_name:'Night', shift_start_time:'19:00:00', shift_end_time:'04:00:00'}, {schema:'HR', returning:true});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
});

route.get('/test2', async (req, res) => {
    try {
        //const result = await job_role.create({joro_name:'Senior Software Engineer'}, {schema:'HR', returning:true});
        const result = await service_task.create({seta_id:1}, {schema:'HR', returning:true});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
});


route.get('/t', upload2.single('file'),async (req,res) => {
    try {
        //const result = await users.create({user_id:1});
        res.send({data:'a'});
    } catch (error) {
        res.send({error:error.message});
    }
});

route.get('/', async (req,res) => {
    try {
        const result = await employee.findAll({include:[{model:employee_department_history, required:true}, {model:employee_pay_history, required:true}]}, {schema:'HR'});
        res.send({data:result});
    } catch (error) {
        res.send({error:error.message});
    }
});

route.get('/a', async (req,res) => {
    try {
        const total = await work_orders.count({schema:'HR'});
        const result = await work_orders.count({where:{woro_status:'OPEN'}, schema:'HR'});
        const result1 = await work_orders.count({where:{woro_status:'CANCELED'}, schema:'HR'});
        const result2 = await work_orders.count({where:{woro_status:'CLOSED'}, schema:'HR'});
        let test = result;
        console.log(test);
        res.send({total:total, open:result, closed:result2, canceled:result1});
    } catch (error) {
        res.send({error:error.message});
    }
});


module.exports = route