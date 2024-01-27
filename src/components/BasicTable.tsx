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
    { name: 'GovtIdType', selector: (row: User) => row.govtIdType },
    { name: 'GovtId', selector: (row: User) => row.govtId },
    // { name: 'Address', selector: (row: User) => row.address },
    // { name: 'State', selector: (row: User) => row.state },
    // { name: 'City', selector: (row: User) => row.city },
    // { name: 'Country', selector: (row: User) => row.selectedCountry },
    // { name: 'Pincode', selector: (row: User) => row.pincode },

  ];
  
  const sortedData = [...users].reverse().map((user, index) => ({ ...user, id: index + 1 }));


  return (
    <DataTable
      title="User Data"
      columns={columns}
      data={sortedData}
      pagination
    />
    
  );
};

export default DatatableList;
