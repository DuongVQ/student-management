# --- Build React ---
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Cài đặt và build React
RUN npm install
RUN npm run build

# --- Serve bằng NGINX ---
FROM nginx:stable-alpine

# Copy build React vào thư mục web root của NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Copy cấu hình NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port mặc định của NGINX
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
