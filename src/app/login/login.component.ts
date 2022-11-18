import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { onlyNumeric } from '../helper/function';
import { timer, Subscription } from 'rxjs';
import { subscribeOn, take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  voterId: FormControl;
  number: FormControl;
  otpsent: boolean;
  OTP: FormControl;
  timerOn: boolean;
  countDown: any;
  counter: any;
  tick: any;
  isDisabled: boolean;


  constructor(private router: Router) {
    this.voterId = new FormControl('', [Validators.required, Validators.min(10), Validators.max(10)])
    this.number = new FormControl('', [Validators.required, Validators.min(10)]);
    this.OTP = new FormControl('', [Validators.required, Validators.min(6)]);
    this.otpsent = true
    this.timerOn = true
    this.counter = 30
    this.tick = 1000
    this.countDown = Subscription
    this.isDisabled = true
  }

  ngOnInit(): void {


  }



  getNumberErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('number') ? 'Not a valid Voter Id' : '';
  }

  getVoterIdErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('number') ? 'Not a valid Phone Number' : '';
  }


  getotp() {
    this.number.markAsTouched()
    this.voterId.markAsTouched()
    if (this.number.valid && this.voterId.valid) {
      this.otpsent = true;
      this.countDown = timer(0, this.tick)
        .pipe(take(this.counter))
        .subscribe(() => {
          --this.counter;
          // console.log(this.counter);
          if (this.counter == 0) {
            this.countDown.unsubscribe();
            this.isDisabled=false;
          }
        });
        

    }
  }

  getOTPErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('number') ? 'Not a valid OTP' : '';

  }

  submitOTP() {
    this.OTP.markAsTouched()
    if (this.OTP.valid) {
      this.router.navigate(['dashboard']);
    }
  }

  onlyNumeric(e: KeyboardEvent) {
    return onlyNumeric(e)
  }




  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }




}
