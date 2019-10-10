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
  
  // Used when form is trying to be submitted
  submitAttempted = false;

  //Used when form has no errors and is being submitted
  submitInProgress = false;

  constructor(private formBuilder: FormBuilder, private salesLeadService:SalesLeadService) { }
  
  // Component init
  ngOnInit() {
    // Form validation
    this.registerForm = this.formBuilder.group({
      leadName: ['', Validators.required],
      salesRep: ['', Validators.required],
      clientName: ['', Validators.required],
      leadAmount: ['', Validators.required],
      leadDate: ['', Validators.compose(
        [Validators.required, Validators.pattern('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$')])]
    });

    // Subscribe to when the form makes a successful post so we can update our compontent with the new data
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {      
      this.submitInProgress = false;
    });
  }

  // Easy access to form fields
  get f() { return this.registerForm.controls; }

  // Fires when the form is submitted
  onSubmit() {
    this.submitAttempted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.submitInProgress = true;

    // Make service call to post sales lead
    const formParams = this.registerForm.value;
    this.salesLeadService.addSalesLead(formParams).subscribe(() => {
      this.submitAttempted = false;
      this.clearForm();
  
      // emit this out to all components to let them know that the sales lead was successful
      this.salesLeadService.salesLeadPostSuccessful.emit(true);
    });
  }

  // On cancel click
  onCancel() {
    this.clearForm();
    this.canceled.emit();
  }

  // Clear form and reset
  clearForm() {
    this.submitAttempted = false;
    this.registerForm.reset();
  }
}