import { useEffect, useState } from "react";
import "./App.css";
import ModalTransaction from "./components/Modal";

export type Summary = {
  description: string;
  date: string;
  nominal: number;
  category: "in" | "out" | "";
};

function App() {
  const [money, setMoney] = useState(0);
  const [income, setIncome] = useState(0);
  const [spending, setSpending] = useState(0);
  const [transactionIn, setTransactionIn] = useState(0);
  const [transactionOut, setTransactionOut] = useState(0);
  const [summarys, setSummarys] = useState<Summary[]>([]);
  const [listSummarys, setListSummarys] = useState<Summary[]>(summarys);

  const addTransaction = (summary: Summary) => {
    setSummarys((prev) => [...prev, summary]);
    if (summary.category === "in") {
      setMoney((prev) => prev + summary.nominal);
      setIncome((prev) => prev + summary.nominal);
      setTransactionIn((prev) => prev + 1);
    } else {
      setMoney((prev) => prev - summary.nominal);
      setSpending((prev) => prev + summary.nominal);
      setTransactionOut((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setListSummarys(summarys);
    setListSummarys((prev) => prev.reverse());
  }, [summarys]);

  return (
    <>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="fw-bold">DUIT TRACKER</h1>
            <hr className="w-75 mx-auto" />
            <h2 className="fw-semibold">Rp. {money}</h2>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper-purple mb-1">
                <i className="bi bi-wallet2"></i>
              </div>
              <span className="title-sm">Pemasukan</span>
              <h3 className="fw-semibold">Rp. {income},-</h3>
              <div>
                <span className="title text-money-in fw-semibold me-1">
                  {transactionIn}
                </span>
                <span className="title">Transaksi</span>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="col-6">
            <div className="card-wrapper p-4">
              <div className="icon-wrapper-pink mb-1">
                <i className="bi bi-coin"></i>
              </div>
              <span className="title-sm">Pemakaian</span>
              <h3 className="fw-semibold">Rp. {spending},-</h3>
              <div>
                <span className="title text-money-out fw-semibold me-1">
                  {transactionOut}
                </span>
                <span className="title">Transaksi</span>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h4 className="fw-semibold">Ringkasan Transaksi</h4>
            <div className="button-wrapper d-flex">
              <ModalTransaction setSummarys={addTransaction}>
                Tambah Transaksi <i className="bi bi-plus-circle-fill"></i>
              </ModalTransaction>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          {listSummarys &&
            listSummarys.map((summary: Summary, index: number) => (
              <div
                key={index}
                className="col-12 d-flex justify-content-between align-items-center mb-2"
              >
                <div className="d-flex align-items-center">
                  <div
                    className={`${
                      summary.category === "in"
                        ? "icon-wrapper-purple"
                        : "icon-wrapper-pink"
                    }`}
                  >
                    {summary.category === "in" ? (
                      <i className="bi bi-wallet2"></i>
                    ) : (
                      <i className="bi bi-coin"></i>
                    )}
                  </div>
                  <div className="transaction ms-2 d-flex flex-column">
                    <h6 className="">{summary.description}</h6>
                    <span className="title title-sm">{summary.date}</span>
                  </div>
                </div>

                <h5
                  className={`${
                    summary.category === "in"
                      ? "text-money-in"
                      : "text-money-out"
                  } fw-semibold`}
                >
                  Rp. {summary.nominal}
                </h5>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
