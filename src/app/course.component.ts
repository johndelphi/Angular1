import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
@Component({
    selector:'courses',
    template: `
    <h2>{{title}}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})
export class CoursesComponent{

    title="Courses offered";
    courses;
    constructor(Service:CoursesService){
        this.courses=Service.getCourses();
    }

}