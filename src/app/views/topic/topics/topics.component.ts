import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {TopicService} from '../../../services/topic/topic.service';
import {CommonService} from '../../../services/common/common.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  public liveDemoVisible = false;
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  listData:any[]=[];
  // data:any =[
  //   {"id":1,"name":'Exercise - 1.2',"status":"Active" },
  //   {"id":2, "name":'Exercise - 1.3',"status":"Active" },
  //   {"id":3, "name":'Exercise - 1.4',"status":"Inactive"},
  //   {"id":4, "name":'Exercise - 1.4',"status":"Active" },
  //   {"id":5, "name":'Exercise - 2.1',"status":"Active"  },
  //   {"id":6, "name":'Exercise - 2.2',"status":"Active" },
  //   {"id":7, "name":'Exercise - 3.1',"status":"Active" },
  //   {"id":8, "name":'Exercise - 3.2',"status":"Active"  },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private topicService:TopicService,
    private commonService:CommonService) {
    this.form = this.fb.group({
      name:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getListAPiData();
  }

  getListAPiData(){
    this.topicService.getList().subscribe(res => {
      // console.log('result of topic service',res);
      if(res.success == true){
        this.listData = res.data;
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error?.msg);
    })
  }

  initForm(){
    this.form = this.fb.group({
      name:'',
      status:'',
     });
  }

  saveNewData(){
    // this.toggleLiveDemo();
    console.log('reactive form',this.form.value);
    this.topicService.addList(this.form.value).subscribe(res=>{
      // console.log('topic api heating',res);
      if(res.success == true){
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })

  }
  createNew(){
    this.isedit=false;
  }
  close(){
    
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
    this.isedit=true;
    this.editIdi=data._id;
this.form.patchValue(data);
// this.form.setValue(data);
  }

  saveEditData(){
    console.log('EDitdata',this.form.value);
    this.topicService.updateApi(this.editIdi,this.form.value).subscribe(res => {
      // console.log('result of update api',res);
      if(res.success == true){
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }
  deleteId(param:any){
    // console.log('Delete data',param);
    this.deleteId = param._id;
  }

  delete1(){
    this.topicService.deleteApi(this.deleteId).subscribe(res=> {
      // console.log(res);
      if(res.success == true){
        this.getListAPiData();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }


}
