import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Detalhe } from './detalhe';

describe('Detalhe', () =>
{
  let component: Detalhe;
  let fixture: ComponentFixture<Detalhe>;
  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({imports: [Detalhe], providers: [provideRouter([])]}).compileComponents();
    fixture = TestBed.createComponent(Detalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});