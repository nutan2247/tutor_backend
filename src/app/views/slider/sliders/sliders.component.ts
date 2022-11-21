import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BannerService } from 'src/app/services/banner/banner.service';
import { CommonService } from 'src/app/services/common/common.service';
// src/app/services/login/login.service
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {
isEdit:boolean = false;
  public liveDemoVisible = false;
  bannerList:any[] = [];
  deleteIdi:any;
  editIdi:any;
  isedit:boolean=false;

  form: FormGroup;

 @ViewChild('verticallyCenteredModal') modalId:ElementRef

  constructor(private bannerService: BannerService,
    private commonService:CommonService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      title:new FormControl(''),
      image:new FormControl(''),
      status:new FormControl(''),
    })
   }
  ngOnInit() {
    this.getBannerList();
  }
  private file: File;
  onFileChange(fileChangeEvent:any) {
    this.file = fileChangeEvent.target.files[0];
  }
  removeStorage(){
    localStorage.removeItem('token');
  }
  refresh(): void {
    window.location.reload();
}
  

  getBannerList(){
    this.bannerService.getData().subscribe(res => {
      console.log('banner Api',res);
      if(res.success == true){
        this.bannerList = res.data;
        console.log('bannerList Api',this.bannerList);
      }
    },
    (err)=>{
      console.log('Api Error',err);
      this.commonService.tokenDelete(err.error?.msg);
      window.location.reload();
    })
  }

  initForm(){
    this.form = this.fb.group({
      title:'',
      image:'',
      status:''
     });
  }
  addModal(){
    this.isedit=false;
  }
  ngAfterViewInit() {
    console.log("Hello ", this.modalId.nativeElement);
   }

  addBanner(){
    console.log('banre data',this.form.value);
    // this.modalId.nativeElement.verticallyCenteredModal.hide();
    // const myModal:any = new coreui.Modal('#verticallyCenteredModal', {
    //   keyboard: false
    // })

    let formData = new FormData();
    formData.append('banner_image', this.file, this.file.name);
    formData.append('banner_title',this.form.value.title);
    formData.append('banner_status',this.form.value.status);
    this.bannerService.addList(formData).subscribe(res => {
      console.log('banner api REes',res);
      if(res.success == true){
        this.getBannerList();
        this.initForm();
      }
    })
  }

  edit(param:any){
    console.log('edit data',param);
    this.isedit=true;
    this.editIdi = param._id;
    const patchdata = {title:param.banner_title  ,image:param.banner_image,status:param.banner_status };
    this.form.patchValue(patchdata);
  }
  saveEditData(){
  console.log('Edit api Data',this.form.value);
  let formData = new FormData();
    formData.append('banner_image', this.file, this.file.name);
    formData.append('banner_title',this.form.value.title);
    formData.append('banner_status',this.form.value.status);

    this.bannerService.updateApi(this.editIdi,formData).subscribe(res => {
      console.log('resiult of update Api',res);
      if(res.success == true){
        this.getBannerList();
      }
    })
  }
  deleteModal(param:any){
this.deleteIdi = param._id;
console.log('this.deleteIdi',this.deleteIdi)
  }

  delete1(){
this.bannerService.deleteApi(this.deleteIdi).subscribe(res => {
  console.log('result',res);
  if(res.success == true){
    this.getBannerList();
  }
})
  }

  closeMo(){
    const myModalEl:any = document.getElementById('myModal');
myModalEl.addEventListener('hidden.coreui.modal', (event:any) => {
  // do something...
})
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }
}
