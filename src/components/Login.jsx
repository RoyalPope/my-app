import React from 'react';

function Login() {
  return (
    <main className="section">
      <div className="container">
        <h1>Login</h1>
        <div className="card" style={{ maxWidth: 480, margin: '0 auto' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
              <label className="mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="mt-1" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login; 