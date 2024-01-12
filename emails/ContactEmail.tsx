import React from "react";

import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Heading,
  Tailwind,
} from "@react-email/components";

interface Props {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const ContactEmail = ({ name, subject, email, message }: Props) => {
  return (
    <Html>
      <Preview>New Message from {name}</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Heading>{subject}</Heading>
            <Text>{message}</Text>
            <Text>My Email is: {email}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
