// Arrow function
const JsxExamples2 = () => {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Mohamed",
    lastName: "Amine",
  };

  return (
    <div>
      <hr />
      <h1>JSX examples 2</h1>

      <h2>Hello, {formatName(user)}! </h2>
      {1 + 1}
    </div>
  );
};

export default JsxExamples2;
