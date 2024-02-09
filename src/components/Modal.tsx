import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Summary } from "../App";

type ValidationErrors = {
  description?: string;
  date?: string;
  nominal?: string;
  category?: string;
};

type ErrorsMessageValidation = {
  description?: string;
  date?: string;
  nominal?: string;
  category?: string;
};

const ModalTransaction = ({
  children,
  setSummarys,
}: {
  children: React.ReactNode;
  setSummarys: (summary: Summary) => void;
}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState<Summary>({
    description: "",
    date: "",
    nominal: 0,
    category: "",
  });
  const [errors, setErrors] = useState<ErrorsMessageValidation>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nominal") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validationForm = (): boolean => {
    const validationErrors: ValidationErrors = {};
    if (!formData.description.trim()) {
      validationErrors.description = "Description is required";
    }
    if (formData.nominal === 0) {
      validationErrors.nominal = "Nominal is required";
    }
    if (!formData.date.trim()) {
      validationErrors.date = "Date is required";
    }
    if (!formData.category.trim()) {
      validationErrors.category = "Category is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validationForm()) {
      setShow(false);
      setSummarys(formData);
    }
  };

  return (
    <div className="ms-1">
      <Button onClick={handleShow}>{children}</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                name="description"
                onChange={handleChange}
                type="text"
                placeholder="Masukkan deskripsi"
              />
              {errors.description && (
                <p className="text-danger">* {errors.description}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nominal</Form.Label>
              <Form.Control
                name="nominal"
                onChange={handleChange}
                type="number"
                placeholder="Masukkan nominal"
              />
              {errors.nominal && (
                <p className="text-danger">* {errors.nominal}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                name="date"
                onChange={handleChange}
                type="date"
                placeholder="Masukkan tanggal"
              />
              {errors.date && <p className="text-danger">* {errors.date}</p>}
            </Form.Group>
            <div className="mb-3">
              <Form.Check
                inline
                label="Pemasukan"
                name="category"
                type="radio"
                id="in"
                value="in"
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Pengeluaran"
                name="category"
                type="radio"
                id="out"
                value="out"
                onChange={handleChange}
              />
              {errors.category && (
                <p className="text-danger">* {errors.category}</p>
              )}
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalTransaction;
