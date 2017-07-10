import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

//in order for angular to see the class, we need to export it
@Component({
    selector: 'courses', //<courses>
    template: `
        <h2>Courses</h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl"/>
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200";
    isActive = false;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}