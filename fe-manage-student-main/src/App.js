import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = `${process.env.REACT_APP_API_URL}/students`;

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ ten: "", tuoi: "", dia_chi: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`${API}/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post(API, form);
    }
    setForm({ name: "", age: "", address: "" });
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm({ ten: "", tuoi: "", dia_chi: "", ...student });
    setEditingId(student.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Quản lý học sinh</h2>
      <form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Họ tên"
            value={form.ten}
            onChange={e => setForm({ ...form, ten: e.target.value })}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Tuổi"
            value={form.tuoi}
            onChange={e => setForm({ ...form, tuoi: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Địa chỉ"
            value={form.dia_chi}
            onChange={e => setForm({ ...form, dia_chi: e.target.value })}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            {editingId ? "Cập nhật" : "Thêm"}
          </button>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map(st => (
            <tr key={st.id}>
              <td>{st.ten}</td>
              <td>{st.tuoi}</td>
              <td>{st.dia_chi}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(st)}>Sửa</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(st.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
