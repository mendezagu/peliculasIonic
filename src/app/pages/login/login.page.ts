import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);


  credenciales = {
    correo: <any>  null,
    password: <any>  null
  }

  selectedImage: any = null;

  constructor(
    private auth: AuthService,
    private router: Router) { 

    
  }


  ngOnInit() {}

  async login(){
    console.log('credenciales ->',this.credenciales)
    const res = await this.auth.login(this.credenciales.correo,this.credenciales.password).catch(() =>{
      alert('Usuario o Contraseña invalido');
      
    })

    if(res){
      console.log('res ->', res)
      alert('Logueado con exito');
      this.router.navigate(['./movies'])
      
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
