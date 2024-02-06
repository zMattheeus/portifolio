import { Component, Input } from '@angular/core';

@Component({
  selector: 'box-projects',
  templateUrl: './box-projects.component.html',
  styleUrls: ['./box-projects.component.css']
})
export class BoxProjectsComponent {
  @Input() titulo:string = ""
  @Input() descricao:string = ""
}
