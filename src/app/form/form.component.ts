import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ifUsr, SUsrService } from '../s-usr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  oFormAddUsr = new FormGroup({
    name: new FormControl(''),
    birth_year: new FormControl('')
  }
  )
  constructor(private sUsr: SUsrService) { }
  fnAddUsr() {
    debugger;
    let oDataForm: ifUsr = this.oFormAddUsr.value
    this.sUsr.obUsr.next(oDataForm);
    this.oFormAddUsr.reset()
    // this.sUsr.fnSetUsr(oDataForm)
    //   .subscribe({
    //     next: next => console.log(next),
    //     error: err => console.error(err)
    //   })
  }
  ngOnInit(): void {


  }

}
