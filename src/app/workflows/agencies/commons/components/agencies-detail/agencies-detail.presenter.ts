import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateAlphaNumericWithSpaces } from 'src/app/commons/validators/alpha-numeric-with-spaces.validator';

@Injectable()
export class AgenciesDetailPresenter {

  showError = false;

  agencyControl = new FormControl('', [Validators.required, validateAlphaNumericWithSpaces()]);
  districtControl = new FormControl('', [Validators.required, validateAlphaNumericWithSpaces()]);
  provinceControl = new FormControl('', [Validators.required, validateAlphaNumericWithSpaces()]);
  departmentControl = new FormControl('', [Validators.required, validateAlphaNumericWithSpaces()]);
  addressControl = new FormControl('', [Validators.required, validateAlphaNumericWithSpaces()]);
  latControl = new FormControl('', [Validators.required]);
  lonControl = new FormControl('', [Validators.required]);

  agenciesDetailForm: FormGroup = new FormGroup({
    agencyControl: this.agencyControl,
    districtControl: this.districtControl,
    provinceControl: this.provinceControl,
    departmentControl: this.departmentControl,
    addressControl: this.addressControl,
    latControl: this.latControl,
    lonControl: this.lonControl,
  });

  constructor() {
  }

  resetForm(): void {
    this.agenciesDetailForm.reset();
    this.agencyControl.enable();
    this.disabledLatControl();
    this.disabledLonControl();
    this.showError = false;
  }

  enabledAgencyControl() {
    this.agenciesDetailForm.controls['agencyControl'].enable();
  }

  disabledAgencyControl() {
    this.agenciesDetailForm.controls['agencyControl'].disable();
  }

  disabledLatControl() {
    this.agenciesDetailForm.controls['latControl'].disable();
  }

  disabledLonControl() {
    this.agenciesDetailForm.controls['lonControl'].disable();
  }


}

