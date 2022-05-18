import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/IUser';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUser(id).subscribe(data => this.user = data);
    });

  }

}
