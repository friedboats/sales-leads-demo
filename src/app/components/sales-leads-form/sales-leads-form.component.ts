import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SalesLeadService } from '../../services/sales-lead.service';

@Component({
  selector: 'app-sales-leads-form',
  templateUrl: './sales-leads-form.component.html',
  styleUrls: ['./sales-leads-form.component.scss']
})

export class SalesLeadsFormComponent implements OnInit {
  // EventEmitters
  @Output() addSalesLead: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  
  // Tracks the value and validity state of the group of FormControl instances
  registerForm: FormGroup;
  
  // Used when form is trying to be submitted
  submitAttempted = false;

  // Used when form has no errors and is being submitted
  submitInProgress = false;

  // Pass in FormBuilder and SalesLeadService
  constructor(private formBuilder: FormBuilder, private salesLeadService:SalesLeadService) { }
  
  // Component init
  ngOnInit() {
    // Form validation / Create a new FormGroup instance
    this.registerForm = this.formBuilder.group({
      leadName: ['', Validators.required],
      salesRep: ['', Validators.required],
      clientName: ['', Validators.required],
      leadAmount: ['', Validators.required],
      leadDate: ['', Validators.compose(
        [Validators.required, Validators.pattern('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$')])] // required AND make sure it is an ISO date string
    });

    // Subscribe to when the form makes a successful post so we can update our compontent with the new data
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {  
      // Set to false, enabling the form buttons    
      this.submitInProgress = false;
    });
  }

  // Easy access to form fields
  get f() { return this.registerForm.controls; }

  // Fires when the form is submitted
  onSubmit() {
    // Flag used for error checking conditional on the form
    this.submitAttempted = true;
    
    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }else {
      this.postSalesLead();
    }
  }

  // Post a sales lead to the backend
  postSalesLead() {
    // Set to true to disable for buttons
    this.submitInProgress = true;

    // Get values from the form
    const formParams = this.registerForm.value;

    // Make service call to post new sales lead to back end
    this.salesLeadService.addSalesLead(formParams).subscribe(() => {
      // Set to false to remove errors highlighting
      this.submitAttempted = false;

      // Clear the form
      this.clearForm();

      // Emit this out to all components to let them know that the sales lead was successful
      // This will switch the view back to the sales list, showing the new ly added sales lead
      this.salesLeadService.salesLeadPostSuccessful.emit(true);
    });
  }

  // On cancel click
  onCancel() {
    // Clear form
    this.clearForm();

    // Emit canceled so the child can listen for the EmitterEvent and call a function on the parent
    this.canceled.emit();
  }

  // Clear form and reset
  clearForm() {
    // Set to false to remove errors highlighting
    this.submitAttempted = false;

    // Reset all inputs
    this.registerForm.reset();
  }
}