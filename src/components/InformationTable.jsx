import React from 'react';

const InformationTable = ({ contactsStatus, isUpload }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          {isUpload ? <th>Status</th> : <th>Phone Number</th>}
        </tr>
      </thead>
      <tbody>
        {contactsStatus.map((contact, index) => (
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            {isUpload ? <td>{contact.status}</td> : <td>{contact.phone}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InformationTable;
