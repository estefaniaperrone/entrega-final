import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// DESCRIBE: Es un agrupador de casos de prueba
// En este caso agrupa todas las pruebas relacionadas al AppComponent
describe('AppComponent', () => {


  // beforeEach SE DISPARA ANTES DE CADA PRUEBA
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  // it DEFINE CADA CASO DE PRUEBAS
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = undefined;
    const app = fixture.componentInstance;

    // expect Sirve para definir una expectativa a evaluar
    expect(app).toBeTruthy(); // app no debe ser ni null, ni false, ni undefined
  });



  S
});
