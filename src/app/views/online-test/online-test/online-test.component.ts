import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SetListService} from '../../../services/setList/set-list.service';
import {QuestionlistService} from '../../../services/questionlist/questionlist.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss']
})
export class OnlineTestComponent implements OnInit {

  public liveDemoVisible = false;
  setList:any[]=[];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;
  questionlists:any[]=[];
  data:any =[
    {"id":1,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
    {"id":2,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
    {"id":3,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
    {"id":4,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
    {"id":5,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private setlistService:SetListService,
    private questionListService:QuestionlistService
    ) {
    this.form = this.fb.group({
      question:new FormControl(''),
      set:new FormControl(''),
      type:new FormControl(''),
      class:new FormControl(''),
      option1:new FormControl(''),
      option2:new FormControl(''),
      option3:new FormControl(''),
      option4:new FormControl(''),
      answer:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
    this.getQuestionList();
  }

  getSetList(){
    this.setlistService.getData().subscribe(res=> {
      console.log('result',res);
      this.setList = res.data;
    })
  }

  getQuestionList(){
    this.questionListService.getList().subscribe(res => {
      console.log('result of QuestionList',res);
    })
  }

  initForm(){
    this.form = this.fb.group({
      name:'',
      status:'',
     });
  }

  saveNewData(){
    alert('I am in progress, thanku');
    // this.toggleLiveDemo();
    console.log('reactive form',this.form.value);
  }
  create(){
    this.isedit= false;
    this.initForm();
    this.getSetList();
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
    this.getSetList();
this.form.patchValue(data);
// this.form.setValue(data);
  }
  saveEditData(){

  }

  delete1(){

  }

  deleteId(param:any){

  }


}
