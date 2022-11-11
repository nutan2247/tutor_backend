import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent implements OnInit {

  form: FormGroup;
  id:any;
  constructor(private fb: FormBuilder,) {
    this.form = this.fb.group({
      notice:new FormControl(''),
      status:new FormControl(''),
     });
   }
  ngOnInit(): void {
  }

  saveNewData(){
     console.log('all tdata',this.form.value);
  }

  cancelData(){
    
  }

}
