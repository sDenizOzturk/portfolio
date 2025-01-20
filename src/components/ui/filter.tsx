import * as React from "react";

const baseStyle =
  "inline-flex items-center rounded-md border px-2.5 py-0.5 mx-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent ";

const defaultStyle =
  baseStyle + "bg-secondary text-secondary-foreground hover:bg-secondary/80";
const selecteStyle =
  baseStyle +
  "bg-primary text-primary-foreground shadow hover:bg-primary/80 ring-2 ring-ring ring-offset-2 ";

export interface FilterProps {
  filter: string;
  setFilter: (arg1: any) => void;
  currentFilter: string;
}

function Filter({ filter, setFilter, currentFilter, ...props }: FilterProps) {
  const _classname = filter === currentFilter ? selecteStyle : defaultStyle;
  return (
    <button className={_classname} {...props} onClick={() => setFilter(filter)}>
      {filter}
    </button>
  );
}

export { Filter };
