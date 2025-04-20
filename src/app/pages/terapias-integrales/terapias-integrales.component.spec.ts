import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiasIntegralesComponent } from './terapias-integrales.component';

describe('TerapiasIntegralesComponent', () => {
  let component: TerapiasIntegralesComponent;
  let fixture: ComponentFixture<TerapiasIntegralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapiasIntegralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiasIntegralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
