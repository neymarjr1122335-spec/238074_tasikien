# Sử dụng image Nginx siêu nhẹ để phục vụ file tĩnh HTML/JS
FROM nginx:alpine

# Sao chép file index.html vào thư mục public của Nginx
COPY index.html /usr/share/nginx/html/index.html

# Mở cổng 80 cho web server
EXPOSE 80

# Chạy Nginx ở chế độ foreground
CMD ["nginx", "-g", "daemon off;"]