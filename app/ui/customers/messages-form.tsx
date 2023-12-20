import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type MessagesFormProps = {
  messages: string;
  senderEmail: string;
};
const MessagesForm = ({ messages, senderEmail }: MessagesFormProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Messages from your website!</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight text-sky-600">
                You receive the following message from the contact form
              </Heading>
              <Text>{messages}</Text>
              <Hr />
              <Text>The sender email is : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessagesForm;
