import { Box, Text, useColorModeValue, Wrap, Flex } from '@chakra-ui/react'
import { useWebsite } from '@/providers/WebsiteProvider'
import Sidebar from './Sidebar'
import Sites from './Sites'
import Template from './Template'

const Website = () => {
    const { currentDashboard } = useWebsite();

    const blueprintBGColor = useColorModeValue('rgb(238,238,238)', 'rgb(12,15,20)');
    const blueprintGridColor = useColorModeValue('linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px)', 'linear-gradient(rgba(0,0,0,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,.5) 2px, transparent 2px), linear-gradient(rgba(0,0,0,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.28) 1px, transparent 1px)');
    const blueprintBorderColor = useColorModeValue('whiteAlpha.300', 'black');
    const blueprintSponsorColor = useColorModeValue('black', 'white');

    return (
        <Box 
            minH='100vh'
            position='relative'
            borderWidth='1px' 
            bgColor={blueprintBGColor}
            bgImage={blueprintGridColor}
            borderColor={blueprintBorderColor}
            backgroundSize='100px 100px, 100px 100px, 20px 20px, 20px 20px'
            backgroundPosition='-2px -2px, -2px -2px, -1px -1px, -1px '
        >
            <Sidebar>
                {currentDashboard === 'sites' && <Sites />}
                {currentDashboard === 'template' && <Template />}
            </Sidebar>
        </Box>
    )
}

export default Website