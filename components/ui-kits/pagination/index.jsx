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
                  ? 'px-4 py-2 rounded-lg mr-1 border-2 text-lg font-semibold cursor-pointer bg-gray-200 hover:bg-gray-300 active:bg-gray-200 active:scale-95 duration-300'
                  : 'px-4 py-2 rounded-lg mr-1 border-2 text-lg font-semibold cursor-pointer bg-transparent hover:bg-gray-300 active:bg-gray-200 active:scale-95 duration-300'
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
