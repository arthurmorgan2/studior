"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../../schema";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      from_name: "",
      to_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  const onSubmit = (data: {
    from_name: string;
    to_name: string;
    email: string;
    phone_number: string;
    message: string;
  }) => {
    emailjs
      .send(
        "service_5p82xau",
        "template_xi7h6vg",
        {
          from_name: data.from_name,
          to_name: "Melisa Renata",
          message: data.message,
          phone_number: data.phone_number,
          reply_to: data.email,
        },
        "uHLbJdN9g8B0rIvDn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage("Pesan telah terkirim.");
          setAlertType("success");
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("Gagal mengirim pesan, mohon coba lagi.");
          setAlertType("error");
        }
      );
  };

  return (
    <>
      <div className="flex h-full bg-opacity-50 rounded-xl w-100">
        <Card className="w-full bg-gray-100 bg-opacity-50 border-none">
          <CardHeader>
            <CardTitle className="text-4xl md:text-6xl text-[#124980]">
              Köntak Kami
            </CardTitle>
            <CardDescription className="md:text-lg text-sm">
              Kami disini untukmu! Kirimkan pesan kepada kami <br /> menggunakan
              formulir di bawah ini, Atau hubungi kami.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-center w-full"></div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="from_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#124980] font-bold">
                            Nama
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="What Should We Call You?"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#124980] font-bold">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Where Can We Reach You?"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#124980] font-bold">
                            Nomor HP/WA (Opsional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="0898****324"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#124980] font-bold">
                            Pesan
                          </FormLabel>
                          <Textarea
                            {...field}
                            placeholder="Type your message here..."
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="font-bold w-full bg-[#124980]">
                      Kirim
                    </Button>
                    {alertMessage && (
                      <Alert
                        className={`${
                          alertType === "success"
                            ? "bg-transparent"
                            : "bg-red-600"
                        }`}>
                        <FaCheck className="h-4 w-4 text-[#124980]" />
                        <AlertTitle className="font-bold">
                          {alertType === "success" ? "Berhasil" : "Gagal"}
                        </AlertTitle>
                        <AlertDescription>{alertMessage}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactForm;
