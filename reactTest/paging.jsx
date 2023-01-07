import React, { useState, useEffect } from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
  const [lastPage, setLastPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [list, setList] = useState([]);
 
  const pagingHandler = (page) => {
    if (page < 0 || page > lastPage) {
      return
    }
    setIsLoading(true);
    getData(page);
  }

  const getData = async (page) => {
    const response = await fetch(`${USERS_URL}?page=${page}`);
    if (response.status === 200) {
      const data = await response.json();
      setList(data.results);
      setCurrentPage(page);
      setIsLoading(false);
      if ((data.count%10) === 0) {
        setLastPage((data.count/10) - 1);
      } else {
        setLastPage(parseInt(data.count/10));
      }
    } else {
      throw new Error('API ERROR')
    }
  }

  const disabledHandler = (type) => {
    if (isLoading) return true; 
    switch (type) {
      case 'first' :
        if (currentPage === 0) return true;
        return false; 
      case 'prev' :
        if (currentPage === 0) return true;
        return false; 
      case 'next' :
        if (currentPage === lastPage) return true;
        return false; 
      case 'last' :
        if (currentPage === lastPage) return true;
        return false; 
      default : 
        return true;
    }
  }

  useEffect(async () => {
    getData(0);
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            list.length > 0 && list.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{el.id}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" disabled={disabledHandler('first') ? true : false} onClick={() => pagingHandler(0)}>first</button>
        <button className="previous-page-btn" disabled={disabledHandler('prev') ? true : false} onClick={() => pagingHandler(currentPage - 1)}>previous</button>
        <button className="next-page-btn" disabled={disabledHandler('next') ? true : false} onClick={() => pagingHandler(currentPage + 1)}>next</button>
        <button className="last-page-btn" disabled={disabledHandler('last') ? true : false} onClick={() => pagingHandler(lastPage)}>last</button>
      </section>
    </div>
  );
};
