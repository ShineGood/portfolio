import { useState } from 'react';
import emailjs from '@emailjs/browser'
import styles from './styles/contactstyle.module.css';
import { validateForm } from '../utils/contactValidation';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Optional: live validation
    const { errors: newErrors } = validateForm({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const placeholders: Record<FieldName, string> = {
    firstname: 'Enter your first name',
    lastname: 'Enter your last name',
    phone: 'Enter your phone number',
    email: 'Enter your email address',
    message: 'Write your message here...',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { errors: validationErrors, isValid } = validateForm(formData);
    setErrors(validationErrors);

    if (!isValid) return;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setFormData({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('There was an error sending your message.');
    }
  };

  type FieldName = 'firstname' | 'lastname' | 'phone' | 'email' | 'message';

  return (
    <>
      <section className={styles.contact}>
        <header>
        <h2>Contact Me</h2>
        <p className={styles.mi}>
          If you have any questions or would like to get in touch, 
          please fill out the form below.
        </p>
        </header>
        {submitted && <p className={styles.success}>Your message has been sent!</p>}

        <form onSubmit={handleSubmit} noValidate>
          <div>
          {(['firstname', 'lastname', 'phone', 'email', 'message'] as FieldName[]).map((field) => (
            <div key={field} className={styles.formGroup}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}*</label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  rows={5}
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? styles.errorInput : ''}
                  placeholder={placeholders[field]}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? styles.errorInput : ''}
                  placeholder={placeholders[field]}
                />
              )}
              {errors[field] && <p className={styles.errorMsg}>{errors[field]}</p>}
            </div>
          ))}
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
            <button 
              type="reset" 
              className={styles.resetBtn}
              onClick={() => {
                setFormData({
                  firstname: '',
                  lastname: '',
                  phone: '',
                  email: '',
                  message: ''
                });
                setErrors({});
                setSubmitted(false);
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </section>

      <footer className={styles.footer}>
          <a href="#">Back to the top</a>
          <p>Thank you for visiting my resume page!</p>
          <p>&copy; KOKOE FIAWOO. All rights reserved.</p>
          <p>Feel free to reach out if you have any questions or would like to collaborate.</p>
          <a href="mailto:kokoe_fiawoo@hotmail.com">Contact Me</a> |{' '}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">GitHub</a> |{' '}
          <a href="https://linkedin.com/in/KokoeFiawoo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </footer>
      </>
  );
};

export default Contact;
