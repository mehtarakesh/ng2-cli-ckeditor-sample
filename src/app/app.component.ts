import { Component } from '@angular/core';
import { CKEditor } from 'ng2-ckeditor';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CKEditor],
})
export class AppComponent {
  title = 'app works!';
  data = 'I love <strong>HTML</strong>';
}
