const ContactRow = ({ contact, setSelectedContactId }) => {
  const { name, phone, email, id } = contact;
  return (
    <>
      <tr onClick={() => setSelectedContactId(id)}>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
      </tr>
    </>
  );
};

export default ContactRow;
