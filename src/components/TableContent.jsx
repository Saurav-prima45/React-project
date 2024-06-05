const TableContent = (props) => {
    const { data } = props;
  
    return (
      <tr>
        <td>
          <div className="d-flex">
            <img
              className="img-sm rounded-circle mb-md-0 mr-2"
              src={data.imgUrl}
              alt="profile image"
            />
            <div>
              <div> Company</div>
              <div className="font-weight-bold mt-1">{data.companyName}</div>
            </div>
          </div>
        </td>
        <td>
          Budget
          <div className="font-weight-bold  mt-1">{data.budget} </div>
        </td>
        <td>
          Status
          <div className="font-weight-bold text-success  mt-1">
            {data.status}{" "}
          </div>
        </td>
        <td>
          Deadline
          <div className="font-weight-bold  mt-1">{data.deadline}</div>
        </td>
        <td>
          <button type="button" className="btn btn-sm btn-primary" style={{verticalAlign:'middle'}}>
            edit actions
          </button>
        </td>
      </tr>
    );
  };
  
  export default TableContent;