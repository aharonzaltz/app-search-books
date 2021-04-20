import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteUrls } from 'src/app/config/config-data';
import { SetDataService } from 'src/app/infrastructure/state-services/set-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeScreenComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private setDataService: SetDataService,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
    });
  }

  onSubmit() {
    this.setDataService.setUserName(this.loginForm.controls.userName.value);
    this.router.navigate([RouteUrls.searchPage]);
  }
}
