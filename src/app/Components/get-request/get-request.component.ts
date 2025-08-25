import { Component } from '@angular/core';
import { RequestService } from '../../Service/request.service';
import { Request } from '../../Models/request';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent {
  requests: Request[] = []; // כאן נשמור את כל הנתונים
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.requestService.GetRequest().subscribe({
      next: (data) => {
        this.requests = data;
        console.log('Requests:', data);
      },
      error: (err) => console.error('Error fetching requests:', err)
    });
  }
}
