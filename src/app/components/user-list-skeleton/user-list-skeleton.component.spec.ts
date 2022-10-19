import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSkeletonComponent } from './user-list-skeleton.component';

describe('UserListSkeletonComponent', () => {
  let component: UserListSkeletonComponent;
  let fixture: ComponentFixture<UserListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
