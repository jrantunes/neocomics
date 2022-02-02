import { Button } from './styles';

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ 
  number, 
  onPageChange, 
  isCurrent = false 
}: PaginationItemProps) {
  return (
    <Button 
      isCurrent={isCurrent} 
      disabled={isCurrent}
      onClick={isCurrent ? () => {} : () => onPageChange(number)}
    >
      {number}
    </Button>
  )
}