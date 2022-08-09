import { Component } from "react";
import Table from 'react-bootstrap/Table';
class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
       <Table striped bordered hover>
      <thead>
        <tr>
          Developer Information
        </tr>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact me at </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mohammad</td>
          <td>Al-Haimouni</td>
          <td><a href="https://github.com/Alhaimouni">Github</a></td>
        </tr>
      </tbody>
    </Table>
      </>
    )
  }
};

export default Profile;