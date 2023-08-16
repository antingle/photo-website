const BodyList: FlowComponent<{ list: string[] }, JSX.Element> = ({ list, ...props }) => {
  return (
    <ul {...props}>
      {list?.map((s) => {
        return <li>{s}</li>;
      })}
    </ul>
  );
};

export default BodyList;
