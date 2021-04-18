import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  })
  rememberCtrl = new FormControl(false)

  constructor(
    private notification: NzNotificationService,
    private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  login() {
    this.api.login(this.form.value).subscribe((res) => {
      this.auth.setToken(res.jwt, this.rememberCtrl.value);
      this.router.navigateByUrl('app');
      this.notification.success('Đăng nhập thành công', 'Bạn đã đăng nhập thành công')
    })
  }

}
