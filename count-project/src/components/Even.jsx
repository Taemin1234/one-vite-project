import { useEffect } from 'react';

const Even = () => {
    useEffect(() => {
        
        // 클린업 함수
        return () => {
            console.log("unmount")
        }
    },[])
    return <div>짝수입니다.</div>
};

export default Even