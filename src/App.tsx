import "./App.css";

function App() {
  return (
    <>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="fw-bold">DUIT TRACKER</h1>
            <hr className="w-75 mx-auto" />
            <h2 className="fw-semibold">Rp. 1.500.000</h2>
            <span className="title-md">Sisa uang kamu tersisa 75% lagi</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper mb-1">
                <i className="bi bi-wallet2"></i>
              </div>
              <span className="title-sm">Pemasukan</span>
              <h3 className="fw-semibold">Rp. 2.000.000,-</h3>
              <div>
                <span className="title text-ungu fw-semibold">50</span>
                <span className="title">Transaksi</span>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper mb-1">
                <i className="bi bi-coin"></i>
              </div>
              <span className="title-sm">Pemakaian</span>
              <h3 className="fw-semibold">Rp. 2.000.000,-</h3>
              <div>
                <span className="title text-ungu fw-semibold">50</span>
                <span className="title">Transaksi</span>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h4 className="fw-semibold">Ringkasan Transaksi</h4>
            <div className="button-wrapper">
              <button className="button btn-ungu px-4 py-2 me-1">
                Pemasukan <i className="bi bi-plus-circle-fill"></i>
              </button>
              <button className="button btn-pink px-4 py-2 ms-1">
                Pengeluaran <i className="bi bi-dash-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="icon-wrapper">
                <i className="bi bi-wallet2"></i>
              </div>
              <div className="transaction ms-2 d-flex flex-column">
                <h6 className="">Menerima Gaji</h6>
                <span className="title title-sm">1 July 2022</span>
              </div>
            </div>

            <h5 className="text-money-in fw-semibold">Rp. 1.000.000</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
