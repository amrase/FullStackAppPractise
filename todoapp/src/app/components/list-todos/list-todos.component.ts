import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [

  //  { id: 1 ,descr : 'Learn to Dance'},
  //  { id: 2 ,descr : 'Study'},
  //  { id: 3 ,descr : 'Practise SQL'},
  //  { id: 4 ,descr : 'Buy Flowers for Sam'},
  //  { id: 5 ,descr : 'Go to Europes'},
   new Todo(1,'Learn to Dance',false,new Date()),
   new Todo(2,'Study',false,new Date()),
   new Todo(3,'Practise SQL',false,new Date()),
   new Todo(4,'Go To Europr',false,new Date()),
   new Todo(5,'Yoga',false,new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
