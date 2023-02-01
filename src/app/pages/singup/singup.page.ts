import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
//import {FirestoreService } from 'src/app/services/firestoreservice'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  datos: UserI = {
    nombre: <any> null,
    edad: <any> null,
    correo: <any> null,
    uid: <any> null,
    password: <any> null,
    perfil:'visitante'

  }
  formularioLogin: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private auth: AuthService,
    //private firestore: FirestoreService
    ) {



    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioLogin.value;

   

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

  async singup(){
    console.log('datos ->',this.datos);
    const res = await this.auth.singUpUser(this.datos).catch(error =>{
      console.log('error')
    })
   /* if(res){
      alert ('usuario creado con exito')
      const path = 'Users'
      const id = res.user?.uid
      this.datos.uid = id
      this.datos.password = null
      await this.firestore.createDoc(this.datos, path, id)
    } */
    
  }

}



