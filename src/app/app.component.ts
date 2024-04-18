import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  handleClick() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      customClass: {
        popup: 'custom-popup',
      },
      confirmButtonColor: 'green'
    });
    console.log('Button clicked!');
  }
}

