import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  public liveDemoVisible = false;
  data:any =[
    {"id":1, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Math & Science", "status":" Active" },
    {"id":2, "batchTime":'5:00pm -6:00 pm', "class": "1xth", "department": "Social Science", "status":" Inactive" },
    {"id":3, "batchTime":'5:00pm -6:00 pm', "class": "ixth", "department": "Sankrit", "status":" Inactive" },
    {"id":4, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Phisic", "status":" Active" },
    {"id":5, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Math & Science", "status":" Inactive" },
    {"id":6, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "snk", "status":" Active" },
    {"id":7, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Sankrit", "status":" Inactive" },
    {"id":8, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "All", "status":" Active" },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      batchTime:new FormControl(''),
      class:new FormControl(''),
      department:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      batchTime:'',
      class:'',
      department:'',
      status:'',
     });
  }

  saveNewData(){
    alert('I am in progress, thanku');
    this.toggleLiveDemo();
  }
  createBatches(){
    this.initForm();
    alert('I am in progress, thanku')

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

  // onSubmit(){
  //   alert('hadhdachchdgh');
  //   console.log('form value',this.form.value);
  // }
}
