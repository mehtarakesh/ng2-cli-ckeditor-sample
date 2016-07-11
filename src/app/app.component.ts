import { Component } from '@angular/core';
import { CKEditor } from 'ng2-ckeditor';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SELECT_DIRECTIVES } from 'ng2-select';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, SELECT_DIRECTIVES, CKEditor],
})
export class AppComponent {

  modelForm:FormGroup;
  tags:Array<string>;
  status:Array<any>;
  aloneTags:Array<any> = [{id:'Baz'}];

  constructor(private formBuilder:FormBuilder){
    this.tags = ['Foo','Bar', 'Baz', 'Awesome'];
    this.status = [
      {text: 'Yes', id: '1'},
      {text: 'No', id: '0'},
    ]
  }

  ngOnInit(){
    this.modelForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmitModelForm(form){
    console.log(form);
  }

  onSubmitTemplateForm(form){
    console.log(form);
  }

}
