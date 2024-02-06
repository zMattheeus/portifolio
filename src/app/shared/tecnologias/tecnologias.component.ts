import { Component, Input} from '@angular/core';

@Component({
  selector: 'tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent {
  @Input() text:String = ""
}
