// hooks/useContactForm.js
import { useState } from "react";

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submits form data to the server-side endpoint `/api/contact`.
  // Expects JSON response { ok: true } on success.
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (res.ok && json && json.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setStatus(null);
  };

  return {
    formData,
    status,
    isLoading,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
