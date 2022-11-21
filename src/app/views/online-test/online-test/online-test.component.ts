import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SetListService} from '../../../services/setList/set-list.service';
import {QuestionlistService} from '../../../services/questionlist/questionlist.service';
import { CommonService } from 'src/app/services/common/common.service';

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
  // data:any =[
  //   {"id":1,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
  //   {"id":2,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
  //   {"id":3,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
  //   {"id":4,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
  //   {"id":5,"question":'अगर किसी पिंड के लिए वेग समय ग्राफ एक सीधी रेखा नही हैं , तब बताया जाता हैं',"set":'SCIENCE -IX-OBJECIVE TEST-1(PHY-1,CHEM-1,BIO-1&2)',"class":'IXth',"language":'Hindi', "status":"Active" },
  // ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,
    private setlistService:SetListService,
    private questionListService:QuestionlistService,
    private commonService:CommonService
    ) {
    this.form = this.fb.group({
      question:new FormControl(''),
      set:new FormControl(''),
      // type:new FormControl(''),
      // class:new FormControl(''),
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
      if(res.success == true){
  this.questionlists = res.data;
      }
    })
  }

  initForm(){
    this.form = this.fb.group({
      question:'',
      set:'',
      // type:'',
      // class:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
     });
  }

  saveNewData(){
    // alert('I am in progress, questionAdd thanku');
    console.log('reactive form',this.form.value);
    const correctAnswer = this.form.value.answer;
    console.log('correct answer', correctAnswer);
    const data ={ "set":this.form.value.set, "question":this.form.value.question, 
    "options": [ {"option1":this.form.value.option1,"correct": "false"}, {"option2":this.form.value.option2,"correct": "false"}, {"option3":this.form.value.option3,"correct": "false"}, {"option4":this.form.value.option4,"correct": "false"} ] };

      data.options[this.form.value.answer].correct = "true";
    console.log('correct dsata answer', data);
   
    this.questionListService.addList(data).subscribe(res => {
      console.log('result api of adding',res);
      if(res.success == true){
        this.getQuestionList();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })
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
    console.log('edit data',data);
    this.editIdi= data._id;
    // console.log('edit id',this.editIdi);
    this.getSetList();  // for section setlist option
    const correctAnswer = data.options.findIndex((res:any) => res.correct == 'true');
    console.log('correct answre',correctAnswer);
    const apidata ={ set:data.set, question:data.question, answer:correctAnswer, option1:data.options[0].option1, option2:data.options[1].option2, option3:data.options[2].option3,option4:data.options[3].option4}
    this.isedit= true;
    this.form.patchValue(apidata);
// this.form.setValue(data);
  }
  saveEditData(){
// alert('workinhdcbd......')
const correctAnswer = this.form.value.answer;
console.log('correct answer', correctAnswer);
const data ={ "set":this.form.value.set, "question":this.form.value.question, 
"options": [ {"option1":this.form.value.option1,"correct": "false"}, {"option2":this.form.value.option2,"correct": "false"}, {"option3":this.form.value.option3,"correct": "false"}, {"option4":this.form.value.option4,"correct": "false"} ] };

  data.options[this.form.value.answer].correct = "true";
console.log('correct dsata answer', data);

this.questionListService.updateApi(this.editIdi,data).subscribe(res => {
  console.log("result of edit api",res);
  if(res.success == true){
    this.getQuestionList();
        }
},
(err)=>{
  console.log('Topic List Api Error',err.error);
  this.commonService.tokenDelete(err.error.msg);
})
      
  }

  delete1(){
    this.questionListService.deleteApi(this.deleteIdi).subscribe(res => {
      console.log('this.delete',res);
      if(res.success == true){
        this.getQuestionList();
      }
    },
    (err)=>{
      console.log('Topic List Api Error',err.error);
      this.commonService.tokenDelete(err.error.msg);
    })

  }

  deleteId(param:any){
    this.deleteIdi = param._id;
    console.log('this.deleteIdi data',this.deleteIdi);
  }


}
