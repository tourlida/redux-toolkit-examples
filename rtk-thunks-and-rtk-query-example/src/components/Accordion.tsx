import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ header, children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div className="cursor-pointer" onClick={handleClick}>
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {isOpen && <div className="p-2 border-t">{children}</div> }
    </div>
  );
}

export { Accordion };
