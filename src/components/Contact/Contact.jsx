
const Contact = () => {
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>POSITION</th>
              <th>EMAIL/NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>cy.121@gmail.com</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Chief Executive Manager</td>
              <td>hart.usa.121@gmail.com</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>briceNew@yahoo.com / +122123</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Contact;