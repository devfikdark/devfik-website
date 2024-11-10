import type { FormSchema } from "../contact-us/_components/contact-form";

import { useMutation } from "@tanstack/react-query";

import { baseApi } from "@/lib/api-config";

export const sendEmail = () =>
  useMutation({
    mutationFn: (body: FormSchema) => baseApi.post("devfik/contact-us", body),
  });
