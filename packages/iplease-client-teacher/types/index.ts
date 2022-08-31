export type EmailAuthResult = 'before' | 'wrong' | 'already' | 'complate';

export interface ProfileRes {
  type: 'TEACHER';
  common: {
    accountId: number;
    permission: 'USER' | 'OPERATOR' | 'ADMINISTRATOR';
    name: string;
    email: string;
    profileImage: string;
  };
}

export interface EditProfileReq {
  type?: 'TEACHER';
  permission: 'USER' | 'OPERATOR' | 'ADMINISTRATOR';
  name: string;
  emailToken?: null;
  newEmailToken?: null;
  profileImage: string;
  studentNumbe?: 0;
  department?: 'SMART_IOT';
}
