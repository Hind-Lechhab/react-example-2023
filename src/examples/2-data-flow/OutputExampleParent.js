import OutputExampleChild from "./OutputExampleChild";

function OutputExampleParent() {
  function showMessage(message) {
    return <h3>message from child : {message}</h3>;
  }

  return (
    <>
      <hr />
      <h1>Output example</h1>
      <h2>Parent</h2>
      <OutputExampleChild handleCallback={showMessage} />
    </>
  );
}

export default OutputExampleParent;
