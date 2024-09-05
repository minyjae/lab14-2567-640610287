"use client";
import { Pagination, Container, Rating, Text, Title, Space, Textarea, Button, Divider, Group, Autocomplete, Center } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2} style={{ display: 'flex',alignItems: "center", gap: '10px'}}>Food Review 🍕</Title>
        <Space h="sm"/>
      <Title order={4}>Your rating</Title>
      <Rating defaultValue={0} size="lg" display="flex" w="max-content" ml={0.5}/>
        <Space h="sm"/>
      <Textarea
      size="sm"
      label="Your review"
      placeholder="Do you enjoy eating?"
      autosize
      minRows={3}
      maxRows={3}
      mb="sm"
      />
        {/* <Space h="sm"/> */}
      <Button variant="filled" color="orange" size="sm" fs="0.875rem" fw={510}>Submit Review</Button>
        <Divider my="sm"/>
      <Group justify="center">
      <Title order={4} fw={700} >Elon Musk</Title>
      <Rating defaultValue={5} readOnly size="sm" w="max-content"/>
      </Group>
        <Text c="dimmed" ta="center" size="sm">Best pizza in this world. I give you X score.</Text>
        <Divider my="sm"/>
      <Group justify="center">
        <Title order={4} fw={700} >Mark Zuck</Title>
        <Rating defaultValue={4} readOnly size="sm" w="max-content"/>
      </Group>
      <Text c="dimmed" ta="center" size="sm">My favourite part is pepperoni</Text>
      <Space h="sm"/>
      <Group justify="center">
      <Pagination total={20} color="orange" />
      </Group>
        <Text ta="center" my="sm" c="dimmed">
          Copyright © 2024 Jiradate Oratai 640610287
      </Text>
    </Container>
  );
}
