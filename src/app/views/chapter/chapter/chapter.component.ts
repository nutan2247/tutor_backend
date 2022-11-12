import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ChapterService} from '../../../services/chapter/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  public liveDemoVisible = false;
  // data:any =[
  //   {"id":1,"chapterTitle":'FINAL EXAM ANSWER 2022 - IX',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  //   {"id":2, "chapterTitle":'GUESS QUESTION (2021-2022)',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  //   {"id":3, "chapterTitle":'SEN-TUP EXAM 2022',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active"},
  //   {"id":4, "chapterTitle":'SCIENCE TEST QUESTION + ANSWER',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  //   {"id":5,"chapterTitle":'MATH TEST QUESTION + ANSWER',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active"  },
  //   {"id":6,"chapterTitle":'RATIONAL NUMBER(परिमेय संख्यां )',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  // ];
  data:any[] =[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private chapterService:ChapterService) {
    this.form = this.fb.group({
      chapterTitle:new FormControl(''),
      class:new FormControl(''),
      Subject:new FormControl(''),
      language:new FormControl(''),
      totalTopics:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getChapterList();
  }

  initForm(){
    this.form = this.fb.group({
      chapterTitle:new FormControl(''),
      class:new FormControl(''),
      Subject:new FormControl(''),
      language:new FormControl(''),
      totalTopics:new FormControl(''),
      status:new FormControl(''),
     });
  }

  getChapterList(){
    this.chapterService.getList().subscribe(res => {
      console.log('result', res);
      if(res.success == true){
   this.data = res.data;
   console.log('this.data',this.data);
      }
    })
  }

  resetForm(){
    this.isedit = false;
this.initForm();
  }

  saveNewData(){
    // alert('I am in progress, thanku');
    const data = { "chapter_title":this.form.value.chapterTitle, "admin_id":this.form.value.class, "subject":this.form.value.Subject, "language":this.form.value.language, "total_topics":this.form.value.totalTopics, "status":this.form.value.status };

    // console.log('reactive form',this.form.value);
    this.chapterService.addList(data).subscribe(res=>{
      // console.log(res);
      if(res.success == true){
        this.getChapterList();
      }
    })
  }
  create(){
    this.initForm();
    // alert('I am in progress, thanku')

  }
  deleteId(param:any){
    this.deleteIdi = param._id;
  }
  delete1(){
  this.chapterService.deleteApi(this.deleteIdi).subscribe(res=>{
    // console.log('Delete result',res);
    if(res.success == true){
      this.getChapterList();
    }
    
  });
  }

  saveEditData(){
    const data = { "chapter_title":this.form.value.chapterTitle, "admin_id":this.form.value.class, "subject":this.form.value.Subject, "language":this.form.value.language, "total_topics":this.form.value.totalTopics, "status":this.form.value.status };
this.chapterService.updateApi(this.editIdi,data).subscribe(res=>{
  console.log('Edit data hit Api response',res);
  if(res.success == true){
    this.getChapterList();
  }
})
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  edit(data:any){
    this.editIdi=data._id;
    this.isedit =true;
    const patchData = { "chapterTitle":data.chapter_title, "class":data.admin_id, "Subject":data.subject, "language":data.language, "totalTopics":data.total_topics, "status":data.status };
console.log('data',this.editIdi);
this.form.patchValue(patchData);
// this.form.setValue(data);
  }


}
