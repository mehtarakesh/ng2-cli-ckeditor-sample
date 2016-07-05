import { Component } from '@angular/core';
import { CKEditor } from 'ng2-ckeditor';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, CKEditor],
})
export class AppComponent {

  modelForm:FormGroup;

  constructor(private formBuilder:FormBuilder){
  }

  ngOnInit(){
    this.modelForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmitModelForm(form){
    console.log(form);
  }

  onSubmitTemplateForm(form){
    console.log(form);
  }

}
