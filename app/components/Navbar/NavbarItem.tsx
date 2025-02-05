interface NavbarItemProps {
  selected: boolean;
  label: string;
}

const NavbarItem = ({ selected, label }: NavbarItemProps) => {
  return (
    <div
      className={`${selected ? "text-teal-500": ""} relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400`}
    >
      {label}
      <span className={`${selected ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" : ""}`}></span>
    </div>
  );
};

export default NavbarItem;