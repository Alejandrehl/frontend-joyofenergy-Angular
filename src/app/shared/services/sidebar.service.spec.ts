import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    service = new SidebarService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit when closeSidebar is called', done => {
    service.closeSidebar$.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });
    service.closeSidebar();
  });

  it('should return an observable from closeSidebar$', () => {
    expect(service.closeSidebar$).toBeDefined();
    expect(typeof service.closeSidebar$.subscribe).toBe('function');
  });
});
