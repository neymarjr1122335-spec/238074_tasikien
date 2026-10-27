# Sử dụng image Node.js phiên bản ổn định (Alpine nhẹ)
FROM node:18-alpine

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn backend còn lại vào container
COPY . .

# Mở cổng 5000 cho ứng dụng
EXPOSE 5000

# Lệnh khởi chạy ứng dụng khi container bắt đầu chạy
CMD ["npm", "start"]