import { formatDate } from "../../../utils/formatter";

export class task {
  id: string;
  description: string;
  deadline: Date;
  done: boolean;
  userId: string;

  constructor(
    id: string,
    description: string,
    deadline: Date,
    done: boolean,
    userId: string
  ) {
    this.id = id;
    this.description = description;
    this.deadline = deadline;
    this.done = done;
    this.userId = userId;
  }
}
