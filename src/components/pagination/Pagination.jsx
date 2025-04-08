import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination() {
  const [active, setActive] = React.useState(1);
  const totalPages = 10; // Total number of pages

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3; // Số lượng nút hiển thị cố định (bao gồm cả nút hiện tại và dấu "...")
  
    if (totalPages <= maxVisiblePages) {
      // Hiển thị tất cả các trang nếu tổng số trang <= số nút hiển thị
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <IconButton key={i} {...getItemProps(i)}>
            {i}
          </IconButton>
        );
      }
    } else {
      // Hiển thị các trang lân cận trang hiện tại
      const startPage = Math.max(1, active - 1);
      const endPage = Math.min(totalPages, active + 1);
  
      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <IconButton key={i} {...getItemProps(i)}>
            {i}
          </IconButton>
        );
      }
  
      // Thêm dấu "..." nếu còn các trang ở phía trước
      if (startPage > 1) {
        pages.unshift(<span key="start-ellipsis">...</span>);
      }
  
      // Thêm dấu "..." nếu còn các trang ở phía sau
      if (endPage < totalPages) {
        pages.push(<span key="end-ellipsis">...</span>);
      }
    }
  
    return pages;
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">{renderPageNumbers()}</div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Pagination;