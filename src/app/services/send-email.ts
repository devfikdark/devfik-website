import { baseApi } from "@/lib/api-config";
import { useMutation } from "@tanstack/react-query";
import type { FormSchema } from "../contact-us/_components/contact-form";

export const sendEmail = () =>
  useMutation({
    mutationFn: (body: FormSchema) => baseApi.post("devfik/contact-us", body),
  });
