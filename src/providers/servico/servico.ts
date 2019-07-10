import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicoProvider {

  public PATH = "Dados"

  constructor(public db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  /*
    save(course: any) {
      this.db.list('Dados')
        .push(course)
        .then(r => console.log(r));
    } */

  get(key: string) {
    return this.db.object(this.PATH + key)
      .snapshotChanges()
      .pipe(
        map(c => {
          return { key: c.key, ...c.payload.val() };
        })
      );
  }

  save(contact: any) {
    return new Promise((resolve, reject) => {
      if (contact.key) {
        this.db.list(this.PATH)
          .update(contact.key, {
            nome: contact.nome,
            sobrenome: contact.sobrenome,
            idade: contact.idade
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({
            nome: contact.nome,
            sobrenome: contact.sobrenome,
            idade: contact.idade
          })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
