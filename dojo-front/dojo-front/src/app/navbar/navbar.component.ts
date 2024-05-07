import { Component } from '@angular/core';
import { AuthService } from '../login/services/auth.service';
import { Score } from './interfaces/score.interface';
import { Observable } from 'rxjs';
import { UserService } from '../home/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoggedIn$ = this.authService.isLoggedIn$;
  score$!: Observable<Score>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.score$ = this.userService.fetchUserScore();
    setInterval(() => {
      this.score$ = this.userService.fetchUserScore();
    }, 60_000 * 3);
  }
}
