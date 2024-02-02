const ContactRow = ({ contact }) => {
  const { name, phone, email } = contact;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
      </tr>
    </>
  );
};

export default ContactRow;
