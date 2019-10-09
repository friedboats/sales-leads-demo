import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SalesLeadService } from '../../services/sales-lead.service';

@Component({
  selector: 'app-sales-leads-form',
  templateUrl: './sales-leads-form.component.html',
  styleUrls: ['./sales-leads-form.component.scss']
})
export class SalesLeadsFormComponent implements OnInit {
  @Output() addSalesLead: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();

  registerForm: FormGroup;
  submitAttempted = false;
  submitInProgress = false;

  // TODO Put in special errors for leadAmount and leadDate

  constructor(private formBuilder: FormBuilder, private salesLeadService:SalesLeadService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      leadName: ['', Validators.required],
      salesRep: ['', Validators.required],
      clientName: ['', Validators.required],
      leadAmount: ['', Validators.required],
      leadDate: ['', Validators.required]
    });

    // Subscribe to when the form makes a successful post so we can update our compontent with the new data
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {      
      this.submitInProgress = false;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitAttempted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.submitInProgress = true;

    const formParams = this.registerForm.value;
    this.addSalesLead.emit(formParams);
    
    this.submitAttempted = false;
    this.clearForm();
  }

  onCancel() {
    this.clearForm();
    this.canceled.emit();
  }

  clearForm() {
    this.submitAttempted = false;
    //this.submitInProgress = false;
    this.registerForm.reset();
  }
}