import styled from '@emotion/styled';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 1.5rem;
`;

export const Form = styled.form`
  width: 18.75rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
  gap: 0.438rem;
`;

export const AuthWrapper = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 3.75rem;
    margin-left: 0.375rem;
  }
`;
