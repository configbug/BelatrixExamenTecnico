import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmenuComponent } from './mainmenu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainmenuComponent', () => {
  let component: MainmenuComponent;
  let fixture: ComponentFixture<MainmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmenuComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente MainMenu se creó correctamente', () => {
    expect(component).toBeTruthy();
  });
});
