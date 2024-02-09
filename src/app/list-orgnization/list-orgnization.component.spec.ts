import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrgnizationComponent } from './list-orgnization.component';

describe('ListOrgnizationComponent', () => {
  let component: ListOrgnizationComponent;
  let fixture: ComponentFixture<ListOrgnizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrgnizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrgnizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
