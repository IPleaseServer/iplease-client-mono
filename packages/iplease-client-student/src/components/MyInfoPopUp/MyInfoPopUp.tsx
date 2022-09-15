import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

const MyInfoPopUp: React.FC = () => {
  const style = css`
    min-width: 10.5rem;
    box-shadow: 0px 6px 12px rgba(51, 51, 51, 0.08);
    border-radius: ${theme.palette.borderRadius};
    padding: 0.625rem;
    position: absolute;
    top: 5rem;
    right: calc((100vw - 70.5rem) / 2);
    .profile-card-wrapper {
      display: flex;
      gap: 0.625rem;
      img {
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
      }
      .my-info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;
        .name {
          font-weight: ${theme.palette.fontWeight.bold};
          font-size: ${theme.palette.fontSize.small};
          color: ${colors.black};
        }
        .student-info {
          font-weight: ${theme.palette.fontWeight.regular};
          font-size: ${theme.palette.fontSize.extraSmall};
          color: ${colors.black};
        }
        .email {
          font-weight: ${theme.palette.fontWeight.regular};
          font-size: ${theme.palette.fontSize.extraSmall};
          color: ${colors.black};
        }
      }
    }
    .button-wrapper {
      display: flex;
      flex-direction: column;
      .profile-edit-button {
        margin: 0.875rem auto;
        background: none;
        border: none;
        font-size: ${theme.palette.fontSize.extraSmall};
        font-weight: ${theme.palette.fontWeight.medium};
        color: ${colors.black};
        cursor: pointer;
      }
      .logout-button {
        margin: 0 auto;
        margin-top: 0.625rem;
        background: none;
        border: none;
        font-size: ${theme.palette.fontSize.extraSmall};
        font-weight: ${theme.palette.fontWeight.regular};
        color: ${colors.pink};
        cursor: pointer;
      }
    }
  `;

  return (
    <div css={style}>
      <div className="profile-card-wrapper">
        <img src="https://github.com/sunwoo0706.png" alt="kk" />
        <div className="my-info-wrapper">
          <p className="name">이선우</p>
          <p className="student-info">3114 / SW개발</p>
          <p className="email">이메일</p>
        </div>
      </div>
      <div className="button-wrapper">
        <button type="button" className="profile-edit-button">
          프로필 수정하기
        </button>
        <button type="button" className="logout-button">
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default MyInfoPopUp;
