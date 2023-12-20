import { sendEmail } from '@/app/lib/sendEmail';
import { Button } from '@/app/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Customers Page, that will be the future of this app',
};

export default function Page() {
  return (
    <div>
      <h1>Customers Page</h1>
      <form
        className="flex flex-col gap-2"
        action={async (formData) => {
          'use server';
          await sendEmail(formData);
        }}
      >
        <div className="flex w-[60dvh] flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="senderEmail"
            type="email"
            placeholder="Email"
            className="rounded"
            required
          />
        </div>
        <div className="flex w-[60dvh] flex-col">
          <label htmlFor="messages">Your Messages</label>
          <textarea
            name="messages"
            id="messages"
            placeholder="Your Messages"
            className="rounded"
            required
          />
        </div>
        <Button type="submit" className="w-[60dvh]">
          Submit
        </Button>
      </form>
    </div>
  );
}
