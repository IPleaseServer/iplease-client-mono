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
