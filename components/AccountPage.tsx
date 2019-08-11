import Layout from './Layout'

export default () =>
  <Layout>
    <div className="row">
      <div className="card mb-3">
        <style jsx>{`
          .card {
            margin: auto;
            width: 420px;
            max-width: 420px;
          }
        `}</style>
        <div className="card-body">
          <form>
            <fieldset>
              <legend>Zaloguj się</legend>
              <div className="form-group">
                <label>Login</label>
                <input className="form-control" placeholder="Wpisz login" />
              </div>
              <div className="form-group">
                <label>Hasło</label>
                <input className="form-control" type="password" placeholder="Wpisz hasło" />
              </div>
            </fieldset>
            <button className="btn btn-outline-success float-right">Zaloguj</button>
          </form>
        </div>
        <div className="card-footer">
          <div className="font-weight-bold">Nie masz konta?</div>
          Rejestracji nie ma, pisz do <a href="mailto:reskiezis@gmail.com">reskiezis@gmail.com</a>
        </div>
      </div>
    </div>
  </Layout>