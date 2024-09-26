const FormInput = ({ label, name, type, defaultValue, size }) => {
    return (
      <div className='form-control'>
        <label htmlFor={name} className='text-right'>
          <span className='label-text text-right text-slate-950 capitalize'>{label}</span>
        </label>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          className={`input text-slate-950 text-right input-bordered bg-red-200 ${size}`}
          placeholder="اینجا جستجو کنید"
        />
      </div>
    );
  };
  export default FormInput;