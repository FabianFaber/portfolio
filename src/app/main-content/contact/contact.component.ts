import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  translate = inject(TranslationService);
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    policy: false
  }

  mailTest = false;
  formSubmitted = false;

  onPolicyChange(event: any) {
  }

  post = {
    endPoint: 'https://fabian-faber.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true; 

    if (ngForm.valid && this.contactData.policy) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Form submitted successfully');
            this.contactData = {
              name: "",
              email: "",
              message: "",
              policy: false
            };
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Submission error:', error);
            this.formSubmitted = false;
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      console.error('Form is invalid or policy checkbox is not checked');
      this.formSubmitted = false; 
    }
  }


  isFormValid(ngForm: NgForm) {
    return ngForm.valid && this.contactData.policy;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}