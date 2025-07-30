const Form = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Login Successful!');
      localStorage.setItem('token', data.token);
      // redirect or navigate here
    } else {
      setMessage(data.message || 'Login failed');
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Sign In</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            className="input"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            required
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span className="forgot-password"><a href="#">Forgot Password?</a></span>
          <input className="login-button" type="submit" value="Sign In" />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>{message}</p>
        </form>
      </div>
    </StyledWrapper>
  );
};
