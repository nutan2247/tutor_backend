import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes/classes.service';
import { CommonService } from 'src/app/services/common/common.service';
import {LiveclassService} from '../../../services/liveClass/liveclass.service';

@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrls: ['./live-class.component.scss']
})
export class LiveClassComponent implements OnInit {

  public liveDemoVisible = false;
  classes:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  meetingLists:any[]=[];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private liveService:LiveclassService,
    private classService:ClassesService,
    private commonService:CommonService) {
    this.form = this.fb.group({
      meetingId:new FormControl(''),
      passCode:new FormControl(''),
      class:new FormControl(''),
      time:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
   this.getData();
   this.getClass();
  }

  getClass(){
this.classService.getClass().subscribe(res => {
  // console.log('class Api hit',res);
  if(res.success == true){
    this.classes = res.data;
    console.log('class Api hit',this.classes);
  }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }

  getData(){
    this.liveService.getList().subscribe(res=> {
      if(res.success == true){
        this.meetingLists = res.data;
        console.log('Live Meeting Api result',this.meetingLists);
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  initForm(){
    this.form = this.fb.group({
      meetingId:'',
      passCode:'',
      class:'',
      time:'',
     });
  }

  saveNewData(){
    // alert('I am in progress, thanku');{"class_id":"638f1a59a34d75d34cf2f30a","subject_name":"english","status":"active"}  "sub_date":new Date
  //  const addData = {"name":this.form.value.subject_name,"class_id":this.form.value.class,"status":this.form.value.status};
   const data = {"meeting_id":this.form.value.meetingId,"passcode":this.form.value.passCode,"class_id":this.form.value.class,"time":this.form.value.time};
    console.log('meeting add Data detail',data);
   this.liveService.addList(data).subscribe(res => {
    // console.log('Add result result',res);
    if(res.success == true){
      this.getData();
    }
   },
   (err)=>{
     console.log('Topic List Api Error',err.error);
     this.commonService.tokenDelete(err.error.msg);
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
    console.log('datagasdfgafga',data);
    this.isedit = true;
    // this.getClass();
    this.editIdi = data._id;
const datas = {meetingId:data.meeting_id,  passCode: data.passcode, class:data.class_id, time:data.time};
this.form.patchValue(datas);
  }
  // meetingId:'',
  // passCode:'',
  // class:'',
  // time:''

  saveEditData(){
 const patchData = {"meeting_id":this.form.value.meetingId,"passcode":this.form.value.passCode,"class_id":this.form.value.class,"time":this.form.value.time};
 console.log('this.editId List Api Error',this.editIdi);
 this.liveService.updateApi(this.editIdi,patchData).subscribe(res => {
  if(res.success == true){
    this.getData();
  }
 },
 (err)=>{
   console.log('Topic List Api Error',err.error);
   this.commonService.tokenDelete(err.error.msg);
 })
  }

  deleteId(param:any){
    this.deleteIdi = param._id;
    console.log('delete data',param);
      }
    
      delete1(){
    this.liveService.deleteApi(this.deleteIdi).subscribe(res => {
      console.log('result',res);
      if(res.success == true){
        this.getData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
      }


}

