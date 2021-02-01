import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db: any;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    if (this.isElectron) {
      console.log("Subindo Banco...")

      const low = window.require('lowdb');
      const FileSync = window.require('lowdb/adapters/FileSync');
      const adapter = new FileSync('db.json')

      this.db = low(adapter);
      this.db.defaults({
        emulators: [],
        games: [],
        profile: { name: "Darlan Guilherme", avatar: "", theme: "" }
      }).write();
    }

  }

}
