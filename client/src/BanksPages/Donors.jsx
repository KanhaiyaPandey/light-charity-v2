import { useLoaderData } from "react-router-dom";

const Donors = () => {
  const data = useLoaderData();

  return (
    <div className=" flex items-center justify-center w-full h-auto">
      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead className="">
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>number</th>
              <th>location</th>
              <th>Last Donated</th>
              <th>Donated</th>
            </tr>
          </thead>
          <tbody>
            {data.donors.map((donor, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>{donor.number}</td>
                <td>{donor.address}</td>
                <td>12/16/2020</td>
                <td>{donor.donated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donors;
