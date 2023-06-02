# Sử dụng image node.js làm base
FROM node:14

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json vào thư mục /app
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào thư mục /app
COPY . .

# Build ứng dụng
RUN npm run build

# Expose cổng 5000 (hoặc cổng bạn sử dụng cho ứng dụng)
EXPOSE 5000

# Khởi chạy ứng dụng
CMD ["node", "client/src/index.js"]