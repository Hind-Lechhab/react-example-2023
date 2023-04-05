function PropsExampleChild(props) {
  return (
    <>
      <h3>Hello {props.firstName + " " + props.lastName}!</h3>

      {props.userVar.age}
    </>
  );
}

export default PropsExampleChild;
