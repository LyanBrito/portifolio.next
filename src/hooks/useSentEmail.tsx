import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Interface para os dados do formulário
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Interface para o resultado do envio
interface SendResult {
  isSending: boolean;
  isSuccess: boolean;
  error: string | null;
  sendEmail: (data: FormData) => Promise<void>;
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PRIMARY_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const useEmailSend = (): SendResult => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: FormData) => {
    setIsSending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      await emailjs.send(
        //@ts-ignore
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        //@ts-ignore
        PRIMARY_KEY
      );
      
      setIsSuccess(true);
      
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError('Falha ao enviar e-mail. Tente novamente.');
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return { isSending, isSuccess, error, sendEmail };
};