import { TestBed } from '@angular/core/testing';

import { SpidermanService } from './spiderman.service';

describe('SpidermanService', () => {
  let service: SpidermanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpidermanService);
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('devuelve el catálogo completo', () => {
    expect(service.getCatalogo().length).toBe(4);
  });

  it('busca por nombre exacto', () => {
    const actor = service.getPorNombre('Tom Holland');
    expect(actor?.universo).toContain('MCU');
  });

  it('es insensible a mayúsculas', () => {
    const actor = service.getPorNombre('tobey maguire');
    expect(actor?.formato).toBe('Películas');
  });

  it('busca por universo', () => {
    expect(service.buscar('raimi').length).toBe(1);
  });
});
