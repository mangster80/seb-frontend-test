import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  constructor(private toastr: ToastrService) {}

  showError(error: HttpErrorResponse) {
    this.toastr.error(error.message, error.statusText, {
      timeOut: 10000,
      closeButton: true,
      disableTimeOut: false,
      progressBar: true,
      toastClass: 'toast',
      positionClass: 'top',
      enableHtml: true
    });
  }
}
