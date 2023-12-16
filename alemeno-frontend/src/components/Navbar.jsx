import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex alignItems="center" justifyContent="space-evenly">
        <Link to={"/"}>
          {" "}
          <Text fontSize="xl" fontWeight="bold">
            All Courses
          </Text>
        </Link>
        <Link to={"/dashboard"}>
          {" "}
          <Text fontSize="xl" fontWeight="bold">
            Student Dashboard
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
