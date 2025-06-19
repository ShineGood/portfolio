// utils/contactValidation.ts

type FormData = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  message: string;
};

type ValidationResult = {
  isValid: boolean;
  errors: { [key: string]: string };
};

const rules: {
  [key: string]: {
    validate: (val: string, formData?: FormData) => boolean;
    message: string;
  };
} = {
  firstname: {
    validate: val => /^[A-Za-z]{2,}$/.test(val),
    message: 'First name must be at least 2 letters (A-Z).',
  },
  lastname: {
    validate: val => /^[A-Za-z]{2,}$/.test(val),
    message: 'Last name must be at least 2 letters (A-Z).',
  },
  email: {
    validate: val => val === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: 'Please enter a valid email address.',
  },
  phone: {
    validate: val => val === '' || /^\d{10}$/.test(val),
    message: 'Phone number must be 10 digits.',
  },
  message: {
    validate: val => val.length >= 10 && val.length <= 500,
    message: 'Message must be between 10 and 500 characters.',
  },
};

export const validateField = (field: string, value: string, formData: FormData): string => {
  if ((field === 'email' || field === 'phone') && !formData.email && !formData.phone) {
    return 'At least one of email or phone must be provided.';
  }

  const rule = rules[field];
  if (!rule) return '';
  return rule.validate(value, formData) ? '' : rule.message;
};

export const validateForm = (formData: FormData): ValidationResult => {
  const errors: { [key: string]: string } = {};

  Object.keys(rules).forEach(field => {
    const value = formData[field as keyof FormData];
    const error = validateField(field, value, formData);
    if (error) {
      errors[field] = error;
    }
  });

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

