const Welcome = ({ name, isMember }) => {
  const wel = {
    name: { name },
    isMember: { isMember },
  };

  return (
    <>
      {isMember === true ? (
        <div>{name}님 다시 오셨군요.</div>
      ) : (
        <div>{name}님 가입하시겠어요?</div>
      )}
    </>
  );
};

export default Welcome;
