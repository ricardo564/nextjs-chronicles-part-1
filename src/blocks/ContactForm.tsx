'use client'

import type { FC } from 'react'
import { useState } from 'react'
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
}

export const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })
  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSending(true)
      console.log(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setTimeout(() => {
        setIsSending(false)
      }, 3000)
    }
  }

  return (
    <div className={`min-h-screen ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Grow with <span className='text-green-500'>us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Reach out, and let&apos;s cultivate a world of possibilities together!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">
            Let&apos;s nurture connections
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s connect our roots! Reach out and let the power of collaboration bloom in our gardens.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TextInput
                label="First Name"
                name="firstName"
                placeholder="First Name"
                disabled={isSending}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.firstName?.message}
              />
              <TextInput
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                disabled={isSending}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.lastName?.message}
              />
            </div>

            <EmailInput
              label="Email"
              name="email"
              placeholder="Email"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.email?.message}
              disabled={isSending}
            />

            <PhoneInput
              label="Phone Number"
              name="phoneNumber"
              placeholder="Phone Number"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.phoneNumber?.message}
              disabled={isSending}
            />

            <TextArea
              label="Message"
              name="message"
              placeholder="Message"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.message?.message}
              disabled={isSending}
            />

            <Button
              type="submit"
              disabled={isSending}
              className="w-full"
            >
              {isSending ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span>Send it to the garden</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
