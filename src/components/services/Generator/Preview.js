import { Box, Text, Flex, VStack, useColorModeValue, Image, Button } from '@chakra-ui/react'
import { useGenerator } from '@/providers/GeneratorProvider'
import { useGenerate } from '@/hooks/useGenerate'
import { FaRedo } from 'react-icons/fa'

const Preview = () => {
    const { layers } = useGenerator();
    const { RandomPreview } = useGenerate();

    const containerColor = useColorModeValue('whiteAlpha.500', 'blackAlpha.500');
    const dropContainerColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)');

    return (
        <VStack
            id='preview'
            p='1em'
            bg={containerColor}
            borderRadius='10px'
            boxShadow='md'
            flexDir='column'
            h='100%'
            alignItems='flex-start'
        >
            <Text variant='content_subtitle'>
                Preview
            </Text>
            <Text fontSize='10pt'>
                A preview of one of your NFT
            </Text>
            <Box position='relative' w='250px' h='250px' bg={dropContainerColor} borderRadius='10px' mt='1em'>
                {layers?.map((layer, idx) => (
                    <Image 
                        position='absolute' 
                        src={layer.images[Math.floor(Math.random() * layer.images.length)].preview} 
                        alt={`Preview ${idx}`} 
                        boxSize='225px'
                        top='12.5'
                        right='12.5'
                        key={idx}
                    />
                ))}
            </Box>
            <Flex justifyContent='flex-end' w='full'>
                <Button leftIcon={<FaRedo />} size='sm' onClick={RandomPreview}>
                    Random
                </Button>
            </Flex>
        </VStack>
    )
}

export default Preview