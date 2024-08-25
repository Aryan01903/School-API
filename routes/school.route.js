const school_controller=require("../controllers/school.controller")

module.exports=(app)=>{
    app.post("/school/api/v1/addSchool",school_controller.createNewSchool)

   app.get("/school/api/v1/listSchool",school_controller.getAllSchools)
}