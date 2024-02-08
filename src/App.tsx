import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>DUIT TRACKER</h1>
            <hr />
            <h4>Rp. 1.500.000</h4>
            <span className="title">Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="card-wrapper">
              <div className="icon-wrapper">
                <i className="bi bi-wallet2"></i>
              </div>
              <span className="title">Pemasukan</span>
              <h3>Rp. 2.000.000,-</h3>
              <div>
                <span className="title text-ungu">50</span>
                <span className="title">Transaksi</span>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="col-6">
            <div className="card-wrapper">
              <div className="icon-wrapper">
                <i className="bi bi-wallet2"></i>
              </div>
              <span className="title">Pemasukan</span>
              <h3>Rp. 2.000.000,-</h3>
              <div>
                <span className="title text-ungu">50</span>
                <span className="title">Transaksi</span>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>Ringkasan Transaksi</h2>
            <div className="button-wrapper">
              <button>
                Pemasukan <i className="bi bi-plus-circle-fill"></i>
              </button>
              <button>
                Pemasukan <i className="bi bi-dash-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
