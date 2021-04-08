import React from 'react';

export default function LoginPage() {

  return (
    <div className="login">
      <div className="inputs">
        <label htmlFor="email" className="label">
          Email
          <input
            type="text"
            id="email"
            data-testid="email-input"
            className="input"
          />
        </label>
        <label htmlFor="senha" className="label">
          Senha
          <input
            type="password"
            id="senha"
            data-testid="password-input"
            className="input"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="signin-btn"
        className="entrar"
      >
        ENTRAR
      </button>
      <button
        type="button"
        data-testid="no-account-btn"
        className="semConta"
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}
