const Statistics = ({ text, action }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{action}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Statistics;
