import { useMutation } from "@tanstack/react-query";

import { baseApi } from "@/lib/api-config";
import { FormSchema } from "@/app/contact-us/_components/contact-form";

export const sendEmail = () =>
  useMutation({
    mutationFn: (body: FormSchema) => baseApi.post("devfik/contact-us", body),
  });
