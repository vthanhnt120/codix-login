import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { AccountModel } from 'src/app/core/models/account-model';
import { withLoading } from 'src/app/rxjs/with-loading';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  loading =  false;
  confirmPasswordCtrl = new FormControl('', [
    Validators.required,
  ]);
  passwordCtrl = new FormControl('', [
    Validators.required,
  ]);
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    password: this.passwordCtrl,
    confirmPassword: this.confirmPasswordCtrl,
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor(public api: ApiService, private auth: AuthService) {
    combineLatest([
      this.passwordCtrl.valueChanges,
      this.confirmPasswordCtrl.valueChanges,
    ]).subscribe(([password, confirmPassword]) => {
      const passwordNotMatched = password !== confirmPassword;
      if (passwordNotMatched) {
        this.confirmPasswordCtrl.setErrors({
          ...this.confirmPasswordCtrl.errors,
          passwordNotMatched: true
        });
      } else {
        const newErrors = this.confirmPasswordCtrl.errors;
        if (newErrors) {
          delete newErrors.passwordNotMatched
          this.confirmPasswordCtrl.setErrors(newErrors );
          this.confirmPasswordCtrl.updateValueAndValidity();
        }
      }
      

      
    })
  }
  register(e: AccountModel & { password: string; }) {
    this.api.registration(e).pipe(withLoading(this, 'loading')).subscribe(() => {
      this.auth.gotoLogin()
    });
  }

  ngOnInit(): void {
  }

}
