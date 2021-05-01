import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.scss']
})
export class AddEmployeeFormComponent implements OnInit {

    // properties


    employeeForm = this.fb.group({
      title:['',Validators.required], 
      address:['']
    })

    // constructors
    constructor(private fb: FormBuilder) { 
    }

    // Settters and Getters
    // Lifecycles
    ngOnInit(): void {
    }
}
