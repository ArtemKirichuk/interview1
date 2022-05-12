import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ifUsr, SUsrService } from '../s-usr.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  subUsr!:Subscription
  aUsr:ifUsr[] = []
  bLoad = true
  aDisplayedColumns:string[] = []
  
  
  constructor(private sUsr:SUsrService) {  
    sUsr.obUsr.subscribe((usr)=>{
      this.aUsr = this.aUsr.concat(usr);
    })
  }
  
  ngOnInit(): void {
    
    this.subUsr = this.sUsr.fnGetUsr().subscribe((aUsr)=>{
      this.bLoad =false
      if(aUsr.length && !this.aDisplayedColumns.length)
      this.aDisplayedColumns = Object.keys(aUsr[0]).map((i)=>{ return i});
      this.aUsr = aUsr.slice()
    })
  }

}
