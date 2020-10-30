import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoItemPage } from './curso-item.page';

describe('CursoItemPage', () => {
  let component: CursoItemPage;
  let fixture: ComponentFixture<CursoItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
