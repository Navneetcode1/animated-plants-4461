import { Box, Flex, Heading, Input, Link, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, } from "@chakra-ui/react"

import AddProd from "./Tab1"
import BannUser from "./Tab2"
import RemoveBann from "./Tab3"
import "./AdminPage.css"
import Mendata from "./Mendata"
import Womendata from "./Womendata"

const AdminPage = () => {


    return (<Stack>
        <Stack border="1px solid red" height="70px" display="flex">
            <Flex>
                <Heading size="md">AdminPage</Heading>
                <Link to="/">HomePage</Link>
                <Input type="text" placeholder="Search here . . . ." width="30%" />
            </Flex>
        </Stack>
        <Tabs variant='enclosed' width="50%" margin="auto" border="1px solid red" align="center">
            <TabList>
                <Tab>Add Product</Tab>
                <Tab>Bann User</Tab>
                <Tab>Remove Bann of a User</Tab>

            </TabList>                                               
            <TabPanels>
                <TabPanel>
                    <AddProd />
                </TabPanel>
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