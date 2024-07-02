import * as z from "zod";

export const ContactFormSchema = z.object({
  from_name: z.string().min(1, {
    message: "Silahkan masukan nama anda",
  }),
  email: z.string().email({
    message: "Silakan isi alamat email",
  }),
  phone_number: z.string(),
  message: z.string().min(1).max(500, {
    message: "Anda mencapai batas maksimal",
  }),
});
