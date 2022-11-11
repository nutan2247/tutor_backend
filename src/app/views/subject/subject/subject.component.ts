import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SubjectService} from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public liveDemoVisible = false;
  subjectData:any[]=[];
  // data:any =[
  //   {"id":1,"name":'Math', "department":"math & Science", "status":"Active" },
  //   {"id":2, "name":'Science', "department":"math & Science","status":"Active" },
  //   {"id":3, "name":'Sankrit', "department":"Sankrit & Science","status":"Inactive"},
  //   {"id":4, "name":'Hindi', "department":"math & Hindi","status":"Active" },
  //   {"id":5, "name":'English', "department":"math & English","status":"Active"  },
  //   {"id":6, "name":'S.Science', "department":"S.Science & Science","status":"Active" },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private subjectService:SubjectService) {
    this.form = this.fb.group({
      name:new FormControl(''),
      // department:new FormControl(''),
      class:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
   this.getData();
  }

  getData(){
    this.subjectService.getData().subscribe(res=> {
      if(res.success == true){
        this.subjectData = res.data;
        console.log('Subject Api result',this.subjectData);
      }
    },
    (err)=>{
      console.log('get Error',err);
    })
  }

  initForm(){
    this.form = this.fb.group({
      name:'',
      // department:'',
      class:'',
      status:'',
     });
  }

  saveNewData(){
    // alert('I am in progress, thanku');
    const formData = { "sub_id":this.form.value.name, "sub_name":this.form.value.name, "class_id":this.form.value.name, "sub_status":this.form.value.status};
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
const datas = {name:data.subject_name, department:data.department_name, status: data.sub_status};
this.form.patchValue(datas);
// this.form.setValue(data);
  }


}
