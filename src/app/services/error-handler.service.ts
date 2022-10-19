import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private messageService: MessageService) {}

  handleError(operationName: string) {
    return (error: any): Observable<never> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      this.messageService.add({
        severity: 'error',
        summary: operationName,
        detail: error,
        life: 5000,
        key: 'main',
      });

      return throwError(() => error);
    };
  }
}
