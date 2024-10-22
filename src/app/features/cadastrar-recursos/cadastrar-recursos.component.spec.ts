import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRecursosComponent } from './cadastrar-recursos.component';

describe('CadastrarRecursosComponent', () => {
  let component: CadastrarRecursosComponent;
  let fixture: ComponentFixture<CadastrarRecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarRecursosComponent]
    });
    fixture = TestBed.createComponent(CadastrarRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
