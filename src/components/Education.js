import React from 'react'
import Table from 'react-bootstrap/Table';
import "./Education.css"
function Education() {
  return (
    <>
    <div class="table">
    <center>
    <h2>My Education</h2>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th></th>
          <th>Year</th>
          <th>University</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2021 - Present</td>
          <td>S P Jain School of Global Management Bachelor of Data Science, CGPA : 3.2/4.3</td>
          <td>Mumbai and Sydney</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2018 - 2020</td>
          <td>B.K Gadia 'A' Level Junior College : A levels certification</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2016 - 2018</td>
          <td>D. G. Khetan International School : I.G.C.S.E. </td>
          <td>Mumbai</td>
        </tr>
      </tbody>
    </Table>
    </center>
    </div>
    </>
      );
    }
export default Education
