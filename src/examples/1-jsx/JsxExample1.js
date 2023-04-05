const JsxExample1 = () => {
  let name = "Mohamed";

  function formatName(user) {
    return user.id + " " + user.name;
  }

  let user = { id: 123, name: "Mohamed" };

  return (
    <>
      <div id={user.id}>{formatName(user)}</div>
      { 1 + 2 }
    </>
  );
};

export default JsxExample1;
