import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../../Service/request.service';
import { Request } from '../../Models/request';
@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent {
  requestForm!: FormGroup;  // הטופס
  display: boolean = false;
  constructor(
    private fb: FormBuilder,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', [Validators.required, Validators.minLength(5)]], // חובה + מינימום 5 תווים
      content: ['']
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      const newRequest: Request = this.requestForm.value;
      this.requestService.AddRequest(newRequest).subscribe({
        next: (res) => {
          alert('בקשה נוספה בהצלחה!');
          this.requestForm.reset();
          this.display = false;
          window.location.reload();

        },
        error: (err) => {
          console.error(err);
          alert('שגיאה בהוספת הבקשה');
        }
      });
    }
  }
}