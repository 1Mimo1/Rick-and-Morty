const PageCreator = ({pages, setCurrentPage, currentPage}) => {
  return (
    <ul className="pagecreator-ul">
        {
            pages.map((page) => <li className={`${currentPage === page && "pagecreator-li"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
        }
    </ul>
  )
}
export default PageCreator