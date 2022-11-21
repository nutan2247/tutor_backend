import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private route:Router) { }

  tokenDelete(data:any){
    if(data == 'Token is not valid'){
      // alert('working...');
      // localStorage.removeItem('eq_user');
      localStorage.removeItem('token');
      this.route.navigate(['']);
    }
  }
}
