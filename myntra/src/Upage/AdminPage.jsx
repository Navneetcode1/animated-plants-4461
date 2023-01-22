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
        <Tabs variant='enclosed' width="50%" margin="auto"  align="center">
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