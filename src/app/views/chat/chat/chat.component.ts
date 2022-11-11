import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public liveDemoVisible = false;
  formReactive: FormGroup;
  details: any[] = [
    {
      "id": 1,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 2,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 3,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 4,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 5,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 6,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 7,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
    {
      "id": 8,
      "photo": 'assets/img/avatars/1.jpg',
      "name": 'Vikash kumar',
      "contactNo": '9470659035',
      "totalChat": '3',
      "newChat": '0',
    },
  ];
 
  constructor(private fb: FormBuilder) {
    this.formReactive = this.fb.group({
      name: new FormControl(''),
      photo: new FormControl(''),
      mobilename: new FormControl(''),
      chat: new FormControl(''),
      gender: new FormControl(''),
      session: new FormControl(''),
      batchTime: new FormControl(''),
      class: new FormControl(''), 
      examSeating: new FormControl(''),
      department: new FormControl(''),
      recieveFee: new FormControl(''),
      paymentTerm: new FormControl(''),
      status: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.alllDetails();
  }
  resetForm(){
    this.formReactive = this.fb.group({
      name: '',
      photo: '',
      mobilename: '',
      chat: '',
      gender: '',
      session: '',
      batchTime: '',
      class: '',
      examSeating: '',
      department: '',
      recieveFee: '',
      paymentTerm: '',
      status: '',
    });
  }
  edit(item:any) {
    console.log('data',item);
    this.formReactive.patchValue(item);
    // this.form.setValue(item);

  }
  onSubmit() {
    // alert('working');
    console.log('all data Value', this.formReactive.value);
  }
  // saveNewData() {
  //   alert('save working');
  // }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }

  // alllDetails() {
  //   this.details = 
  // }
}