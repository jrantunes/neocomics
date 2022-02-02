import { Container } from './styles';
import { PaginationItem } from './PaginationItem';

type PaginationProps = {
  totalCount: number;
  countPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  currentPage = 1,
  totalCount,
  countPerPage = 20,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCount / countPerPage);

  const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <Container>
      { currentPage > (1 + siblingsCount) && (
        <>
          <PaginationItem number={1} onPageChange={onPageChange} />

          { currentPage > (2 + siblingsCount) && (
            <strong>...</strong>
          ) }
        </>
      ) }

      { previousPages.length > 0 && previousPages.map(page => (
        <PaginationItem key={page} number={page} onPageChange={onPageChange} />
      )) }
      
      <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />

      { nextPages.length > 0 && nextPages.map(page => (
        <PaginationItem key={page} number={page} onPageChange={onPageChange} />
      )) }

      { (currentPage + siblingsCount) < lastPage && (
        <>
          { (currentPage + 1 + siblingsCount) < lastPage && (
            <strong>...</strong>
          ) }
          
          <PaginationItem number={lastPage} onPageChange={onPageChange} />
        </>
      ) }
    </Container>
  );
}