const FormCheckbox = ({ label, name, defaultValue, size }) => {
    return (
      <div className='form-control items-center '>
        <label htmlFor={name} className='label cursor-pointer '>
          <span className='label-text text-slate-950 capitalize '>{label}</span>
        </label>
        <input
          type='checkbox'
          name={name}
          defaultChecked={false}
          className={`checkbox bg-gray-100 ${size}`}
        />
      </div>
    );
  };
  export default FormCheckbox;
  