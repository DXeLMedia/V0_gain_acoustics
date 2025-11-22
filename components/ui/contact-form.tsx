"use client"
import React, { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!")
          setIsSuccess(true)
          form.current?.reset()
        },
        (error) => {
          console.log("FAILED...", error.text)
          setIsError(true)
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="bg-card p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2 text-primary">Let's Connect</h2>
      <div className="section-divider max-w-20 mx-auto !bg-primary/50 mb-8"></div>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="full-name" className="text-sm font-medium text-muted-foreground">
              Full Name <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-4">
              <Input id="first-name" name="first_name" placeholder="First Name" required className="flex-1" />
              <Input id="last-name" name="last_name" placeholder="Last Name" required className="flex-1" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
              Phone Number
            </label>
            <Input id="phone" name="phone" placeholder="Contact Number" />
          </div>
          <div className="space-y-2">
            <label htmlFor="enquiry-type" className="text-sm font-medium text-muted-foreground">
              Enquiry Type <span className="text-destructive">*</span>
            </label>
            <Select name="enquiry_type" required>
              <SelectTrigger>
                <SelectValue placeholder="Select Enquiry Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Enquiry">General Enquiry</SelectItem>
                <SelectItem value="Book an Onsite Consult">Book an Onsite Consult</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium text-muted-foreground">
            Meeting Address
          </label>
          <Input id="address" name="address" placeholder="Street Address" />
        </div>

        <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-muted-foreground">
              Preferred Date & Time
            </label>
            <Input id="date" name="date" type="datetime-local" />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
            Leave us a few words <span className="text-destructive">*</span>
          </label>
          <Textarea id="message" name="message" placeholder="Tell us about your project..." required rows={5} />
        </div>

        <div className="text-center">
          <Button type="submit" className="btn-primary w-full md:w-auto px-12 py-6 text-lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
        {isSuccess && <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>}
        {isError && <p className="text-destructive text-center mt-4">Failed to submit the form. Please try again.</p>}
      </form>
    </div>
  )
}

export default ContactForm
