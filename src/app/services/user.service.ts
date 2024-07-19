import { Injectable } from "@angular/core";

@Injectable({
        providedIn: 'root'
    })

export class UserService {
    users = ['user 1', 'user 2', 'user 3', 'user 4'];

    getUsers() {
        return this.users;
    }
    getUser(id: number) {
        return this.users[id];
    }
}