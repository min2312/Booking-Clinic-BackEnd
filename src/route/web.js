import express from "express";
import HomeController from "../controller/HomeController";
import userController from "../controller/usercontroller";
let router = express.Router();

let initWebroutes = (app) => {
  router.get("/", HomeController.getHomepage);
  router.get("/about", HomeController.getAboutpage);
  router.get("/crud", HomeController.getCRUD);
  router.get("/display-crud", HomeController.displayCRUD);
  router.get("/edit-crud", HomeController.editCRUD);
  router.get("/delete-crud", HomeController.deleteCRUD);
  router.post("/post-crud", HomeController.postCRUD);
  router.post("/put-crud", HomeController.putCRUD);
  router.post("/api/login", userController.HandleLogin);
  router.get("/api/get-all-user", userController.HandleGetAllUser);
  router.put("/api/edit-user", userController.HandleEditUser);
  router.post("/api/create-new-user", userController.HandleCreateNewUser);
  router.delete("/api/delete-user", userController.HandleDeleteUser);
  return app.use("/", router);
};

module.exports = initWebroutes;
