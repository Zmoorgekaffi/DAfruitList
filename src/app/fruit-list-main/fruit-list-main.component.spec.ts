import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitListMainComponent } from './fruit-list-main.component';

describe('FruitListMainComponent', () => {
  let component: FruitListMainComponent;
  let fixture: ComponentFixture<FruitListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitListMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
