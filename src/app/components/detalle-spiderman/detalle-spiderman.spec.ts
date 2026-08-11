import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';

import { DetalleSpiderman } from './detalle-spiderman';

describe('DetalleSpiderman', () => {
  let component: DetalleSpiderman;
  let fixture: ComponentFixture<DetalleSpiderman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSpiderman],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'Andrew Garfield' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleSpiderman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('carga el actor por nombre', () => {
    expect(component.actor?.nombre).toBe('Andrew Garfield');
  });
});
