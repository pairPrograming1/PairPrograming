// hooks/useFAQState.js
import { useState } from "react";

export function useFAQState() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isItemOpen = (index) => {
    return !!openItems[index];
  };

  return {
    openItems,
    toggleItem,
    isItemOpen,
  };
}
