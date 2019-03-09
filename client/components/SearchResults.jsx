import React from 'react';
import ReactPaginate from 'react-paginate';

const navMenu = ({data, pageCount, handlePageClick}) => {
  return (
    <div className="results">
      <table>
      <tr>
        <th className="date">Date</th>
        <th>Description</th> 
      </tr>
      {data.map((obj, i) => {
        if (obj.date[0] === '-') {
          obj.date = obj.date.substring(1) + ' B.C.E.'
        }
        return (
          <tr key={i}>
            <td className="date">{obj.date}</td>
            <td>{obj.description}</td>
          </tr>
        )
      })}
      </table>
      <div className="pagination-container">
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
    </div>
  )
}
export default navMenu;