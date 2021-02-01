export interface IDbUser {
  name: string;
  avatar: string;
  theme: string;
}

export interface IDbGames {
  id: string,
  name: string,
  description: string,
  launchDate: string,
  registerDate: string,
  tags: Array<string>,
  srcImage: string,
  emulator: string
}

export interface IDbEmulators {
  id: string,
  name: string,
  description: string,
  registerDate: string,
  srcImage: string,
}
