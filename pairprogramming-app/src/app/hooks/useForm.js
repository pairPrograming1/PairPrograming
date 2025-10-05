"use client";
import { useState } from "react";

export const useForm = (initialState, onSubmit) => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit(formData);
      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setFormData(initialState);
    setStatus(null);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    status,
    reset,
    setFormData,
  };
};
