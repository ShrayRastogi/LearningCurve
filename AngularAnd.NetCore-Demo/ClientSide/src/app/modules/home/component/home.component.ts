import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../../login/component/login.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.style.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {
    this.showLoginDialog();
  }
  showLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
