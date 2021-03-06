import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styleUrls: []
})
export class LogoutComponent  {

  constructor(private authService: AuthService, private router: Router) {
    this.onLogout();
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/auth', 'login']);
  }

}
