const { work_orders, work_order_details, employee, users } = require("../models");
const { Op } = require("sequelize");


const get_work_order = async (req, res) => {
    try {
        const result = await work_orders.findAll({ include:{model:users, required:true}, order: [['woro_id', 'ASC']]}, {schema:'HR'});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}

const get_work_by_status_order = async (req, res) => {
    try {
        const status = req.params.status;
        const result = await work_orders.findAll({schema:'HR', include:{model:users, required:true}, where:{woro_status:status}, order: [['woro_id', 'ASC']]});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}

const get_work_by_date_order = async (req, res) => {
    try {
        const start = req.params.start;
        const end = req.params.end;
        const result = await work_orders.findAll({schema:'HR', include:{model:users, required:true}, where:{woro_start:{[Op.between]:[start, end]}}, order: [['woro_id', 'ASC']]});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}

const insert_work_order = async (req, res) => {
    try {
        const {userid, start_date, status} = req.body;
        const result = await work_orders.create({woro_start:start_date, woro_status:status, woro_user_id:userid}, {schema:'HR', returning:true});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message})
    }
}

const update_work_order = async (req, res) => {
    try {
        const id = req.params.id;
        const {start_date, status} = req.body;
        const result = await work_orders.update({woro_start:start_date, woro_status:status}, {schema:'HR', where:{woro_id:id}, returning:true});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message})
    }
}

const get_work_order_detail = async (req, res) => {
    try {
        const id = +req.params.id;
        console.log(id);
        const result = await work_order_details.findAll({include:{model:employee, required:true}, where:{wode_woro_id:id}, order: [['wode_id', 'ASC']]}, {schema:'HR'});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}


const insert_work_order_detail = async (req, res) => {
    try {
        const {name, woro_id, emp_id, faci_id, seta_id, note, start, end, status} = req.body;
        const result = await work_order_details.create({
            wode_task_name:name, wode_status:status, wode_start_date:start, wode_end_date:end,
            wode_notes:note, wode_emp_id:emp_id, wode_seta_id:seta_id, wode_faci_id:faci_id,
            wode_woro_id:woro_id
        }, {schema:'HR', returning:true});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}

const update_work_order_detail = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, woro_id, emp_id, faci_id, seta_id, note, start, end, status} = req.body;
        const result = await work_order_details.update({
            wode_task_name:name, wode_status:status, wode_start_date:start, wode_end_date:end,
            wode_notes:note, wode_emp_id:emp_id, wode_seta_id:seta_id, wode_faci_id:faci_id,
            wode_woro_id:woro_id
        }, {schema:'HR', where:{wode_id:id}});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}

const delete_work_order_detail = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await work_order_details.destroy({schema:'HR', where:{wode_id:id}, returning:true});
        res.send({data:result, status:200, pesan:'sukses'});
    } catch (e) {
        res.send({message:e.message});
    }
}

module.exports = {get_work_order, get_work_by_status_order, get_work_by_date_order, insert_work_order, update_work_order
, get_work_order_detail, insert_work_order_detail, update_work_order_detail, delete_work_order_detail}

