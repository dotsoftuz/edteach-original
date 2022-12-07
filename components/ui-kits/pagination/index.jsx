import _ from 'lodash';
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              onClick={() => onPageChange(page)}
              key={page}
              className={
                page === currentPage
                  ? 'px-3 py-1 rounded-lg mr-1 border-2 text-lg font-semibold cursor-pointer bg-white z-20 shadow-xl active:scale-95 duration-300'
                  : 'px-3 py-1 rounded-lg mr-1 border-2 hover:border-blue-500 z-20 text-lg font-semibold cursor-pointer bg-white shadow-xl active:scale-95 duration-300'
              }
            >
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
