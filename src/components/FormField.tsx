import React from 'react';
import { Field } from '../types/schema';
import { useFormContext, FieldError } from 'react-hook-form';

const FormField: React.FC<{ field: Field }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();

  const getErrorMessage = (fieldId: string): string | null => {
    const error = errors[fieldId];
    if (error && typeof error === 'object' && 'message' in error) {
      return error.message as string; // Assert that message is a string
    }
    return null; // Return null instead of undefined
  };

  switch (field.type) {
    case 'text':
    case 'email':
      return (
        <div>
          <label>{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.id, { required: field.required })}
            className="border border-gray-300 p-2 w-full"
          />
          {getErrorMessage(field.id) && (
            <span className="text-red-500">{getErrorMessage(field.id)}</span>
          )}
        </div>
      );
    case 'select':
      return (
        <div>
          <label>{field.label}</label>
          <select {...register(field.id, { required: field.required })} className="border border-gray-300 p-2 w-full">
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {getErrorMessage(field.id) && (
            <span className="text-red-500">{getErrorMessage(field.id)}</span>
          )}
        </div>
      );
    case 'radio':
      return (
        <div>
          <label>{field.label}</label>
          {field.options?.map(option => (
            <div key={option.value}>
              <label>
                <input
                  type="radio"
                  value={option.value}
                  {...register(field.id, { required: field.required })}
                />
                {option.label}
              </label>
            </div>
          ))}
          {getErrorMessage(field.id) && (
            <span className="text-red-500">{getErrorMessage(field.id)}</span>
          )}
        </div>
      );
    case 'textarea':
      return (
        <div>
          <label>{field.label}</label>
          <textarea
            placeholder={field.placeholder}
            {...register(field.id, { required: field.required })}
            className="border border-gray-300 p-2 w-full"
          />
          {getErrorMessage(field.id) && (
            <span className="text-red-500">{getErrorMessage(field.id)}</span>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default FormField;