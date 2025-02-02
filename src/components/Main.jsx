import style from "./Main.module.css";

const Main = () => {
  const user = {
    name: "jung hwan",
    isLogin: true,
  };

  return (
    <main>
      {user.isLogin ? (
        <div className={style.logout}>로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </main>
  );
};

export default Main;
