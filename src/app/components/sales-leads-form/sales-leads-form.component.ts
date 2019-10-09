import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sales-leads-form',
  templateUrl: './sales-leads-form.component.html',
  styleUrls: ['./sales-leads-form.component.scss']
})
export class SalesLeadsFormComponent implements OnInit {
  @Output() addSalesLead: EventEmitter<any> = new EventEmitter();

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  // TODO make POST call to save to database
  // preloader on save button
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      leadName: ['', Validators.required],
      salesRep: ['', Validators.required],
      clientName: ['', Validators.required],
      leadAmount: ['', Validators.required],
      leadDate: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    const formParams = this.registerForm.value;
    this.addSalesLead.emit(formParams);
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}