const { employee, employee_pay_history, employee_department_history, department, shift } = require("../models");
const { Op } = require("sequelize");
const fs = require('fs');




const get_emp = async (req, res) =>{
    try {
        const result = await employee.findAll({order: [['emp_id', 'ASC']]}, {schema:'HR'});
        res.send({data:result, status:200, pesan:'sukses'});        
    } catch (e) {
        res.send({message:e.message});
    }
}

const get_emp_by_status = async (req, res) => {
    try {
        const flag = req.params.flag;
        const result = await employee.findAll({schema:'HR', where:{emp_current_flag:flag}});
        res.send({data:result, status:200, pesan:'sukses'});        
    } catch (e) {
        res.send({message:e.message});
    }
}

const get_emp_by_name = async (req, res) =>{
    try {
        const name = req.params.name;
        const result = await employee.findAll({schema:'HR', where:{emp_fullname:{[Op.iLike]:`%${name}%`}}, order: [['emp_id', 'ASC']]});
        res.send({data:result, status:200, pesan:'sukses'});        
    } catch (e) {
        res.send({message:e.message});
    }
}

const insert_emp = async (req, res) => {
    try {
        if (req.file) {
            const date = new Date();
            const {national_id, fullname, birth_date, hire_date, martial_status, gender, salaries_flag, current_flag, vacation_hour,
            sickleave, job_role, salary_rate, frequency, department, start_date, end_date, shift, change_date} = req.body;
            if (national_id.length > 25) {
                const path = `./public/profile/${req.file.filename}`;
                fs.unlinkSync(path);
                res.send({status:400, pesan:'National ID Lebih Dari 25'});
            }
            else{
                const url = `${req.protocol}://${req.get('host')}/profile/${req.file.filename}`;
                const result = await employee.create({emp_national_id:national_id, emp_fullname:fullname, emp_birth_date:birth_date,
                emp_hire_date:hire_date, emp_martial_status:martial_status, emp_gender:gender, emp_salaries_flag:salaries_flag,
                emp_current_flag:current_flag, emp_vacarion_hours:vacation_hour, emp_sickleave_hours:sickleave, emp_joro_id:job_role,
                emp_photo:url, emp_modified_date:date
                }, {schema:'HR', returning:true});
                const result2 = await employee_pay_history.create({ephi_emp_id:result.dataValues.emp_id, ephi_rate_salary:salary_rate,
                ephi_pay_frequence:frequency, ephi_modified_date:date, ephi_rate_change_date:change_date}, {schema:'HR', returning:true});
                const result3 = await employee_department_history.create({edhi_emp_id:result.dataValues.emp_id,
                edhi_start_date:start_date, edhi_end_date:end_date, edhi_dept_id:department, edhi_shift_id:shift,
                edhi_modified_date:date}, {schema:'HR', returning:true});
                res.send({data:result, status:200, pesan:'sukses'});
            }
        }
        else{
            const date = new Date();
            const {national_id, fullname, birth_date, hire_date, martial_status, gender, salaries_flag, current_flag, vacation_hour,
            sickleave, job_role, salary_rate, frequency, department, start_date, end_date, shift, change_date} = req.body;
            if (national_id.length > 25) {
                res.send({status:400, pesan:'National ID Lebih Dari 25'});
            }
            else{
                const url = `${req.protocol}://${req.get('host')}/profile/default.jpg`;
                const result = await employee.create({emp_national_id:national_id, emp_fullname:fullname, emp_birth_date:birth_date,
                emp_hire_date:hire_date, emp_martial_status:martial_status, emp_gender:gender, emp_salaries_flag:salaries_flag,
                emp_current_flag:current_flag, emp_vacarion_hours:vacation_hour, emp_sickleave_hours:sickleave, emp_joro_id:job_role,
                emp_photo:url, emp_modified_date:date
            }, {schema:'HR', returning:true});
                const result2 = await employee_pay_history.create({ephi_emp_id:result.dataValues.emp_id, ephi_rate_salary:salary_rate,
                ephi_pay_frequence:frequency, ephi_modified_date:date, ephi_rate_change_date:change_date}, {schema:'HR', returning:true});
                const result3 = await employee_department_history.create({edhi_emp_id:result.dataValues.emp_id,
                edhi_start_date:start_date, edhi_end_date:end_date, edhi_dept_id:department, edhi_shift_id:shift,
                edhi_modified_date:date}, {schema:'HR', returning:true});
                res.send({data:result, status:200, pesan:'sukses'});
            }
            
        }
    } catch (e) {
        if (req.file) {
            const path = `./public/profile/${req.file.filename}`;
            fs.unlinkSync(path);
        }
        res.send({message:e.message})
    }
}

