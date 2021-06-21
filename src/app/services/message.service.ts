import { Message } from './../model/message';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageCollection:AngularFirestoreCollection<Message>
  private messageDocument:AngularFirestoreDocument<Message> | undefined
  constructor(private afs:AngularFirestore) { 
    this.messageCollection= this.afs.collection('messages');
    this.messageDocument = this.messageCollection.doc()
  }

  // recupere data from firestore
 getAll(user: string | undefined) : Observable<Message[]> {
  return this.afs.collection('messages', ref => ref.where('user','==',user)).snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Message
        const id = a.payload.doc.id
        return { id , ...data}
      })
    })
  )
}
getAlll() :Observable<Message[]> {
  return this.messageCollection.valueChanges()
}

// add data to firestore
addMessage(message:Message) {
   return this.messageCollection.add(message).catch(error => console.log(error))
} 
// delete data from firestore

deleteMessage(id:any) {
   this.messageDocument = this.messageCollection.doc(id)
   this.messageDocument.delete();

}




}
