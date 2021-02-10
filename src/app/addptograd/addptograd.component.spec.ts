import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddptogradComponent } from './addptograd.component';

describe('AddptogradComponent', () => {
  let component: AddptogradComponent;
  let fixture: ComponentFixture<AddptogradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddptogradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddptogradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
