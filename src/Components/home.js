import React from "react";
import {
  makeStyles,
  Button,
  tokens,
  Text,
  CardFooter,
} from "@fluentui/react-components";

import {
  Card,
  CardHeader,
  CardPreview,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  TableBody,
  TableRow,
  TableCell,
} from "@fluentui/react-components";
import { CursorClick24Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({

  card: {
    width: "400px",
    maxWidth: "100%",
    height: "fit-content",
    marginBottom: "16px", 
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },
  smallRadius: {
    borderRadius: tokens.borderRadiusSmall,
    width: "100%"
  },
  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  logoBadge: {
    padding: "5px",
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },

});

const items = [
  {
    userId: 1,
    jobTitle: "Software Developer",
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    employeeCode: "E123",
    region: "North",
    phoneNumber: "123-456-7890",
    emailAddress: "john@example.com",
  },
  {
    userId: 2,
    jobTitle: "UI/UX Designer",
    firstName: "Jane",
    lastName: "Smith",
    fullName: "Jane Smith",
    employeeCode: "E456",
    region: "South",
    phoneNumber: "987-654-3210",
    emailAddress: "jane@example.com",
  },
];

const columns = [
  { columnKey: "userId", label: "User ID" },
  { columnKey: "jobTitle", label: "Job Title" },
  { columnKey: "firstName", label: "First Name" },
  { columnKey: "lastName", label: "Last Name" },
  { columnKey: "employeeCode", label: "Employee Code" },
  { columnKey: "region", label: "Region" },
  { columnKey: "phoneNumber", label: "Phone No" },
  { columnKey: "emailAddress", label: "Email Address" },
];

const Home = () => {
  const styles = useStyles();

  return (
    <>
      <div className="main">
        <Card className={styles.card}>
          <CardPreview className={styles.grayBackground}>
            <img
              className={styles.smallRadius}
              src="https://www.ensarsolutions.com/images/ensar/digital.svg"
              alt="Presentation Preview"
            />
          </CardPreview>
          <CardHeader header={<Text weight="bold">Bussiness Applications</Text>} />
          <CardFooter>
            <Button appearance="default" icon={<CursorClick24Filled />}><a href="./about">Click Me</a></Button>
          </CardFooter>
        </Card>

        <Card className={styles.card} >
          <CardPreview className={styles.grayBackground}>
            <img
              className={styles.smallRadius}
              src="https://www.ensarsolutions.com/images/ensar/security.svg"
              alt="Presentation Preview"
            />
          </CardPreview>
          <CardHeader header={<Text weight="bold">Cloud Security</Text>} />
          <CardFooter>
            <Button appearance="default" icon={<CursorClick24Filled />}><a href="./about">Click Me</a></Button>
          </CardFooter>
        </Card>
      </div>
      <div className="table-container">
      <h2>Employee Table :</h2>
        <Table aria-label="Home table">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey}>
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.userId}>
                <TableCell>
                  <TableCellLayout>{item.userId}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.jobTitle}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.firstName}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.lastName}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.employeeCode}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.region}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.phoneNumber}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{item.emailAddress}</TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Home;
