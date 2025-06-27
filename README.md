## Vai trò Nginx trong dự án
- Proxy: Người đại diện trao đổi thông tin giữa Client và Server
- Khi người dùng truy cập trang web thì họ sẽ chỉ cần tương tác với Nginx và Nginx sẽ xử lý Req từ người dùng và trả về Res từ Server
- Cụ thể: khi người dùng muốn thực hiện phương thức GET lấy ra danh sách học sinh và cần api là localhost:4000/students nhưng bên backend sau khi build trên docker thì api của nó sẽ là backend:4000/students
  Vì vậy, Nginx sẽ nhận yêu cầu của người dùng là đang cần lấy danh sách và sẽ gửi yêu cầu đến Server là backend:4000/students và lấy ra dữ liệu trả về người dùng
  ![nginx](https://images.viblo.asia/d3840ae5-fa0b-47fd-aec5-e27c0075ab1b.png)
