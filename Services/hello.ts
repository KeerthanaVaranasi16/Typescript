

export function greet(){
    console.log("Hello..");
}
interface Employee{
    empname:string
    id:number
}
export function getEmployeeDetails(empDetails:Employee){
    console.log(empDetails.empname)
    console.log(empDetails.id)
}
