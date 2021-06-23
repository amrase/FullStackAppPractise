import { Component,OnInit } from "@angular/core";

export class Todo {
    constructor(public id:number,public descr:string,public done:boolean,public targetDate:Date){

    }
}
