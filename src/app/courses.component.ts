
import { Component } from '@angular/core';

//in order for angular to see the class, we need to export it
@Component({
    selector: 'courses', //<courses>
    template: `
        <h2>Courses</h2>
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses = ["course1", "course2", "course3"]
}