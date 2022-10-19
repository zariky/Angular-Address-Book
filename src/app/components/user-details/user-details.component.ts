import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, switchMap, take } from 'rxjs';
import User from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;
  private loading = true;

  constructor(public userService: UserService, private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.userService.findUserById(id)),
        take(1),
        finalize(() => (this.loading = false))
      )
      .subscribe((user) => (this.user = user));
  }

  get isLoading() {
    return this.loading;
  }

  back() {
    this.router.navigateByUrl('/');
  }
}
