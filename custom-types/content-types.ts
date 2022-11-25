export interface IUser {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface IUserFromGit {
  email?: string;
  name?: string;
  image: string;
}
//mis en null pour l'initialisation du state dans le reducer mais dans les faits, une valeur null met un message d'erreur si la tache est sélectionnée.
// C'est pourquoi il n'y a pas de valeur nulle dans la database
export interface ITask {
  date?: string | null;
  taskId: number | null;
  authorName?: string | null;
  authorId?: string | null;
  title: string | null;
  ended: boolean | null;
  description?: string;
}
export interface ITaskFromDb {
  date?: string | null;
  taskId: number;
  authorId?: string | null;
  title: string;
  ended: boolean;
  description?: string;
  author?: {
    id: string;
    name: string;
    email: string;
    emailvérified?: string;
    image?: string;
  };
}
