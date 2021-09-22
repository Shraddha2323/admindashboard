// import React from "react";

// const Body = () => {
//   return <div
//   style={{

//  float:"left",
//   }}>

//     <h1>Program Manager</h1>
//      <hr size="4" width="40%" color="black"></hr>
//     <br/>
//     <div class="spacing">
//     <h4>Fitness Nutrition Journey</h4>
//     <hr size="4" width="500%" color="black"></hr>

//     </div>

//   </div>;
// };

// export default Body;

import React, { useState } from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { BsChatSquare } from "react-icons/bs";
import{BiNotepad} from "react-icons/bi";
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  const cards = [
    { type: "Custom Nutrition", Client: "Walter White",Name:"Package Number", isActive:true, date:"25/06/20" },
    { type: "Custom Nutrition", Client: "Walter White",Name:"Package Number", isActive:false, date:"25/06/20" },
    { type: "Custom Nutrition", Client: "Walter White",Name:"Package Number", isActive:true, date:"25/06/20" },
    { type: "Custom Nutrition", Client: "Walter White",Name:"Package Number", isActive:false, date:"25/06/20" },
    { type: "Custom Nutrition", Client: "Walter White",Name:"Package Number", isActive:true, date:"25/06/20" },
  ];

 return (
 /* <div
    style={{
  
   float:"left",
     }}>
  
      <h1>Program Manager</h1>
      <hr size="4" width="40%" color="black"></hr>
       <br/>
       <div class="spacing">
       <h4>Fitness Nutrition Journey</h4>
       <hr size="4" width="500%" color="black"></hr>
  
       </div>
  </div>*/
  

    <table style={{width:"100%"}}>
    <tr key="head">
        <th>Type</th>
        <th>Client</th>
        <th>Name</th>
        <th>Status</th>
        <th>Start Date</th>
        <th>Renewal</th>
      </tr>
  
      <tr> 
        <td>
      Custom Nutrition
          </td>
          
						 <td>Walter White</td>
						 <td>Package Name</td>
					
						 
              <td> <button style={{ backgroundColor: "green" }}
 
        >
          Active</button></td>
          
          <td>25/06/20</td>
          <td>25/07/20</td>
						</tr>

            
        
        {cards.map((i) => (
          
            <Card Shraddha={i} />
        
        ))}
      
    </table>
  );
}

function Card(props) {
  // const {} = props;
  console.log(props);
  const [isActive, setIsActive] = useState(props.Shraddha.isActive);

  return (
    <div
      style={{ height: "10vh", width: "100%", backgroundColor: "powderblue" }}
    >
  <table>
  

    <tr>
      <td style={{width:"30%"}}> 

      {props.Shraddha.type} 
      </td>
      <td>
       {props.Shraddha.Client}
      </td>
     
     <td>
        {isActive ? (
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setIsActive(false)}
        >
          Active
        </button>) : (
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setIsActive(true)}
        >
          Deactive
        </button>
        )}
      </td>

      <td>
      {!isActive && (
        // <div
        //   style={{
        //     height: "20vh",
        //     width: "20vh",
        //     backgroundColor: "orange",
        //     borderRadius: "50%",
        //   }}
        // ></div>
        <span>{props.Shraddha.logo}</span>
      )}</td>
      </tr>
      </table>
    </div>
    
  );
}

export default Table;
