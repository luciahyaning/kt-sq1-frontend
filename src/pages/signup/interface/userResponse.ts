import { formatDate } from "../../../utils/formatter";

export class UserResponse {
  id: string;
  name: string;
  email: Date;

  constructor(id: string, name: string, email: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
