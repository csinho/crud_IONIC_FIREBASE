import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicoProvider } from '../../providers/servico/servico';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-salvar',
  templateUrl: 'salvar.html',
})
export class SalvarPage {

  title: string;
  form: FormGroup;
  contact: any;

  constructor(
    public servico: ServicoProvider,
    public navCtrl: NavController,
    private toast: ToastController,
    private formBuilder: FormBuilder,
    public navParams: NavParams) {

    this.contact = this.navParams.data.contact || {};
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando contato' : 'Novo contato';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      nome: [this.contact.nome, Validators.required],
      sobrenome: [this.contact.sobrenome, Validators.required],
      idade: [this.contact.idade, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.servico.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
