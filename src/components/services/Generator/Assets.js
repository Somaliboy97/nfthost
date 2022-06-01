import { Box, Text, Flex, VStack, IconButton, useColorModeValue, Wrap, Icon, Image } from '@chakra-ui/react'
import { useGenerator } from '@/providers/GeneratorProvider'
import { useAssets } from '@/hooks/useAssets'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillImageFill } from 'react-icons/bs'
import Dropzone from 'react-dropzone'

const Assets = () => {
    const { layers, currentLayer } = useGenerator();
    const { DeleteTrait, UploadAssets } = useAssets();

    const containerColor = useColorModeValue('whiteAlpha.500', 'blackAlpha.500');
    const dropContainerColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)');

    return (
        <Flex
            id='assets'
            p='1em'
            bg={containerColor}
            borderRadius='10px'
            boxShadow='md'
            flex='1'
            minW='180px'
            flexDir='column'
            h='100%'
        >
            <Text variant='content_subtitle'>
                Assets
            </Text>
            <Text fontSize='10pt'>
                Current Layer: <span style={{ color: '#08BDD4', fontWeight: 'bold' }}>{layers[currentLayer]?.name}</span>
            </Text>
            {layers[currentLayer]?.images.length > 0 && (
                <Wrap spacing='1em' mt='1em' mb='2em' p='1em'>
                    {layers[currentLayer]?.images?.map((image, idx) => (
                        <Box p='1em' key={idx} bg={dropContainerColor} borderRadius='10px' position='relative'>
                            <VStack>
                                <Image src={image.preview} alt={image.name} w='85px' h='85px' />
                                <Text fontSize='10pt' w='85px' noOfLines='1'>
                                    {image.name}
                                </Text>
                            </VStack>
                            <IconButton 
                                aria-label='Delete Trait' 
                                position='absolute'
                                top='-2.5'
                                right='-2.5'
                                isRound
                                icon={<FaTrashAlt />}
                                bg='rgba(0,0,0,0.2)'
                                size='sm'
                                onClick={() => DeleteTrait(image.name)}
                            />
                        </Box>
                    ))}
                </Wrap>
            )}
            <Dropzone 
                accept={{
                    'image/png': [],
                    'image/webp': []
                }}
                multiple 
                onDrop={files => UploadAssets(files)}
            >
                {({getRootProps, getInputProps}) => (
                    <Flex 
                        w='full' 
                        h='200px' 
                        mt='1em' 
                        bg={dropContainerColor}
                        borderRadius='10px' 
                        justifyContent='center' 
                        alignItems='center' 
                        flexDir='column'
                        cursor='pointer'
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <VStack>
                            <Icon as={BsFillImageFill} fontSize='18pt' />
                            <Text>
                                Drag and drop images here
                            </Text>
                            <Text fontSize='10pt'>
                                Supported Format: .png and .webp
                            </Text>
                        </VStack>
                    </Flex>
                )}
            </Dropzone>
        </Flex>
    )
}

export default Assets