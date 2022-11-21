import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import {BatchService} from '../../../services/batch/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {
  timePicker1: string = "10:0:0 AM";
  public liveDemoVisible = false;
  batchList:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  // data:any =[
  //   {"id":1, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Math & Science", "status":" Active" },
  //   {"id":2, "batchTime":'5:00pm -6:00 pm', "class": "1xth", "department": "Social Science", "status":" Inactive" },
  //   {"id":3, "batchTime":'5:00pm -6:00 pm', "class": "ixth", "department": "Sankrit", "status":" Inactive" },
  //   {"id":4, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Phisic", "status":" Active" },
  //   {"id":5, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Math & Science", "status":" Inactive" },
  //   {"id":6, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "snk", "status":" Active" },
  //   {"id":7, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "Sankrit", "status":" Inactive" },
  //   {"id":8, "batchTime":'5:00pm -6:00 pm', "class": "xth", "department": "All", "status":" Active" },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private commonService:CommonService,
    private batchService:BatchService) {
    this.form = this.fb.group({
      batchTime:new FormControl(''),
      class:new FormControl(''),
      // department:new FormControl(''),
      EndTime:new FormControl(''),
      board:new FormControl(''),
      status:new FormControl(''),
     });
   }

  //  we use time piucker npm i ngx-material-timepicker
  ngOnInit(): void {
    // this.initForm();
    this.getBatchList();
  }

  getBatchList(){
    this.batchService.getList().subscribe( res =>{
       console.log('result og batch list api',res);
       this.batchList =res.data;
       console.log('batchList',this.batchList);
    })
  }

  initForm(){
    this.form = this.fb.group({
      batchTime:'',
      EndTime:'',
      class:'',
      // department:'',
      status:'',
      board:'',
     });
  }

  createNewData(){
    console.log('this form data',this.form.value.batchTime);
    const data ={"board":this.form.value.board,"class_name":this.form.value.class,"batch_start_time":this.form.value.batchTime,"batch_end_time":this.form.value.EndTime,"status":this.form.value.status}
    this.batchService.addList(data).subscribe(res => {
      console.log('resut of add api', res)
      if(res.success == true){
        this.getBatchList();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }
  createBatches(){
    this.isedit=false;
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
    this.editIdi = data._id;
console.log('data batch',data);
const patchData = {batchTime:data.batch_start_time, EndTime:data.batch_end_time, class:data.class_name,  status:data.status, board:data.board,}
this.form.patchValue(patchData);
// this.form.setValue(data);
  }
  saveEditData(){
    const updatedData ={"board":this.form.value.board,"class_name":this.form.value.class,"batch_start_time":this.form.value.batchTime,"batch_end_time":this.form.value.EndTime,"status":this.form.value.status}
    console.log('this form data',updatedData);
    this.batchService.updateApi(this.editIdi,updatedData).subscribe(res => {
      // console.log('result of batch update api',res);
      if(res.success == true){
        this.getBatchList();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
  }

  deleteModala(param:any){
    this.deleteIdi = param._id;
    console.log('Delete param',this.deleteIdi);
  }

  delete1(){
this.batchService.deleteApi(this.deleteIdi).subscribe(res=> {
  // console.log('result of deletre api',res);
  if(res.success == true){
    this.getBatchList();
  }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
  }

  // onSubmit(){
  //   alert('hadhdachchdgh');
  //   console.log('form value',this.form.value);
  // }
}
