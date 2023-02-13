import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../utils/JwtUtils";
function Mypage ()  {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const navigate = useNavigate();
    useEffect(() =>{
        console.log("myPage", accessToken);
        if(isAuth(accessToken)){
            
        }else{
            alert("로그인이 필요합니다.")
            navigate('/');
        }

    }, []);

    return (
        <>
         myPage
        </>
    )
}

export default Mypage;