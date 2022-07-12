const SignInPage: React.FC = () => (
  <div>
    <h1>Login</h1>
    <form>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
);

export default SignInPage;
