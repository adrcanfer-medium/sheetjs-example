import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteXlsxComponent } from './write-xlsx.component';

describe('WriteXlsxComponent', () => {
  let component: WriteXlsxComponent;
  let fixture: ComponentFixture<WriteXlsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteXlsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteXlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
