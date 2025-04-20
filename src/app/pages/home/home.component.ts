import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showConfirmation(): void {
    setTimeout(() => {
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Te responderemos pronto.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }, 500); // Espera breve para que FormSubmit procese
  }
  
}
