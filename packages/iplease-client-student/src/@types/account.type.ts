export type AccountType = 'STUDENT' | 'TEACHER';

export type PermissionType = 'USER' | 'OPERATOR' | 'ADMINISTRATOR';

export type DepartmentType = 'SOFTWARE_DEVELOP' | 'SMART_IOT';

export interface IProfileResponse {
  type: AccountType;
  common: {
    accountId: number;
    permission: PermissionType;
    name: string;
    email: string;
    profileImage: string;
  };
  student: {
    studentNumber: number;
    department: DepartmentType;
  };
  teacher: object;
}
