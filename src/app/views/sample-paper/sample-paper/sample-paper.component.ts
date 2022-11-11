import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample-paper',
  templateUrl: './sample-paper.component.html',
  styleUrls: ['./sample-paper.component.scss']
})
export class SamplePaperComponent implements OnInit {

  public liveDemoVisible = false;
  data:any =[
    {"id":1,"title":'MAth',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
    {"id":2, "title":'English',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
    {"id":3, "title":'Physics',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Inactive"},
    {"id":4, "title":'Chemestry',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
    {"id":5, "title":'DIgital',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active"  },
    {"id":6, "title":'microProcessor',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
    {"id":7, "title":'Digital Software',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active" },
    {"id":8, "title":'micro-processor',"class":"8th","examseating":"first","stratTiming": "10","timeduration":"50","documnet":"https://wps-dev.com/dev2/rbsingh/assets/images/samplepaper/paper_1645097889.jpg","status":"Active"  },
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title:new FormControl(''),
      class:new FormControl(''),
      examseating:new FormControl(''),
      stratTiming:new FormControl(''),
      timeduration:new FormControl(''),
      documnet: new FormControl(''),
      status:new FormControl(''),

     });
   }
  ngOnInit(): void {
    // this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      title:'',
      class:'',
      examseating:'',
      stratTiming:'',
      timeduration:'',
      documnet:'',
      status:'',
     });
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
