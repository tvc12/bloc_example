import { RandomUtils } from "@/utils/random.utils";
import { Role } from "@/screens/UserManagement/Model/Role";

export class User {
  public constructor(
    public id: string,
    public name: string,
    public roles: Role[]
  ) {
  }

  public hasRole(role: Role): boolean {
    return this.roles.some((currentRole: Role) => role === currentRole);
  }

  static default(): User {
    return new User(RandomUtils.nextString(), RandomUtils.nextString(), []);
  }

  static fake() {
    const roles = RandomUtils.nextBool() ? [Role.Admin] : [Role.Admin, Role.Staff];
    return new User(RandomUtils.nextString(), RandomUtils.nextString(100), roles);
  }
}
