import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ListaSpiderman } from './lista-spiderman';

describe('ListaSpiderman', () => {
  let component: ListaSpiderman;
  let fixture: ComponentFixture<ListaSpiderman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSpiderman],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaSpiderman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('muestra los 4 actores', () => {
    expect(component.actores.length).toBe(4);
  });
});
