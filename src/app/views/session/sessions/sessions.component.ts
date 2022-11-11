import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  public liveDemoVisible = false;
  data:any =[
    {"id":1,"name":'2020-2021',"status":"Active" },
    {"id":2, "name":'2019-2020',"status":"Active" },
    {"id":3, "name":'2020-2021',"status":"Inactive"},
    {"id":4, "name":'2020-2021',"status":"Active" },
    {"id":5, "name":'2022-2023',"status":"Active"  },
    {"id":6, "name":'2020-2021',"status":"Active" },
    {"id":7, "name":'2020-2021',"status":"Active" },
    {"id":8, "name":'2020-2021',"status":"Active"  },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name:'',
      status:'',
     });
  }

  saveNewData(){
    alert('I am in progress, thanku');
    // this.toggleLiveDemo();
    console.log('reactive form',this.form.value);
  }
  create(){
    this.initForm();
    // alert('I am in progress, thanku')

  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  edit(data:any){
console.log('data',data);
this.form.patchValue(data);
// this.form.setValue(data);
  }


}
