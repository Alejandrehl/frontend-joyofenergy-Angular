import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private closeSidebarSubject = new Subject<void>();
  closeSidebar$ = this.closeSidebarSubject.asObservable();

  closeSidebar() {
    this.closeSidebarSubject.next();
  }
} 