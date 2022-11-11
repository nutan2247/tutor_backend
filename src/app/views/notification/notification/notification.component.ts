import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
 public liveDemoVisible = false;
  data:any =[
    {"id":1, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"10th", "date":"2022-03-15 13:03:32"},
    {"id":2, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"All", "date":"2022-03-15 13:03:32"},
    {"id":3, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"9th", "date":"2022-03-15 13:03:32"},
    {"id":4, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"8th", "date":"2022-03-15 13:03:32"},
    {"id":5, "notificationTitle": "आवश्यक सूचना", "notification":"सभी Online live class कुछ कारण वश 10/05/21(सोमवार) और 11/05/21 (मंगलवार) को बंद कर दिया गया है I आप सभी का Online Live Class 12/05/21(मंगलवार) से पुनः start होगा I","notificationFor":"11th", "date":"2022-03-15 13:03:32"},
  ];

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title:new FormControl(''),
      detail:new FormControl(''),
      notificationFor:new FormControl(''),
      senton:new FormControl(''),
     });
   }
  ngOnInit(): void {
    // this.initForm();
  }
  reset(){

  }

  initForm(){
    this.form = this.fb.group({
      title:'',
      detail:'',
      notificationFor:'',
      senton:'',
     });
  }

  saveNewData(){
    alert('I am in progress, thanku');
    this.toggleLiveDemo();
  }
  createBatches(){
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

  // onSubmit(){
  //   alert('hadhdachchdgh');
  //   console.log('form value',this.form.value);
  // }
}