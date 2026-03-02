import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [focused, setFocused] = useState({});

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

  const handleFocus = (fieldName) => {
    setFocused((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocused((prev) => ({ ...prev, [fieldName]: false }));
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

  const hasValue = (fieldName) => formData[fieldName]?.toString().trim() !== '';

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      {fields.map((field) => {
        const inputType = getInputType(field);
        const isFocused = focused[field.name];
        const isFilled = hasValue(field.name);
        // select fields should always display the label above to avoid
        // colliding with the placeholder option text. other inputs use
        // floating behavior based on focus/value.
        const showFloating =
          inputType === 'select' ? true : isFocused || isFilled;

        return (
          <motion.div 
            key={field.name} 
            className={`form-group ${showFloating ? 'floating' : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="input-wrapper">
              {inputType === 'select' ? (
                <>
                  <label 
                    htmlFor={field.name} 
                    className={`form-label-floating ${showFloating ? 'active' : ''}`}
                  >
                    {field.label}
                    {field.required && <span className="required">*</span>}
                  </label>
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    className={`form-input ${errors[field.name] ? 'error' : ''} ${showFloating ? 'has-value' : ''}`}
                  >
                    <option value="">Selecione...</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </>
              ) : inputType === 'textarea' ? (
                <>
                  <label 
                    htmlFor={field.name} 
                    className={`form-label-floating ${showFloating ? 'active' : ''}`}
                  >
                    {field.label}
                    {field.required && <span className="required">*</span>}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    rows={field.rows || 4}
                    className={`form-input ${errors[field.name] ? 'error' : ''} ${showFloating ? 'has-value' : ''}`}
                    placeholder={field.placeholder}
                  />
                </>
              ) : (
                <>
                  <label 
                    htmlFor={field.name} 
                    className={`form-label-floating ${showFloating ? 'active' : ''}`}
                  >
                    {field.label}
                    {field.required && <span className="required">*</span>}
                  </label>
                  <input
                    type={field.type || 'text'}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    className={`form-input ${errors[field.name] ? 'error' : ''} ${showFloating ? 'has-value' : ''}`}
                    placeholder={field.placeholder}
                  />
                </>
              )}
            </div>
            
            {errors[field.name] && (
              <motion.span 
                className="form-error"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {errors[field.name]}
              </motion.span>
            )}
          </motion.div>
        );
      })}

      <motion.button 
        type="submit" 
        className="form-submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? (
          <span className="loading-spinner"></span>
        ) : (
          buttonText
        )}
      </motion.button>
    </form>
  );
};

export default Form;
