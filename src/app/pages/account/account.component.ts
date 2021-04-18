import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { withLoading } from 'src/app/rxjs/with-loading';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private api: ApiService) {
    this.getData();
  };
  loading = false;
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('', [
      Validators.required,
    ]),
  });
  ngOnInit(): void {
  }
  getData() {
    this.api.getUserDetail().pipe(withLoading(this, 'loading')).subscribe(res => {
      this.form.patchValue(res)
    })
  }
  updateData() {
    this.api.updateUserDetail(this.form.value).pipe(withLoading(this, 'loading')).subscribe(res => {
      this.form.patchValue(res)
    })
  }
  

}
