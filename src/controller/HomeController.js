import db from '../models/index'
import CRUD_service from '../service/CRUD_service';
let getHomepage = async (req,res) =>{
    try{
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data:JSON.stringify(data)
        });
    }catch(e){
        console.log(e);
    }
}
let getAboutpage = (req,res) =>{
    return res.render('about.ejs');
}
let getCRUD = (req,res) =>{
    return res.render('crud.ejs');
}
let postCRUD = async(req,res) =>{
    let message = await CRUD_service.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}
let displayCRUD = async(req,res) =>{
    let data = await CRUD_service.getAllUser();
    return res.render('display_crud.ejs',{
        dataTable:data
    });
}
let editCRUD = async(req,res) =>{
    let userId = req.query.id;
    if(userId){
        let userData = await CRUD_service.getUserInfoById(userId);
        return res.render('edit_crud.ejs',{
            user:userData
        });
    }
    else{
        return res.send('User not found');
    }
}
let putCRUD = async(req,res) =>{
    let data = req.body;
    let allUsers= await CRUD_service.updateUser(data);
    return res.render('display_crud.ejs',{
        dataTable:allUsers
    });

}
let deleteCRUD = async(req,res) =>{
    let userId = req.query.id;
    if(userId){
        let allUser_afterdel= await CRUD_service.deleteUserById(userId);
        return res.render('display_crud.ejs',{
            dataTable:allUser_afterdel
        })
    }
    else{
        return res.send('user not found');
    }
}
module.exports = {
    getHomepage:getHomepage,
    getAboutpage:getAboutpage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayCRUD:displayCRUD,
    editCRUD:editCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD,
}
