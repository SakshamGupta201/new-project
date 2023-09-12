import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepesListComponent } from './recepes-list.component';

describe('RecepesListComponent', () => {
  let component: RecepesListComponent;
  let fixture: ComponentFixture<RecepesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepesListComponent]
    });
    fixture = TestBed.createComponent(RecepesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
