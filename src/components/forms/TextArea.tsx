import { FC } from 'react'
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
import Label from '@/components/Label'

interface Props {
  name: string
  label?: string
  className?: string
  placeholder?: string
  disabled?: boolean
  error?: string
  register: UseFormRegister<FieldValues>
  rules?: RegisterOptions<FieldValues, Path<FieldValues>>
  rows?: number
}

export const TextArea: FC<Props> = ({
  name,
  label,
  className,
  placeholder,
  disabled = false,
  error,
  register,
  rules,
  rows = 4
}: Props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <Label value={label} htmlFor={name} />}
      <textarea
        {...register(name, rules)}
        id={name}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  )
}
