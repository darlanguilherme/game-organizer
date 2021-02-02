export interface IDbUser {
  idUser: string;
  name: string;
  avatar: string;
  theme: string;
}

export interface IDbGames {
  idGame: string,
  name: string,
  description: string,
  launchDate: string,
  registerDate: string,
  tags: Array<string>,
  srcImage: string,
  idEmulator: string
}

export interface IDbEmulators {
  idEmulador: string,
  name: string,
  description: string,
  registerDate: string,
  srcImage: string,
}
