import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../utils/apiService";
import User from "./User";
import "./Homework26.scss"

/**
 * Sử dụng API (hàm đã viết sẵn để hiển thị danh sách users)
 * Cụ thể: sử dùng hàm getUserWithPaginate (page, limit) trong file apiService (đã import ở trên)
 * page chính là trang muốn lấy, limit là giới hạn số lượng bản ghi sẽ lấy
 * Ở đây, truyền vào mặc định là getUserWithPaginate (1, 3) để có dữ liệu
 */

/**
 * Hiển thị list user lấy được ra view
 * Mỗi 1 user là 1 component
 * Về hiển thị hình ảnh base64, có thể tham khảo component Login, or Google keke ^^
 * Có thêm option để show/hide hình ảnh tại mỗi user
 * Tự CSS để có 1 giao diện 'tương đối' và dễ nhìn ^^
 */

const Homework26 = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchUsersWithPaginate();
    }, [])

    const fetchUsersWithPaginate = async () => {
        let res = await getUserWithPaginate(1, 3);
        if (res && res.EC === 0) {
            setData(res.DT.users)
        }
    }

    return (
        <div className="homework-container">
            {data && data.length > 0 && data.map((item, index) => {
                return (
                    <div key={`user-${index + 1}`} >
                        <div className="home-user"><User data={item} /></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Homework26;