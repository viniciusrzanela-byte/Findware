import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Cadastrar } from './cadastrar';

describe('Cadastrar', () =>
{
  let component: Cadastrar;
  let fixture: ComponentFixture<Cadastrar>;
  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({imports: [Cadastrar], providers: [provideRouter([])]}).compileComponents();
    fixture = TestBed.createComponent(Cadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});