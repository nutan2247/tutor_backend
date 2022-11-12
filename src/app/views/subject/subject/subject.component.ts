import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SubjectService} from 'src/app/services/subject/subject.service';
import {ClassesService} from '../../../services/classes/classes.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public liveDemoVisible = false;
  classes:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
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
    private subjectService:SubjectService,
    private classService:ClassesService) {
    this.form = this.fb.group({
      subject_name:new FormControl(''),
      // department:new FormControl(''),
      class:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
   this.getData();
  //  this.getClass();
  }

  getClass(){
this.classService.getClass().subscribe(res => {
  // console.log('class Api hit',res);
  if(res.success == true){
    this.classes = res.data;
    console.log('class Api hit',this.classes);
  }
})
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
      subject_name:'',
      // department:'',
      class:'',
      status:'',
     });
  }

  saveNewData(){
    // alert('I am in progress, thanku');
   const addData = {"subject_name":this.form.value.subject_name,"admin_id":this.form.value.class,"sub_status":this.form.value.status,"sub_date":new Date}
    console.log('addData detail',addData);
   this.subjectService.addList(addData).subscribe(res => {
    // console.log('Add result result',res);
    if(res.success == true){
      this.getData();
    }
   })
  }

  create(){
    this.isedit = false;
    this.initForm();
    this.getClass();
    // alert('I am in progress, thanku')

  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  edit(data:any){
    this.isedit = true;
    this.getClass();
    this.editIdi = data._id;
console.log('data',data);
const datas = {subject_name:data.subject_name,  status: data.sub_status, class:data.admin_id};
this.form.patchValue(datas);

  }
  saveEditData(){
 const patchData = {"subject_name":this.form.value.subject_name,"admin_id":this.form.value.class,"sub_status":this.form.value.status,"sub_date":new Date};
 this.subjectService.updateApi(this.editIdi,patchData).subscribe(res => {
  if(res.success == true){
    this.getData();
  }
 })
  }

  deleteId(param:any){
    this.deleteIdi = param._id
    console.log('delete data',param);
      }
    
      delete1(){
    this.subjectService.deleteApi(this.deleteIdi).subscribe(res => {
      console.log('result',res);
      if(res.success == true){
        this.getData();
      }
    })
      }


}
