import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  form: Boolean = false;
  closeResult!: String;
  user!: User;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.user = {
      idUser: null,
      username: null
    }
  }

  Regiter(user: any) {
    this.us.signUp(user).subscribe();
    document.location.href = 'http://localhost:4200/#/home';
  }

}
