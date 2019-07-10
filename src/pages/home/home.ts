import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';

import { SalvarPage } from '../salvar/salvar';
import { ServicoProvider } from '../../providers/servico/servico';

import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;

  constructor(
    public servico: ServicoProvider,
    private toast: ToastController,
    public afDB: AngularFireDatabase,
    public navCtrl: NavController) {

    this.items = servico.getAll();

  }

  destalhes(item) {
    console.log(item.key)
  }

  novo() {
    this.navCtrl.push(SalvarPage);
  }

  editContact(contact: any) {
    // Maneira 1
    this.navCtrl.push(SalvarPage, { contact: contact });

    // Maneira 2
    // this.navCtrl.push('SalvarPage', { key: contact.key });
  }

  removeContact(key: string) {
    if (key) {
      this.servico.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }

}
