import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SetListService} from '../../../services/setList/set-list.service';

@Component({
  selector: 'app-questionset-list',
  templateUrl: './questionset-list.component.html',
  styleUrls: ['./questionset-list.component.scss']
})
export class QuestionsetListComponent implements OnInit {

  public liveDemoVisible = false;
  deleteIdi:any;
  editIdi:any;
  apidata:any[]=[];
  isedit:boolean=false;
  // data:any =[
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  //   {"id":1,"chapter":'SCIENCE-IX(PHY-1,CHEM-1,BIO-1)',"class":"7th", "name":"SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)","totalTime":"15", "language":"hind","totalQuestion":"10","markPerQuestion":"15" },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private setlistService:SetListService) {
    this.form = this.fb.group({
      chapter:new FormControl(''),
      name:new FormControl(''),
      language:new FormControl(''),
      class:new FormControl(''),
      subject:new FormControl(''),
      totalTime:new FormControl(''),
      markPerQuestion:new FormControl(''),
      totalQuestion:new FormControl(''),
      vdoSolution:new FormControl(''),
      pdfsolution:new FormControl(''),
      status:new FormControl(''),
     });
   }

  ngOnInit(): void {
    // this.initForm();
    this.isedit= false;
    this.getApiData();
  }

  getApiData(){
    this.setlistService.getData().subscribe(res=> {
      console.log('result',res);
      this.apidata = res.data;
    })
  }

  initForm(){
    this.form = this.fb.group({
      chapter:new FormControl(''),
      name:new FormControl(''),
      language:new FormControl(''),
      class:new FormControl(''),
      subject:new FormControl(''),
      totalTime:new FormControl(''),
      markPerQuestion:new FormControl(''),
      totalQuestion:new FormControl(''),
      vdoSolution:new FormControl(''),
      pdfsolution:new FormControl(''),
      status:new FormControl(''),
     });
  }

  resetForm(){
     this.isedit= false;
this.initForm();
  }

  saveNewData(){
    console.log('reactive form',this.form.value);
    const apidata = { "chapter_name":this.form.value.chapter, "admin_id":this.form.value.class, "subject":this.form.value.subject, "qps_title":this.form.value.name, "qps_time":this.form.value.totalTime, "qps_mark":this.form.value.markPerQuestion, "no_of_ques":this.form.value.totalQuestion, "qps_language":this.form.value.language, "qps_date":new Date, "solution_pdf":this.form.value.pdfsolution, "qps_status":this.form.value.status};
    // console.log('new data set',apidata);
    this.setlistService.setList(apidata).subscribe(res => {
      console.log('all data',res);
      if(res.success == true){
        this.getApiData();
      }
    });
  }

  saveEditData(){
    const apidata = { "chapter_name":this.form.value.chapter, "admin_id":this.form.value.class, "subject":this.form.value.subject, "qps_title":this.form.value.name, "qps_time":this.form.value.totalTime, "qps_mark":this.form.value.markPerQuestion, "no_of_ques":this.form.value.totalQuestion, "qps_language":this.form.value.language, "qps_date":new Date, "solution_pdf":this.form.value.pdfsolution, "qps_status":this.form.value.status};
    this.setlistService.updateApi(this.editIdi,apidata).subscribe(res =>{
      console.log('edit Result',res);
      if(res.success == true){
        this.getApiData();
      }
    }
      )
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
    this.isedit= true;
    this.editIdi=data._id;
console.log('Edit data',data);
const allPatchData = {chapter:data.chapter_name, name:data.qps_title, language:data.qps_language, class:data.admin_id, subject:data.subject, totalTime:data.qps_time, markPerQuestion:data.qps_mark, totalQuestion:data.no_of_ques, vdoSolution:'', pdfsolution:data.solution_pdf, status:data.qps_status,}
this.form.patchValue(allPatchData);
// this.form.setValue(data);
  }
  deleteId(param:any){
this.deleteIdi = param._id
console.log('delete data',param);
  }

  delete1(){
this.setlistService.deleteApi(this.deleteIdi).subscribe(res => {
  console.log('result',res);
  if(res.success == true){
    this.getApiData();
  }
})
  }


}
