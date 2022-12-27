import { AddIcon, DeleteIcon, StarIcon } from "@chakra-ui/icons";
import {
    Button,
    Divider,
    Flex,
    Heading,
    Img,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
    let sweets = [
        "Black Forest",
        "Desert Cake",
        "Green Muffin",
        "Dark Fantasy",
    ];

    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const toast = useToast();

    return (
        <Flex align="center" flexDirection="column">
            <Flex bgColor="#f2ebe3" w="full" h="20vh" />
            <Flex
                flexDirection={["column", "column", "column", "row"]}
                bgColor="white"
                w={["90vw", "80vw", "85vw", "70vw"]}
                shadow="2xl"
                position={{ lg: "absolute" }}
                top="10vh"
            >
                <Flex
                    p={5}
                    flex={1}
                    flexDirection={["column", "column", "row", "row"]}
                >
                    <Img src="/ping.jpg" p={3} maxH="300px" />
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        flex={1}
                    >
                        <Heading fontSize="xl">Products</Heading>
                        <Text textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer ac elit lorem.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    p={4}
                    flex={1}
                    flexDirection={["column", "column", "row", "row"]}
                >
                    <Img src="/blue.jpg" p={3} maxH="300px" />
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        flex={1}
                    >
                        <Heading fontSize="xl">Products</Heading>
                        <Text textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer ac elit lorem.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    p={4}
                    flex={1}
                    flexDirection={["column", "column", "row", "row"]}
                >
                    <Img src="/yellow.jpg" p={3} maxH="300px" />
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        flex={1}
                    >
                        <Heading fontSize="xl">Products</Heading>
                        <Text textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer ac elit lorem.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex h={["20vh" , "30vh" , "40vh" , "40vh"]} w="90vw" />

            <Heading fontSize="xl">New Products</Heading>

            <Flex mt={5} align="center">
                <StarIcon mx={5} />
            </Flex>

            <Flex
                w={["95vw", "90vw", "85vw", "80vw"]}
                mt={10}
                flexDirection={["column", "column", "row", "row"]}
            >
                {[
                    "/blf.jpg",
                    "/descake.jpg",
                    "/cupacke.jpg",
                    "/darkcake.jpg",
                ].map((pic, index) => {
                    return (
                        <Flex
                            key={index}
                            flexDirection="column"
                            flex={1}
                            boxShadow="md"
                            m={3}
                            align="center"
                            _hover={{
                                boxShadow: "2xl",
                                border: "1px",
                                borderColor: "blackAlpha.400",
                            }}
                        >
                            <Img src={pic} h="400px" w="full" />
                            <Heading my={4} fontSize="xl">
                                {sweets[index]}
                            </Heading>
                            <Heading color="red.400" my={2} fontSize="xl">
                                ${(index + 1) * 28.0}.00
                            </Heading>
                            <Button
                                my={2}
                                leftIcon={
                                    cartItems.includes(sweets[index]) ? (
                                        <DeleteIcon />
                                    ) : (
                                        <AddIcon />
                                    )
                                }
                                mb={5}
                                variant="outline"
                                fontSize="sm"
                                color="red.400"
                                onClick={() => {
                                    if (cartItems.includes(sweets[index])) {
                                        let newItems = [...cartItems];
                                        newItems.splice(
                                            cartItems.indexOf(sweets[index], 1)
                                        );
                                        setCartItems(newItems);
                                        setTotalAmount(
                                            totalAmount - 28 * (index + 1)
                                        );
                                        toast({
                                            title: "Deleted from cart",
                                            status: "info",
                                            isClosable: true,
                                        });
                                    } else {
                                        let newItems = [
                                            ...cartItems,
                                            sweets[index],
                                        ];
                                        setCartItems(newItems);
                                        setTotalAmount(
                                            totalAmount + 28 * (index + 1)
                                        );
                                        toast({
                                            title: "Added to cart",
                                            status: "success",
                                            isClosable: true,
                                        });
                                    }
                                }}
                            >
                                {cartItems.includes(sweets[index])
                                    ? "Delete from Cart"
                                    : "Add to Cart"}
                            </Button>
                        </Flex>
                    );
                })}
            </Flex>
            {cartItems.length > 0 && (
                <Button onClick={() => console.log(cartItems)}>Checkout</Button>
            )}
        </Flex>
    );
}
