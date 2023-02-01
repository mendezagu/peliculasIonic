import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { UserI } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private authfirebase: AngularFireAuth) { }

  login(correo: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(correo,password)
  }

  logout() {
    this.authfirebase.signOut()
  }

  singUpUser(datos:UserI){
   return this.authfirebase.createUserWithEmailAndPassword(datos.correo,datos.password)

  }
}