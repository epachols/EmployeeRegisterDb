class view {
    //TODO:viewAll(){
        //do this one first. simple query for all, see exercise 10 GreatBay.
    // };

    //TODO:viewMgr(){
        // bring back all manager possibilities, filter for uniqueness, set as options for choice
        // "which manager" prompt, then bring ALL employees By that manager's employee Id, sorted descending salary.
    // };

    //TODO:viewDpt(){
        // set a var equal to the department names returned by query.
        // inq.prompt which department? (choices in question involve response from querying the departments)
        //then takes selected department and brings tabularized employees by selected department (salary descending) 
    // };

    // TODO:viewRoles(){
        // bring back the roles of all the employees, filtered for uniqueness,as a table
    // };
    
    // TODO:viewBudget(){
    // this would involve querying for departments list and asking which department again
    // then taking passed department choice and bringing tabularized data as well as sum of all the 
    // "salary" items of the employees returned by department.  NOTE **this should be done after viewdept.**
    // };
}

module.exports = new view();