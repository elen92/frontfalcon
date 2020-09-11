import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  user;
  constructor(
    private storageService: StorageService,
    private router: Router
  ) {
    this.storageService.auth$.subscribe(
      userAuth => {
        this.user = userAuth
      }
    )
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.storageService.destruirSesion();
    this.router.navigate(['/'])

  }

}
