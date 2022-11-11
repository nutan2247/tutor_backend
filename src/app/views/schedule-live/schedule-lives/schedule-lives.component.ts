import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schedule-lives',
  templateUrl: './schedule-lives.component.html',
  styleUrls: ['./schedule-lives.component.scss']
})
export class ScheduleLivesComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.reactiveForm = this.fb.group({
      title: new FormControl(''),
      schedule: new FormControl(''),
      department : new FormControl(''),
      class : new FormControl(''),
      batchTime: new FormControl(''),
      status:new FormControl(''),

    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('working')
    console.log('total Form Value',this.reactiveForm.value);
    
  }


}
