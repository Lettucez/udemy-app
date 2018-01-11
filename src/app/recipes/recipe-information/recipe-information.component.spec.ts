import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInformationComponent } from './recipe-information.component';

describe('RecipeInformationComponent', () => {
  let component: RecipeInformationComponent;
  let fixture: ComponentFixture<RecipeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
