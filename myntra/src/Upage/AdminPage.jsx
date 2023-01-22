import { Box, Flex, Heading, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, } from "@chakra-ui/react"
import BannUser from "./BanUser"
import "./AdminPage.css"
import Mendata from "./Mendata"
import Womendata from "./Womendata"
import RemoveBann from "./RemoveBanUser"
import { Link, useNavigate } from 'react-router-dom'
const AdminPage = () => {


    return (<Stack>
        <Stack  height="70px" display="flex" >
            <Flex justifyContent="space-around" alignItems="center">
                <Heading size="md">AdminPage</Heading>
                <Link to="/">HomePage</Link>
          
            </Flex>
        </Stack>
        <Flex  marginBottom="5%" width={["80%","60%","50%"]}  justifyContent="center" margin="auto">
        <Box>
        
        <Tabs variant='enclosed'  >
            <TabList>
        
                <Tab>Ban User</Tab>
                <Tab>Ban User List</Tab>

            </TabList>
            <TabPanels>
                <TabPanel>
                    <BannUser />
                </TabPanel>
                <TabPanel>
                    <RemoveBann />
                </TabPanel>
            </TabPanels>
        </Tabs>
      
        </Box>
        </Flex>
        <Tabs align="center">
            <TabList>
                <Tab>Men</Tab>
                <Tab>Women</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Mendata />
                </TabPanel>
                <TabPanel>
                    <Womendata />
                </TabPanel>
            </TabPanels>
        </Tabs>
        
    </Stack>
    )
}

export { AdminPage }