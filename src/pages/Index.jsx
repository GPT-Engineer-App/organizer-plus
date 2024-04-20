// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Input, Button, Checkbox, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Todo List</Heading>
      <HStack mb={4}>
        <Input placeholder="Add a new task" value={inputValue} onChange={handleInputChange} />
        <Button onClick={handleAddTask} leftIcon={<FaPlus />} colorScheme="blue">
          Add
        </Button>
      </HStack>
      <VStack align="stretch">
        {tasks.map((task) => (
          <HStack key={task.id}>
            <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
            <Text as={task.completed ? "del" : undefined}>{task.text}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
