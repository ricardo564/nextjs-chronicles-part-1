import { RegisterOptions, UseFormRegister, FieldValues, Path } from 'react-hook-form'

export interface BaseInputProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>
  label?: string
  className?: string
  placeholder?: string
  disabled?: boolean
  error?: string
  register: UseFormRegister<TFormValues>
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>
}