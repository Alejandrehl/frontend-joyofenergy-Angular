import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly closeSidebarSubject = new Subject<void>();

  public get closeSidebar$(): Observable<void> {
    return this.closeSidebarSubject.asObservable();
  }

  public closeSidebar(): void {
    this.closeSidebarSubject.next();
  }
}
