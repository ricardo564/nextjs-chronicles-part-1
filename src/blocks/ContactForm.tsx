'use client'

import type { FC } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/schemas/contactSchema'
import Button from '@/components/Button'
import { TextInput } from '@/components/forms/TextInput'
import { EmailInput } from '@/components/forms/EmailInput'
import { PhoneInput } from '@/components/forms/PhoneInput'
import { TextArea } from '@/components/forms/TextArea'

interface ContactFormProps {
  className?: string
  title: string
  titleHighlight: string
  subtitle: string
  formTitle: string
  formSubtitle: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
  sending: boolean
  send: string
}

export const ContactForm: FC<ContactFormProps> = ({ className, title, titleHighlight, subtitle, formTitle, formSubtitle, firstName, lastName, email, phoneNumber, message, sending = false, send }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setTimeout(() => {
        reset()
      }, 3000)
    }
  }

  return (
    <div className={`min-h-screen ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {title} <span className='text-green-500'>{titleHighlight}</span>
          </h1>
          <p className="text-gray-400 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-black/10 via-black/20 to-black/60 backdrop-blur-md rounded-[32px] p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">
            {formTitle}
          </h2>
          <p className="text-gray-400 mb-8">
            {formSubtitle}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TextInput
                label={firstName}
                name="firstName"
                placeholder="First Name"
                disabled={sending}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.firstName?.message}
              />
              <TextInput
                label={lastName}
                name="lastName"
                placeholder="Last Name"
                disabled={sending}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.lastName?.message}
              />
            </div>

            <EmailInput
              label={email}
              name="email"
              placeholder="Email"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.email?.message}
              disabled={sending}
            />

            <PhoneInput
              label={phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.phoneNumber?.message}
              disabled={sending}
            />

            <TextArea
              label={message}
              name="message"
              placeholder="Message"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.message?.message}
              disabled={sending}
            />

            <Button
              type="submit"
              disabled={sending}
              className="w-full"
            >
              {sending ? (
                <span className="animate-pulse">{sending}</span>
              ) : (
                <>
                  <span>{send}</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
