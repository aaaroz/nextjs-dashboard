'use server';

import { Resend } from 'resend';
import { validateString } from './utils';
import { createElement } from 'react';
import MessagesForm from '@/app/ui/customers/messages-form';

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const messages = formData.get('messages');
  const senderEmail = formData.get('senderEmail');

  if (!validateString(messages, 5000)) {
    return {
      error: 'invalid messages',
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'invalid sender email',
    };
  }

  try {
    await resend.emails.send({
      from: 'Messages from <ZoraSocial@resend.dev>',
      to: 'ram.ardiansyah18@gmail.com',
      subject: 'New message from Zora Ecommerce',
      reply_to: senderEmail as string,
      react: createElement(MessagesForm, {
        messages: messages as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    console.error(error);
    return {
      error: error,
    };
  }
};
