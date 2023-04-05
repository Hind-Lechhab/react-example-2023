import PropsExampleChildAAAA from "./PropsExampleChild";

function PropsExampleParent() {
  let user = {
    name: "test",
    age: 25,
  };

  return (
    <div>
      <hr />
      <h1>Props example</h1>
      <PropsExampleChildAAAA userVar={user} firstName="Mohamed" lastName="Amine" />
      <PropsExampleChildAAAA userVar={user} firstName="Zakaria" lastName="Zakaria" />
    </div>
  );
}

export default PropsExampleParent;
