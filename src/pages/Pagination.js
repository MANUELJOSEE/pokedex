import { useEffect, useState } from "react";

const pagination = ({ currentPage, totalPages, onPageChange }) => {

    const [displayedPages, setDisplayedPages] = useState([]);
  
    // Actualizar la lista de páginas mostradas cuando cambia la página actual
    useEffect(() => {
      const generatePageNumbers = () => {
        const pages = [];
        const maxDisplayedPages = 5; // 
  
      
        let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
        let endPage = startPage + maxDisplayedPages - 1;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = Math.max(1, endPage - maxDisplayedPages + 1);
        }
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
        return pages;
      };
  
      setDisplayedPages(generatePageNumbers());
    }, [currentPage, totalPages]);
  
    return (
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </button>
        {displayedPages.map((page) => (
          <button
            key={page}
            disabled={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    );
  };
  export default pagination;