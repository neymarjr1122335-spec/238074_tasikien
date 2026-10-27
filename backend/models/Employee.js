const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: { 
        type: String, 
        required: [true, 'Mã nhân viên là bắt buộc'], 
        unique: true,
        trim: true 
    },
    fullName: { 
        type: String, 
        required: [true, 'Họ và tên nhân viên là bắt buộc'],
        trim: true 
    },
    gender: { 
        type: String, 
        default: 'Khác' 
    },
    dateOfBirth: { 
        type: String // Hoặc Date tùy chọn
    },
    department: { 
        type: String, 
        required: [true, 'Phòng ban là bắt buộc'] 
    },
    position: { 
        type: String, 
        required: [true, 'Chức vụ là bắt buộc'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email là bắt buộc'], 
        unique: true,
        lowercase: true,
        trim: true 
    },
    phone: { 
        type: String, 
        trim: true 
    },
    hireDate: { 
        type: String // Hoặc Date tùy chọn
    },
    status: { 
        type: String, 
        default: 'Đang làm việc' 
    }
}, { 
    timestamps: true // Tự động tạo createdAt và updatedAt
});

module.exports = mongoose.model('Employee', employeeSchema);