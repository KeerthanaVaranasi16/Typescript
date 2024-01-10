import { getEmployeeDetails, greet } from "./Services/hello";
greet();

getEmployeeDetails({
  empname: "Keerthana",
  id: 16,
});

class College {
  clgName: string;
  constructor(name: string) {
    this.clgName = name;
  }
  wish() {
    console.log("Welcome");
  }
}
let clg = new College("SVECW");
console.log(clg.clgName);
console.log(clg.wish());


// let arr1: number[]=[1,2,3]
// let arr2: number[]=[4,5]
// arr1=[...arr1,...arr2];
// console.log(arr1)