const update_emp = async (req, res) => {
    try {
        if (req.file) {
            const image= req.body.image;
            if (image != 'default.jpg') {
                const id = req.params.id;
                const date = new Date();
                const {national_id, fullname, birth_date, hire_date, martial_status, gender, salaries_flag, current_flag, vacation_hour,
                sickleave, job_role, salary_rate, frequency, department, start_date, end_date, shift, change_date} = req.body;
                if (national_id.length > 25) {
                    res.send({status:400, pesan:'National ID Lebih Dari 25'});
                }
                else{
                    const url = `${req.protocol}://${req.get('host')}/profile/${req.file.filename}`;
                    const result = await employee.update({emp_national_id:national_id, emp_fullname:fullname, emp_birth_date:birth_date,
                    emp_hire_date:hire_date, emp_martial_status:martial_status, emp_gender:gender, emp_salaries_flag:salaries_flag,
                    emp_current_flag:current_flag, emp_vacarion_hours:vacation_hour, emp_sickleave_hours:sickleave, emp_joro_id:job_role,
                    emp_photo:url, emp_modified_date:date
                    }, {schema:'HR', where:{emp_id:id},returning:true});
                    const result2 = await employee_pay_history.update({ephi_rate_salary:salary_rate,
                    ephi_pay_frequence:frequency, ephi_modified_date:date, ephi_rate_change_date:change_date},
                    {schema:'HR', where:{ephi_emp_id:id}, returning:true});
                    const result3 = await employee_department_history.update({
                    edhi_start_date:start_date, edhi_end_date:end_date, edhi_dept_id:department, edhi_shift_id:shift,
                    edhi_modified_date:date}, {schema:'HR', where:{edhi_emp_id:id}});
                    const path = `./public/profile/${image}`;
                    fs.unlinkSync(path);
                    res.send({data:result, status:200, pesan:'sukses'});  
                }
            }
            else{
                const id = req.params.id;
                const date = new Date();
                const {national_id, fullname, birth_date, hire_date, martial_status, gender, salaries_flag, current_flag, vacation_hour,
                sickleave, job_role, salary_rate, frequency, department, start_date, end_date, shift, change_date} = req.body;
                if (national_id.length > 25) {
                    const path = `./public/profile/${req.file.filename}`;
                    fs.unlinkSync(path);
                    res.send({status:400, pesan:'National ID Lebih Dari 25'});
                }
                else{
                    const url = `${req.protocol}://${req.get('host')}/profile/${req.file.filename}`;
                    console.log(url);
                    const result = await employee.update({emp_national_id:national_id, emp_fullname:fullname, emp_birth_date:birth_date,
                    emp_hire_date:hire_date, emp_martial_status:martial_status, emp_gender:gender, emp_salaries_flag:salaries_flag,
                    emp_current_flag:current_flag, emp_vacarion_hours:vacation_hour, emp_sickleave_hours:sickleave, emp_joro_id:job_role,
                    emp_photo:url, emp_modified_date:date
                    }, {schema:'HR', where:{emp_id:id}, returning:true});
                    const result2 = await employee_pay_history.update({ephi_rate_salary:salary_rate,
                    ephi_pay_frequence:frequency, ephi_modified_date:date, ephi_rate_change_date:change_date},
                    {schema:'HR', where:{ephi_emp_id:id}, returning:true});
                    const result3 = await employee_department_history.update({
                    edhi_start_date:start_date, edhi_end_date:end_date, edhi_dept_id:department, edhi_shift_id:shift,
                    edhi_modified_date:date}, {schema:'HR', where:{edhi_emp_id:id}});
                    res.send({data:result, status:200, pesan:'sukses'});
                }
            }
        }
        else{
                const id = req.params.id;
                const date = new Date();
                const {national_id, fullname, birth_date, hire_date, martial_status, gender, salaries_flag, current_flag, vacation_hour,
                sickleave, job_role, salary_rate, frequency, department, start_date, end_date, shift, change_date} = req.body;
                if (national_id.length > 25) {
                    res.send({status:400, pesan:'National ID Lebih Dari 25'});
                }
                else{
                    const result = await employee.update({emp_national_id:national_id, emp_fullname:fullname, emp_birth_date:birth_date,
                    emp_hire_date:hire_date, emp_martial_status:martial_status, emp_gender:gender, emp_salaries_flag:salaries_flag,
                    emp_current_flag:current_flag, emp_vacarion_hours:vacation_hour, emp_sickleave_hours:sickleave, emp_joro_id:job_role,
                    emp_modified_date:date
                    }, {schema:'HR', where:{emp_id:id}, returning:true});
                    const result2 = await employee_pay_history.update({ephi_rate_salary:salary_rate,
                    ephi_pay_frequence:frequency, ephi_modified_date:date, ephi_rate_change_date:change_date},
                    {schema:'HR', where:{ephi_emp_id:id}, returning:true});
                    const result3 = await employee_department_history.update({
                    edhi_start_date:start_date, edhi_end_date:end_date, edhi_dept_id:department, edhi_shift_id:shift,
                    edhi_modified_date:date}, {schema:'HR', where:{edhi_emp_id:id}});
                    res.send({data:result, status:200, pesan:'sukses'});
                }
                
        }
    } catch (e) {
        if (req.file) {
            const path = `./public/profile/${req.file.filename}`;
            fs.unlinkSync(path);
        }
        res.send({message:e.message})
    }
}


const get_emp_pay_history = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await employee_pay_history.findAll({where:{ephi_emp_id:id}});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
}

const get_emp_dept_history = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await employee_department_history.findAll({include:[{model:department, required:true}, {model:shift, required:true}], where:{edhi_emp_id:id}});
        res.send({data:result});
    } catch (e) {
        res.send(e.message);
    }
}

module.exports = {get_emp, get_emp_by_name, get_emp_by_status, insert_emp, update_emp, get_emp_pay_history, get_emp_dept_history}
