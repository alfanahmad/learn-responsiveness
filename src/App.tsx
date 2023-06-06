import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

function App() {
    const bgRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const [bgHeight, setBgHeight] = useState<number>(0);
    const [cardHeight, setCardHeight] = useState<number>(0);

    useEffect(() => {
        bgRef.current && setBgHeight(bgRef.current.offsetHeight); // in px
        cardRef.current && setCardHeight(cardRef.current.offsetHeight); // in px
    }, [bgRef, cardRef]);

    const marginTopCard = {
        base: -1 * bgHeight + 16,
        md: cardHeight / -2,
    };

    return (
        <Stack align='center' spacing='8' bg='yellow'>
            {/* header */}
            <Stack
                position='relative'
                spacing='0'
                align='center'
                w='full'
                bg='green'>
                {/* background */}
                <Box
                    ref={bgRef}
                    backgroundImage='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    backgroundPosition='center'
                    filter='auto'
                    blur='2px'
                    w='full'
                    h='20rem'
                    borderBottomRadius='2.5rem'
                />

                {/* card */}
                <Card
                    ref={cardRef}
                    mt={marginTopCard}
                    mx='4'
                    rounded='xl'
                    maxW='4xl'>
                    <CardHeader>
                        {/* breadcrumbs */}
                        <Text>Home &gt; Projects &gt; Best Project</Text>
                    </CardHeader>
                    <CardBody>
                        <Stack
                            direction={{ base: 'column-reverse', md: 'row' }}
                            spacing='8'>
                            {/* details */}
                            <Stack flex='1'>
                                <Heading>Title</Heading>
                                <Box w='60%' h='2rem' bg='gray.100' />
                                <Box w='50%' h='2rem' bg='gray.100' />
                                <Box w='60%' h='2rem' bg='gray.100' />
                                <Box w='50%' h='2rem' bg='gray.100' />
                                <Box w='40%' h='2rem' bg='gray.100' />
                                <Box w='30%' h='2rem' bg='gray.100' />
                                <Box w='60%' h='2rem' bg='gray.100' />
                            </Stack>
                            {/* thumbnail and button */}
                            <Stack flex='1'>
                                <Image
                                    alt='Thumbnail'
                                    src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600'
                                    rounded='lg'
                                />
                                <Button colorScheme='blue'>Button</Button>
                            </Stack>
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>

            {/* content */}
            <Stack maxW='6xl' m='4' bg='cyan'>
                <Stack>
                    <Heading>Title</Heading>
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequuntur, inventore? In hic quis consequuntur
                        quam ut expedita iste deleniti ea explicabo soluta, ex
                        culpa! In maxime aliquid, fuga iure, ipsam voluptatum,
                        vitae dolor et dicta possimus consequuntur perferendis
                        mollitia quas ab! Cupiditate, voluptate obcaecati
                        laboriosam magnam quis eligendi aspernatur nisi.
                    </Text>
                </Stack>
                <Stack>
                    <Heading>Title</Heading>
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequuntur, inventore? In hic quis consequuntur
                        quam ut expedita iste deleniti ea explicabo soluta, ex
                        culpa! In maxime aliquid, fuga iure, ipsam voluptatum,
                        vitae dolor et dicta possimus consequuntur perferendis
                        mollitia quas ab! Cupiditate, voluptate obcaecati
                        laboriosam magnam quis eligendi aspernatur nisi.
                    </Text>
                </Stack>
                <Stack>
                    <Heading>Title</Heading>
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequuntur, inventore? In hic quis consequuntur
                        quam ut expedita iste deleniti ea explicabo soluta, ex
                        culpa! In maxime aliquid, fuga iure, ipsam voluptatum,
                        vitae dolor et dicta possimus consequuntur perferendis
                        mollitia quas ab! Cupiditate, voluptate obcaecati
                        laboriosam magnam quis eligendi aspernatur nisi.
                    </Text>
                </Stack>
                <Stack>
                    <Heading>Title</Heading>
                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequuntur, inventore? In hic quis consequuntur
                        quam ut expedita iste deleniti ea explicabo soluta, ex
                        culpa! In maxime aliquid, fuga iure, ipsam voluptatum,
                        vitae dolor et dicta possimus consequuntur perferendis
                        mollitia quas ab! Cupiditate, voluptate obcaecati
                        laboriosam magnam quis eligendi aspernatur nisi.
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default App;
