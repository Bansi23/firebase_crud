import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  displayToaster(type: number, title, body?) {
    const messageType = type == 1 ? 'success' : type == 2 ? 'error' : type == 3 ? 'warning' : type == 4 ? 'info' : 'error';
    this.toasterService.popAsync(messageType, title, body);
  }

  constructor( private toasterService: ToasterService , private toaster : ToastrService) { }
}
