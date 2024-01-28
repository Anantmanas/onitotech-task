import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { User } from "./Redux/userSlice";

interface DatatableListProps {
  users: User[];
}

const DatatableList: React.FC<DatatableListProps> = ({ users }) => {
  const columns: TableColumn<User>[] = [
    { name: 'ID', selector: (row: User) => row.id },
    { name: 'Name', selector: (row: User) => row.name },
    { name: 'Age', selector: (row: User) => row.age },
    { name: 'Sex', selector: (row: User) => row.sex },
    { name: 'Mobile', selector: (row: User) => row.mobile },
    { name: 'GovtIdType', selector: (row: User) => row.govtIdType },
    { name: 'GovtId', selector: (row: User) => row.govtId },
  ];

  const sortedData = [...users].reverse().map((user, index) => ({ ...user, id: index + 1 }));

  const customStyles = {
    headRow: {
      style: {
        background: '#1D2B53',
        color: '#fff',
        
      },
    },
    headCells: {
      style: {
        fontSize: '16px',
      },
    },
    rows: {
      style: {
        fontSize: '14px',
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: (row: User) => row.age < 18,
      style: {
        backgroundColor: '#ffcccc',
      },
    },
    {
      when: (row : User) => row.sex === 'Female',
      style: {
        backgroundColor: '#ffe6ff',
      },
    },
  ];

  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={sortedData}
      pagination
      customStyles={customStyles}
      conditionalRowStyles={conditionalRowStyles}
    />
  );
};

export default DatatableList;
