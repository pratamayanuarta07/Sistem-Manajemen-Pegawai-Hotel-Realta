const { users, department, job_role } = require("../models");
const { Op } = require("sequelize");
const get_dept = async (req, res) =>{
    try {
        console.log(req.body);
        console.log(req.body.faci_name);
        const result = await department.findAll({order: [['dept_id', 'ASC']]}, {schema:'HR'});
        res.send({data:result, status:200, pesan:'sukses'});        
    } catch (e) {
        res.send({message:e.message});
    }
}

const get_by_name = async (req, res) =>{
    try {
        const name = req.params.name;
        console.log(name);
        const result = await department.findAll({schema:'HR', where:{dept_name:{[Op.iLike]:`%${name}%`}}, order: [['dept_id', 'ASC']]});
        res.send({data:result, status:200, pesan:'sukses'});        
    } catch (e) {
        res.send({message:e.message});
    }
}

const insert_dept = async (req, res) => {
    try {
        const {name} = req.body;
        if (name.length > 50) {
            res.send({status:400, pesan:'Panjang Lebih Dari 50'});
        }
        else{
            const date = new Date();
            const result = await department.create({dept_name:name, dept_modified_date:date}, {schema:'HR', returning:true});
            res.send({data:result, status:200, pesan:'sukses'});
        }
    } catch (e) {
        res.send({message:e.message});
    }
}

const update_dept = async (req, res) => {
    try {
        const id = req.params.id;
        const {name} = req.body;
        if (name.length > 50) {
            res.send({status:400, pesan:'Panjang Lebih Dari 50'});
        }
        else{
            const date = new Date();
            const result = await department.update({dept_name:name, dept_modified_date:date}, {schema:'HR', where:{dept_id:id}, returning:true});
            res.send({data:result, status:200, pesan:'sukses'});
        }
        
    } catch (e) {
        res.send({message:e.message})
    }
}

module.exports = {get_dept, get_by_name, insert_dept, update_dept};