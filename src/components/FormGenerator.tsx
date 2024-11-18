// import React, { useState } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import JsonEditor from './JsonEditor';
// import FormField from './FormField';
// import { FormSchema } from '../types/schema';

// const FormGenerator: React.FC = () => {
//   const [schema, setSchema] = useState<FormSchema | null>(null);
//   const methods = useForm();

//   const onSubmit = (data: any) => {
//     console.log('Form Data:', data);
//     alert('Form submitted successfully!');
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div className="w-full md:w-1/2 p-4 border-r border-gray-300">
//         <h2 className="text-xl font-bold">JSON Editor</h2>
//         <JsonEditor onSchemaChange={setSchema} />
//       </div>
//       <div className="w-full md:w-1/2 p-4">
//         <h2 className="text-xl font-bold">Form Preview</h2>
//         {schema && (
//           <FormProvider {...methods}>
//             <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
//               <h3 className="text-lg">{schema.formTitle}</h3>
//               <p>{schema.formDescription}</p>
//               {schema.fields.map(field => (
//                 <FormField key={field.id} field={field} />
//               ))}
//               <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//                 Submit
//               </button>
//             </form>
//           </FormProvider>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormGenerator;



import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import JsonEditor from './JsonEditor';
import FormField from './FormField';
import { FormSchema } from '../types/schema';

const FormGenerator: React.FC = () => {
  // Set initial schema state with a default structure
  const [schema, setSchema] = useState<FormSchema>({
    formTitle: '',
    formDescription: '',
    fields: []
  });
  
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold">JSON Editor</h2>
        <JsonEditor onSchemaChange={setSchema} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold">Form Preview</h2>
        {schema && (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
              <h3 className="text-lg">{schema.formTitle}</h3>
              <p>{schema.formDescription}</p>
              {Array.isArray(schema.fields) && schema.fields.map(field => (
                <FormField key={field.id} field={field} />
              ))}
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Submit
              </button>
            </form>
          </FormProvider>
        )}
      </div>
    </div>
  );
};

export default FormGenerator;