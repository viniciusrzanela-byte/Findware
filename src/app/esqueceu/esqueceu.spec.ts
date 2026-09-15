import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Esqueceu } from './esqueceu';

describe('Esqueceu', () => {
  let component: Esqueceu;
  let fixture: ComponentFixture<Esqueceu>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esqueceu],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Esqueceu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
