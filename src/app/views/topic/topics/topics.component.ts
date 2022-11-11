import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  public liveDemoVisible = false;
  data:any =[
    {"id":1,"name":'Exercise - 1.2',"status":"Active" },
    {"id":2, "name":'Exercise - 1.3',"status":"Active" },
    {"id":3, "name":'Exercise - 1.4',"status":"Inactive"},
    {"id":4, "name":'Exercise - 1.4',"status":"Active" },
    {"id":5, "name":'Exercise - 2.1',"status":"Active"  },
    {"id":6, "name":'Exercise - 2.2',"status":"Active" },
    {"id":7, "name":'Exercise - 3.1',"status":"Active" },
    {"id":8, "name":'Exercise - 3.2',"status":"Active"  },
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
