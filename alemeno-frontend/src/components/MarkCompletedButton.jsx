import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { markCompletedAction } from "../redux/action";

const MarkCompletedButton = ({ courseID, studentID }) => {
  const dispatch = useDispatch();
  return (
    <Flex align="center">
      <Button colorScheme="green" variant="outline">
        Mark Completed
      </Button>
    </Flex>
  );
};

export default MarkCompletedButton;
