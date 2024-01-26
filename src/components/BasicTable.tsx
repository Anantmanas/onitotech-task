import React from 'react';
import 'datatables.net';
import { User } from "./Redux/userSlice"
import $ from 'jquery'
interface DatatableListProps {
  users: User[]; // Assuming User interface is defined in userSlice.ts
}

class DatatableList extends React.Component<DatatableListProps> {
  tableRef = React.createRef<HTMLTableElement>();

  componentDidMount() {
    this.initDataTable();
  }

  componentDidUpdate() {
    this.initDataTable();
  }

  initDataTable() {
    if (this.tableRef.current) {
      $(this.tableRef.current).DataTable().destroy();
      $(this.tableRef.current).DataTable({
        data: this.props.users,
        columns: [
          { title: 'ID', data: 'id' },
          { title: 'Name', data: 'name' },
          { title: 'Age', data: 'age' },
          { title: 'Sex', data: 'sex' },
          { title: 'Mobile', data: 'mobile' },
          // ... (Repeat for other columns)
        ],
      });
    }
  }

  render() {
    return <table ref={this.tableRef} />;
  }
}

export default DatatableList;
