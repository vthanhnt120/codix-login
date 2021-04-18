import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }
  logout() {
    this.auth.setToken('', true);
    this.auth.gotoLogin();
  }

}
