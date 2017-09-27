import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'friends-list',
    template: `
    <div>
        FRIENDS

        <button (click)="handleClick()">Logout</button>
    </div>
    `
})

export class FriendsListComponent implements OnInit {
    constructor(private authService: AuthService
    ,private router: Router) { }

    ngOnInit() { }

    handleClick() {
        this.authService.logoutUser().then(() => {
            this.router.navigateByUrl('/');
        });
    }
}