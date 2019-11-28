import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee = []
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.service.getEmployee().subscribe((result)=>{

      if( result['status'] === 'success')
      {
        this.employee = result['data'] as any[]
      }
      else
      {
        console.log('error : ', result['error'])
      }
    })
  }

}
