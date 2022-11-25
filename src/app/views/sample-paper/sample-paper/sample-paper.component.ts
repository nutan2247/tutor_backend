import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SamplePaperService} from '../../../services/samplePaper/sample-paper.service';
import {APP_BASE_HREF} from '@angular/common';
@Component({
  selector: 'app-sample-paper',
  templateUrl: './sample-paper.component.html',
  styleUrls: ['./sample-paper.component.scss']
})
export class SamplePaperComponent implements OnInit {

  public liveDemoVisible = false;
  base:any = APP_BASE_HREF;
  path:any ="D:/tutorApiNodejs/tutor_admin";
  samplePaperList:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;

  // data:any =[
  //   {"id":1,"title":'MAth',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
  //   {"id":2, "title":'English',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
  //   {"id":3, "title":'Physics',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Inactive"},
  //   {"id":4, "title":'Chemestry',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
  //   {"id":5, "title":'DIgital',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active"  },
  //   {"id":6, "title":'microProcessor',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
  //   {"id":7, "title":'Digital Software',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
  //   {"id":8, "title":'micro-processor',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active"  },
  // ];

  form: FormGroup;
  id:any;
  // @ViewChild('txtname', {  static: true  }) mytxt: ElementRef
  @ViewChild("fileInput") fileInput: ElementRef;
  constructor(private fb: FormBuilder,
    private samplePaperService:SamplePaperService
    ) {
    this.form = this.fb.group({
      title:new FormControl(''),
      class:new FormControl(''),
      examseating:new FormControl(''),
      stratTiming:new FormControl(''),
      timeduration:new FormControl(''),
      documnet: new FormControl(null),
      status:new FormControl(''),

     });
   }
  ngOnInit(): void {
    // console.log('viwchild',this.fileInput); 
    console.log('base',this.base);
    // this.initForm();
    this.paperList();
  }

  initForm(){
    this.form = this.fb.group({
      title:'',
      class:'',
      examseating:'',
      stratTiming:'',
      timeduration:'',
      documnet:null,
      status:'',
     });
  }

  paperList(){
    this.samplePaperService.getList().subscribe(res => {
      this.samplePaperList = res.data;
      console.log('Result of Sample ap-arew lkis',this.samplePaperList);
    })
  }
  private file: File;
  onFileChange(fileChangeEvent:any) {
    console.log('fileChangeEvent.target',fileChangeEvent.target);
    this.file = fileChangeEvent.target.files[0];
    console.log('file data form',this.file);
    console.log('this.file.name',this.file.name);
  }

  saveNewData(){
    // alert('I am in progress, thanku');
    // this.toggleLiveDemo();
    console.log('reactive form',this.form.value);

    let formData = new FormData();
    formData.append('title',this.form.value.title );
    formData.append('class_for',this.form.value.class);
    formData.append('exam_seating',this.form.value.examseating);
    formData.append('starting_time',this.form.value.stratTiming);
    formData.append('time_duration',this.form.value.timeduration);
    formData.append('upload_document',this.file, this.file.name);
    formData.append('status',this.form.value.status);
    this.samplePaperService.addList(formData).subscribe(res=>{
      console.log('smaple api add results',res);
      if(res.success == true){
        this.paperList();
        this.initForm();
      }
    })
  }
  
  openAddModal(){
    this.isedit=false;

  }

  edit(data:any){
     
    this.isedit=true;
    this.editIdi =data._id;
    const patcgData = { "title":data.title, "class":data.class_for,"examseating":data.exam_seating,"stratTiming":data.starting_time,"timeduration":data.time_duration, "status": data.status, "documnet":'D:/tutorApiNodejs/tutor_admin/'+data.upload_document };
    
console.log('patchdata',patcgData);
this.form.patchValue(patcgData);
 

// this.form.setValue(data);
  }
  saveEditData(){
    console.log('form data',this.form.value);
    
    let formData = new FormData();
    formData.append('title',this.form.value.title );
    formData.append('class_for',this.form.value.class);
    formData.append('exam_seating',this.form.value.examseating);
    formData.append('starting_time',this.form.value.stratTiming);
    formData.append('time_duration',this.form.value.timeduration);
    formData.append('upload_document',this.file, this.file.name);
    formData.append('status',this.form.value.status);
    console.log('formData',formData);
    this.samplePaperService.updateApi(this.editIdi,formData).subscribe(res=> {
      console.log('result of udate api',res);
      if(res.success == true){
        this.paperList();
        this.initForm();
      }
    },
    (err)=> {
      console.log('Api Error',err);
    })
  }
  deleteModal(param:any){
    // console.log(param)
    this.deleteIdi = param._id
  }

  delete1(){
   this.samplePaperService.deleteApi(this.deleteIdi).subscribe(res=>{
    if(res.success == true){
      this.paperList();
    }
   })
  }
  
  // toggleLiveDemo() {
  //   this.liveDemoVisible = !this.liveDemoVisible;
  // }

  // handleLiveDemoChange(event: boolean) {
  //   this.liveDemoVisible = event;
  // }
}
