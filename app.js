"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./Services/hello");
(0, hello_1.greet)();
(0, hello_1.getEmployeeDetails)({
    empname: "Keerthana",
    id: 16,
});
var College = /** @class */ (function () {
    function College(name) {
        this.clgName = name;
    }
    College.prototype.wish = function () {
        console.log("Welcome");
    };
    return College;
}());
var clg = new College("SVECW");
console.log(clg.clgName);
console.log(clg.wish());
// let arr1: number[]=[1,2,3]
// let arr2: number[]=[4,5]
// arr1=[...arr1,...arr2];
// console.log(arr1)
