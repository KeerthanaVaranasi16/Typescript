"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeDetails = exports.greet = void 0;
function greet() {
    console.log("Hello..");
}
exports.greet = greet;
function getEmployeeDetails(empDetails) {
    console.log(empDetails.empname);
    console.log(empDetails.id);
}
exports.getEmployeeDetails = getEmployeeDetails;
