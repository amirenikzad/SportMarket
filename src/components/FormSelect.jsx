const FormSelect = ({ label, name, list, defaultValue, size }) => {
    return (
      <div className='form-control '>
        <label htmlFor={name} className='text-right'>
          <span className='label-text  text-slate-950 capitalize '>{label}</span>
        </label>
        <select
          name={name}
          id={name}
          className={`select text-slate-900 select-bordered bg-red-200 ${size}`}
          defaultValue={defaultValue}
        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  export default FormSelect;
  