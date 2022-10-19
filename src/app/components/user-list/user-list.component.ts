import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { finalize, map } from 'rxjs';
import User from 'src/app/model/user.model';
import { NamePipe } from 'src/app/pipes/name.pipe';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  @ViewChild('ct') table!: Table;
  private loading = true;

  constructor(
    public userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private namePipe: NamePipe
  ) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(
        map((users) =>
          users.map((e) => ({
            ...e,
            fullName: this.namePipe.transform(e.name),
          }))
        ),
        finalize(() => (this.loading = false))
      )
      .subscribe((users: User[]) => {
        this.users = users;
        if (!users.length) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Contacts loading',
            detail: 'No contacts found',
            life: 5000,
            key: 'main',
          });
        }
      });
  }

  get isLoading() {
    return this.loading;
  }

  navigateToDetails(id: string) {
    this.router.navigate(['/', id, 'details']);
  }

  filter(e: any) {
    this.table.filterGlobal(e.target.value, 'contains');
  }
}
