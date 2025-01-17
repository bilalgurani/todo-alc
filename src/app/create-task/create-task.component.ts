import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  imports: [
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  taskName: string | undefined;
  tagsNames: string | undefined;
  createdOn: (new () => Date) | undefined;
  addTask() {
  }

  clearSearch() {
    this.taskName = '';
    this.tagsNames = '';
    this.createdOn = undefined;
    // Filter will return the new array
    // console.log(this.jsonData.filter((each: any) => {
    //   return each.gender === 'Male';
    // }))
    // map will return the array
    // console.log(this.jsonData.map((each: any) => {
    //   return each.first_name
    // }))
    // SOME will return true/false
    // console.log(this.jsonData.some((atLeast: any) => {
    //   return atLeast.first_name === "Jeanette";
    // }))
    // SORT will return ascending order if we do a-b and descending b-a
    // console.log(this.jsonData.sort((a: any, b: any)=> {
    //   return b.id - a.id;
    // }))
  //   Reduce will return array.reduce(callback, initialValue);
  //   console.log(this.jsonData.reduce((acc: any, current: any) => acc + current.id, 0))
  //   console.log(this.jsonData.reduce((a: any, curr: any) => Math.max(a, curr.id), 0));
    const num = [1, 2, 3, 4, 5];
    const str = ["bilal", "khan", "c"];
    this.getFirstElement<Number>(num);
    this.getFirstElement<String>(str);
  }

  getFirstElement<ElementType>(elements: ElementType[]) {
    console.log(elements[0])
    return elements[0];
  }

   jsonData: any = [{
    "id": 4,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212"
  }, {
    "id": 1,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255"
  }, {
    "id": 3,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26"
  }];




}
