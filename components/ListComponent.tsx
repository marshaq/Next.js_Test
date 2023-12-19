// components/TableComponent.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,TextField,Button } from '@mui/material';
import '@mui/material/styles';

import { useRouter } from 'next/router';

interface Row {

  name: string;
  country: number;
  alpha_two_code: string;
  domains:string[];
}

interface TableComponentProps {
  data: Row[];
  route: String;
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
    const router = useRouter();
     // State to manage the value of the TextField
  const [textFieldValue, setTextFieldValue] = React.useState<string>('');

    // Event handler for TextField change
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  // Filter the data based on the search input
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(textFieldValue.toLowerCase())
  );

  return (
    <>
    <TextField
        label="Search by Name"
        variant="standard"
        value={textFieldValue}
        onChange={handleTextFieldChange}
      />

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Country Code</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData?.map((row) => (
            <TableRow key={row.name} onClick={()=>router.push(`/universities/${row.domains[0]}`)}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.alpha_two_code}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default TableComponent;
