import styled from '@emotion/styled';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 24px;
`;

export const Form = styled.form`
  width: 300px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 7px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 60px;
    margin-left: 6px;
  }
`;
