import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  public liveDemoVisible = false;
  data:any =[
    {"id":1,"chapterTitle":'FINAL EXAM ANSWER 2022 - IX',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
    {"id":2, "chapterTitle":'GUESS QUESTION (2021-2022)',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
    {"id":3, "chapterTitle":'SEN-TUP EXAM 2022',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active"},
    {"id":4, "chapterTitle":'SCIENCE TEST QUESTION + ANSWER',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
    {"id":5,"chapterTitle":'MATH TEST QUESTION + ANSWER',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active"  },
    {"id":6,"chapterTitle":'RATIONAL NUMBER(परिमेय संख्यां )',"class":"7th", "Subject":"Math", "language":"hind","totalTopics":"10","status":"Active" },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
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

  resetForm(){
this.initForm();
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
