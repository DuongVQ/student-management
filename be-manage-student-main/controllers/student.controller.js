const Student = require('../models/student.model');

// Lấy danh sách sinh viên
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Thêm sinh viên
exports.createStudent = async (req, res) => {
  try {
    const { ten, tuoi, dia_chi } = req.body;
    const student = await Student.create({ ten, tuoi, dia_chi });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: 'Không thể tạo sinh viên' });
  }
};

// Update sinh viên
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { ten, tuoi, dia_chi } = req.body;
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: 'Không tìm thấy sinh viên' });
    }
    await student.update({ ten, tuoi, dia_chi });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: 'Không thể cập nhật sinh viên' });
  }
};

// Xóa sinh viên
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: 'Không tìm thấy sinh viên' });
    }
    await student.destroy();
    res.json({ message: 'Đã xóa sinh viên' });
  } catch (error) {
    res.status(400).json({ error: 'Không thể xóa sinh viên' });
  }
};
