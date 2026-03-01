import { useState } from 'react';
import './Form.css';

const Form = ({ fields, onSubmit, buttonText = 'Enviar', loading = false, initialData = null }) => {
  const [formData, setFormData] = useState(() => {
    const initial = {};
    fields.forEach((field) => {
      initial[field.name] = initialData?.[field.name] || '';
    });
    return initial;
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} é obrigatório`;
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Email inválido';
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const getInputType = (field) => {
    if (field.type === 'select') return 'select';
    if (field.type === 'textarea') return 'textarea';
    return 'input';
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      {fields.map((field) => {
        const inputType = getInputType(field);
        
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {field.label}
              {field.required && <span className="required">*</span>}
            </label>
            
            {inputType === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`form-input ${errors[field.name] ? 'error' : ''}`}
              >
                <option value="">Selecione...</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : inputType === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows={field.rows || 4}
                className={`form-input ${errors[field.name] ? 'error' : ''}`}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                type={field.type || 'text'}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`form-input ${errors[field.name] ? 'error' : ''}`}
                placeholder={field.placeholder}
              />
            )}
            
            {errors[field.name] && (
              <span className="form-error">{errors[field.name]}</span>
            )}
          </div>
        );
      })}

      <button type="submit" className="form-submit" disabled={loading}>
        {loading ? 'Enviando...' : buttonText}
      </button>
    </form>
  );
};

export default Form;
