import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  constructor() { }

  ngOnInit(): void {
  }

}
