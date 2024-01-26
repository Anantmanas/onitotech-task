import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { User } from "./Redux/userSlice"

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
    { name: 'govtIdType', selector: (row: User) => row.govtIdType },
    { name: 'govtId', selector: (row: User) => row.govtId },
    { name: 'address', selector: (row: User) => row.address },
    { name: 'state', selector: (row: User) => row.state },
    { name: 'city', selector: (row: User) => row.city },
    { name: 'country', selector: (row: User) => row.selectedCountry },
    { name: 'pincode', selector: (row: User) => row.pincode },

  ];
  
  const data = users.map((user, index) => ({ ...user, id: index + 1 }));

  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={data}
      pagination
    />
  );
};

export default DatatableList;
