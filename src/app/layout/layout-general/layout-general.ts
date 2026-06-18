import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout-general',
  imports: [RouterOutlet],
  templateUrl: './layout-general.html',
  styleUrl: './layout-general.css',
})
export default class LayoutGeneral {
  verMenu = signal<boolean>(false)

  desplegarMenu() {

    this.verMenu.set(!this.verMenu())
  }
}
