import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSponsorComponent } from './add-sponsor.component';

describe('AddSponsorComponent', () => {
  let component: AddSponsorComponent;
  let fixture: ComponentFixture<AddSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
