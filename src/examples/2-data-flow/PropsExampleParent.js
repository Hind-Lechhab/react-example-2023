import PropsExampleChild from "./PropsExampleChild";

function PropsExampleParent() {
  let user = {
    name: "test",
    age: 25,
  };

  return (
    <div>
      <hr />
      <h1>Props example</h1>
      <PropsExampleChild userVar={user} firstName="Mohamed" lastName="Amine" />
      <PropsExampleChild userVar={user} firstName="Zakaria" lastName="Zakaria" />
    </div>
  );
}

export default PropsExampleParent;
