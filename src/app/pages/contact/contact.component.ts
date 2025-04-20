import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

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
