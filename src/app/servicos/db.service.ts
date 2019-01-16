import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DbService {

  constructor(public db: AngularFireDatabase) { }

  inserir<Type>(caminho: string, objeto: Type): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.db.list<Type>(caminho)
        .push(objeto)
        .then(item => resolve(item.key));
    });
  }

  atualizar(caminho: string, eid: string, objeto: any): Promise<void> {
    return this.db.object(`${caminho}/${eid}`).update(objeto);
  }

  remover(caminho: string, eid: string): Promise<void> {
    return this.db.object(`${caminho}/${eid}`).remove();
  }

  get<Type>(caminho: string): Promise<Type> {
    return new Promise<Type>((resolve, reject) => {
      this.db.object<Type>(caminho)
        .valueChanges()
        .subscribe(
          result => resolve(result),
          error => reject(error)
        );
    });
  }

  getSincronizado<Type>(path: string): Observable<Type> {
    return this.db.object<Type>(path).valueChanges();
  }

  listar<Type>(path: string): Promise<Type[]> {
    return new Promise<Type[]>((resolve, reject) => {
      this.db.list<Type>(path)
        .snapshotChanges()
        .subscribe(
          items => {
            const typedItems: Type[] = [];

            items.forEach(item => {
              const typedItem: Type = item.payload.val();
              typedItem['eid'] = item.key;
              typedItems.push(typedItem);
            });

            resolve(typedItems);
          },
          error => reject(error)
        );
    });
  }

  listarSincronizado<Type>(caminho: string): Observable<Type[]> {
    return this.db.list<Type>(caminho).valueChanges();
  }

  buscar<Type>(caminho: string, propriedade: string, valor: any): Promise<Type[]> {
    return new Promise<Type[]>((resolve, reject) => {
      this.db.list<Type>(caminho, ref => ref.orderByChild(propriedade).equalTo(valor))
        .snapshotChanges()
        .subscribe(
          items => {
            const typedItems: Type[] = [];

            items.forEach(item => {
              const typedItem: Type = item.payload.val();
              typedItem['eid'] = item.key;
              typedItems.push(typedItem);
            });

            resolve(typedItems);
          },
          error => reject(error)
        );
    });
  }
}
