// import App from '../Application'


const Table = ({ sat }) => {
  // sat = props.sat;
  return (
    <table>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
    <thead>
     <tr>
       <th>Header TBD</th>
     </tr>
     </thead>
     <tbody>
      {sat.map ((data, id) => {
        return (
        <tr id= "id">
      <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       {/* score > 70 ? "Excellent" : "Do better" */}
       <td>{data.operational == true ? "Active" : "Inactive"}</td>

      </tr>
      )}
      )}
     </tbody>
   </table>
  );
};

export default Table;