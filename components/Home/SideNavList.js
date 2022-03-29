const EnhancedComponent = (props) => (OldComponent) => {
  function NewComponent() {
    return (
      <li className="list-none items-center hover:!cursor-pointer hover:!bg-slate-50 transition-all ease-in-out p-2 hidden us:flex">
        <div className="w-6 h-6 m-2 text-gray-700">
          <OldComponent className="w-full h-full" />
        </div>
        <span className={`pl-1 pr-4 hidden group-hover:inline-block`}>
          {props.itemName}
        </span>
      </li>
    );
  }
  return NewComponent;
};

export default EnhancedComponent;
