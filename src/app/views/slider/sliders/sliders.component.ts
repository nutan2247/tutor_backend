import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
// src/app/services/login/login.service
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  public liveDemoVisible = false;
  bannerList:any[] = [];

  constructor(private bannerService: BannerService) { }
  ngOnInit(): void {
    this.bannerService.getData().subscribe(res => {
      console.log('banner Api',res);
      if(res.success == true){
        this.bannerList = res.data;
        console.log('bannerList Api',this.bannerList);
      }
    },
    (err) => {
      console.log('Get Error Banner Api',err);
    })
  }

  addBanner(){
    alert('I am in progress, thanku')
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }
}
