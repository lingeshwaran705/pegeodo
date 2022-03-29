const EnhancedComponent = (props: any) => (OldComponent: any) => {
  function NewComponent() {
    return (
      <li className="list-none items-center hover:!cursor-pointer hover:!text-orange-500 transition-all ease-in-out p-2 hidden us:flex">
        <div className="w-6 h-6 text-gray-700">
          <OldComponent className="w-full h-full" />
        </div>
        <span
          className={`pl-3 pr-4 translate-y-[2px] hidden md:block group-hover:block  `}
        >
          {props.itemName}
        </span>
      </li>
    );
  }
  return NewComponent;
};

export default EnhancedComponent;
