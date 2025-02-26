import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoaderService } from '../../services/shared/loader.service';
import { StepperComponent } from "../../components/admission/stepper/stepper.component";
import { NgxMaskDirective } from 'ngx-mask'
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldService } from '../../services/shared/formFieldError.service';
import { CommonModule } from '@angular/common';
import { CpfValidatorService } from '../../services/admission/validateCPF.service';
import { ClientInfoComponent } from "../../components/admission/client-info/client-info.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [
    StepperComponent,
    MatInputModule,
    MatFormFieldModule,
    NgxMaskDirective,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    ClientInfoComponent,
    MatIconModule
  ],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss'
})
export class AdmissionComponent {

  cpfIsValid: boolean = false;
  idClient: number = 0;

  public formSearch: FormGroup = new FormGroup({
    CPF: new FormControl('', [Validators.required]),
  });

  constructor(
    private formFieldService: FormFieldService,
    private loaderService: LoaderService,
    private cpfValidatorService: CpfValidatorService
  ) { }

  validateCPF() {
    this.cpfIsValid = this.cpfValidatorService.validateCPF(this.formSearch.controls['CPF'].value);
    if (!this.cpfIsValid) {
      this.loaderService.stopLoading();
      this.formSearch.controls['CPF'].setErrors({ 'invalidCPF': true });
      this.idClient = 0;
    } else {
      setTimeout(() => {
        this.loaderService.stopLoading();
        this.idClient = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      }, 1000);
    }
  }

  search() {
    this.loaderService.startLoading();
    this.validateCPF();
  }

  resetForm() {
    this.formSearch.reset();
    this.idClient = 0;
  }

  getErrorInputMessage(field: any) {
    return this.formFieldService.getErrorInputMessage(field);
  }

}
