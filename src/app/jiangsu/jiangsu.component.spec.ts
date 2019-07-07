import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiangsuComponent } from './jiangsu.component';

describe('JiangsuComponent', () => {
  let component: JiangsuComponent;
  let fixture: ComponentFixture<JiangsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiangsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiangsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
