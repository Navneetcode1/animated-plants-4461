
import React from 'react';
import { 
      Box,
      IconButton,
      useBreakpointValue,
      Image,
      Flex,
      Grid,
      Heading,
 } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Footer from './Footer';


const dealOfTheDayData = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/49939a83-5bf1-4c78-b55d-40d7545f843e1660744474034-Kurtas--4-.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/d5f885c5-4a54-4634-81da-6333aa51c1a11660744537981-Dresses--13-.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/ca8aa842-a6ed-4c53-b85a-5d7551a650121660744817501-Work-Ready-Shoes--1-.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/ffa236ca-da08-4fb8-bec3-9b4950c943851660745008808-KAMA.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/948bd0a5-5b50-4b1e-93cc-234a9be8cfe11660744976622-Accessories--2-.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/0e56c483-33e8-4ea5-bae0-96020b7b31401660744930158-Dinnerware---Kitchenware.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/9e19d40a-6720-4d62-92e0-32cd1ee6bee91660744897243-Flats---Heels--3-.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/04672f44-d01c-4f5a-b005-8e01c00582261660744864260-Casual-Shoes---Flip-Flops--4-.jpg"
    }
]
const exclusiveBrandsData1 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg"
    },  
]
const exclusiveBrandsData2 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg"
    },  
]
const topPicsData = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"
    }, 
]
const categoryData1 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"
    },
]
const categoryData2 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg"
    },
]
const topBrandsData1 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png"
    },
]
const topBrandsData2 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2021/11/12/2d4b2a2c-9332-4844-bb32-6ccf0e35fef21636697516790-Urbanic-1.jpg"
    },
]
const giftCardsData = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/22/22b3c59a-fa16-434d-b2e1-d8779f1abe871661164884892-Gift-Card-Banner.png"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/ef1e7c6b-bec4-471c-9c36-72fffd975c0c1636738225251-happy-wedding.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg"
    },
]
const kids = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/0175ff89-fac8-46ba-856a-e95253fb0f501647247892132-Kurtas-_-Kurta-Sets.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/971db165-cf95-476c-89d7-e4c9e41be7f51647247892158-Top-Brands-----3.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/d7e692a5-e41d-4c1e-b50c-77d7d2f2ff101647247892167-Tops-_-Tees.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/b4c398d8-fa05-49a9-b92c-6a3385bd43d71647247892116-Dresses.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/d82a5429-eb15-4ae1-86f8-98cb62085d101647247892124-Kids-Wear.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/4b9cb7c1-f624-47e7-9345-50e334aacf5e1647247892141-Shorts-_-Skirts.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/7df8be43-773d-4a93-9e51-e19200b13f641647247892149-Teens-Wear.jpg"
    },
]
const men = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ad181088-f7c7-4510-b10c-4ca597f9c33d1647516418475-SS22-Trends-Men-Printed-Sliders.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/0df04bdd-853b-42fe-a494-00bc329ed1871645776676864-SS22-Trends-Men-Logo-Mania-Joggers.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/43ed9e78-f1d5-4398-94bd-db22cf7165e41646753693317-SS22-TrendsForHim-Textured-Shoes.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2bd946cc-34f4-4958-91ed-91fa41eadd231646753693282-SS22-TrendsForHim-Colourblocked-Top-Wear.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/d158792a-f92a-4eac-b9b1-a0f54e8fd59d1647516418438-SS22-Trends-Men-Military-Inspired-Styles.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/bc7b623e-96e5-4811-8aba-679bf0c8ac401646753693245-SS22-TrendsForHim-Character-Tees.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/85821f6f-0cf0-4100-9527-af1e8e080ae31647516418456-SS22-Trends-Men-Multi-Pocket-Nehru-Jackets.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/21975168-2bdd-4f8d-9567-cb04a0132fbb1645776676882-SS22-Trends-Men-Logo-Mania-Tees.jpg"
    },
]
const women = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fabc0cd1-5535-4ea4-bf36-2b1857f2eb371645776096602-SS22-Trends-Women-Intricate-Threadwork.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/0d98cf21-4407-45e7-9b40-5f1fce278b6d1646753584544-SS22-TrendsForHer-Maxi-_-Mini-Dresses.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/819cc1cd-678b-43d2-aa63-f34b44755e561646753584613-SS22-TrendsForHer-Wide-_-Bootcut-Bottoms.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2db05e12-4981-470f-a7cf-43355c4c3fb31646753584596-SS22-TrendsForHer-Tie-_-Dye-Sarees.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/1a66b994-5b88-4d40-b8d3-cff57b438d4a1646753584579-SS22-TrendsForHer-Summer-Sandals.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/6eed6ace-940e-47d4-8441-a362c2c4fba11647516398904-SS22-Trends-Women-Blouson-Tops.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a39069f5-a7c9-4a57-81a0-bd6f5eb65b061645776096638-SS22-Trends-Women-Minimalist-Jewellery.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/80692309-98b1-4572-905b-6dcac3ecf32a1647516398938-SS22-Trends-Women-Gota-Patti-Kurtas.jpg"
    },
]
const bestBuyData = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/e988c7f2-ba2c-4689-9b16-4562fb2334b81673167109254-HP_Shop-By-Category_02.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/1a02b270-6967-4d29-9f45-15f72aebc66e1673167109264-HP_Shop-By-Category_03.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/0b2f02e5-d5b0-4c5a-90b0-8b277e5d4e9f1673167109275-HP_Shop-By-Category_04.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/b1866f27-9de8-462f-a93a-5202fbf38d221673167109285-HP_Shop-By-Category_05.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/8e0450b5-c63f-4e37-a773-8a065539f2c41673167109297-HP_Shop-By-Category_06.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/c6f948a1-a336-4dbd-9df5-802fa7bee0611673167109308-HP_Shop-By-Category_07.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/4c0055e3-e2bb-4cf7-9603-b44267bf0a851673167109320-HP_Shop-By-Category_08.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/74a4dd77-ed29-4f14-93f3-f7ff1cf22cb81673167109332-HP_Shop-By-Category_09.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/3dbe2f50-5ea3-41fa-b835-935e8e88dbed1673167109341-HP_Shop-By-Category_10.jpg"
    },
    {
        id:10,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/d19c0fce-61f1-4987-895a-8df5ece39e891673167109353-HP_Shop-By-Category_11.jpg"
    },
    {
        id:11,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/46bab40b-6e48-4350-8558-a0f24f597f521673167109363-HP_Shop-By-Category_12.jpg"
    },
    {
        id:12,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/605a0640-1b48-48c0-a569-d70058ff2e711673167109375-HP_Shop-By-Category_13.jpg"
    },
    {
        id:13,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/7bac00be-78c0-4f51-b4cc-2b785f9530981673167109386-HP_Shop-By-Category_14.jpg"
    },
    {
        id:14,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/edd7a1ed-bc37-4a33-b6ed-77354119d37f1673167109397-HP_Shop-By-Category_15.jpg"
    },
    {
        id:15,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/4aebae7d-cac9-4c31-9eaa-dc7bf50210751673167109406-HP_Shop-By-Category_16.jpg"
    },
    {
        id:16,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/b3c54352-88c3-43ef-9d24-77f59816238a1673167109417-HP_Shop-By-Category_17.jpg"
    },
    {
        id:17,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/6740e454-6e54-41f9-a971-86a1b1a166871673167109429-HP_Shop-By-Category_18.jpg"
    },
    {
        id:18,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/aa824a00-9f19-45d6-b114-6250b0d830771673167109439-HP_Shop-By-Category_19.jpg"
    },
    {
        id:19,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/71111ef0-5ab6-498c-b6cd-f2482e69f82a1673167109451-HP_Shop-By-Category_20.jpg"
    },
    {
        id:20,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/ee6014e4-97c5-4093-91b1-8c7623439dc71673167109464-HP_Shop-By-Category_21.jpg"
    },
    {
        id:21,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/5a565264-578c-4e20-bf14-5368569e2f391673167109474-HP_Shop-By-Category_22.jpg"
    },
    {
        id:22,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/9773c8f9-bd7f-49a9-8107-92a03dca81d11673167109484-HP_Shop-By-Category_23.jpg"
    },
    {
        id:23,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/d9ef7ba6-904b-460e-803b-42ed9014f3381673167109494-HP_Shop-By-Category_24.jpg"
    },
    {
        id:24,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/748c9cca-e4a4-478a-b3ae-79f5e4e943de1673167109504-HP_Shop-By-Category_25.jpg"
    },
    {
        id:25,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/798ccf46-4dfb-43b6-93cc-4337c5af39d61673167109513-HP_Shop-By-Category_26.jpg"
    },
    {
        id:26,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/a3074073-3525-46b7-8ef9-efcae8aab9801673167109522-HP_Shop-By-Category_27.jpg"
    },
    {
        id:27,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/0f49791b-49fb-45df-9e34-dd3567bd21e61673167109531-HP_Shop-By-Category_28.jpg"
    },
    {
        id:28,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/46f067c3-a4aa-44a9-9ed0-2587b012b37c1673167109540-HP_Shop-By-Category_29.jpg"
    },
    {
        id:29,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/6a4aea65-4774-4ae4-b775-3db3208631ce1673167109548-HP_Shop-By-Category_30.jpg"
    },
    {
        id:30,
        src:"https://assets.myntassets.com/w_132,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/b0fde03d-e392-46dc-9a54-d5511853e9441673167109556-HP_Shop-By-Category_31.jpg"
    },
]




const mensData1 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/73be32ba-7db4-46a8-8cbd-ee11c356de701673520291749-image_jpeg_360595955.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/86e42d0c-690e-41c5-bf54-b200040f918d1673520309940-image_jpeg639032734.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/c5b1f986-923f-40f0-9f2f-7e53491d7a5b1673520333426-image_jpeg_1311032979.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/96dc9e41-9475-4cc2-9574-4e82951bfbf21673520353614-image_jpeg_2126156007.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/76b4b856-6475-4fa7-ae97-d8de576ef0d51672984200345-Top_casual_Styles-_Levi-s-_Tommy_Min_40.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/6edf9f37-af8d-46fc-b97a-03c5a3e6d1611672984200495-USPA-_FM_Min_60.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/623fea7c-e7c6-4b9f-921e-b56abb96f39c1672984199664-JJ-_Highlander_Min_65.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/46ca5fb8-cfe2-4db3-b1fb-77e41ef5d0d21672984199501-Gant-_Nautica_Min_50.jpg"
    },
    {
        id:10,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/bd2c7bfc-3673-4d21-ae0d-f9611d9c4bc91672984199677-JJ-_M-H_winter_specials_starting_699.jpg"
    }
]
const mensData2 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/c729d245-ddfd-4a87-8f78-e301a4f55a481672925100870-Louis_Philippe_1.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/61659bc8-ba41-4613-90ab-d565caef8a841672925101203-U.S._Polo_Assn..jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/e9663040-1f2b-46fa-bea8-eb6cebcbfec61672925100804-Jack_-_Jones.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/13105046-915d-4d79-8629-f97cfc93ed3c1672925100832-Levis.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/aace67e4-db94-4eb2-af19-869bf03a766c1672925100635-CK_Jeans.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/88224848-384e-41a6-b0fd-4b4441c1d6ba1672925101152-Tommy_Hilfiger_1.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/46dbeed1-d93a-4fad-b8a1-d5ad9da31b7d1672925101099-Skechers.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/31958000-39b6-42c9-a427-4019e358c4ab1672925100645-Crocs.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/97bd2aa7-1ab6-4611-8d10-64513eca45f21672925101285-USPA_Footwear.jpg"
    },
    {
        id:10,
        src:"https://assets.myntassets.com/w_79,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/d584a0d0-6abd-441c-9ac6-581e36f2360a1672925100889-Mango_Man.jpg"
    }
]
const mensData3 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/905f956b-8f44-4cf5-bc3f-8a1176f0af641672983242447-Jeans..jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/71b5b436-ad16-4428-94e5-54678636ec051672983242175-Flip-Flops.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/e6ef9b71-7962-4d9b-b52e-bd78a49cc6a41672983242041-Casual-Shoes.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/af7cdf39-7ffa-407f-afd3-38f7546fda271672983242842-Sports-Shoes.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/5190651d-b648-4420-95f8-f2ee6883dd281672983243076-Trousers_.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/ae9788ec-c09f-466e-9a60-9b4985c9b6151672983242923-Sweatshirts_.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/a2cbd319-4a07-4ed2-9d64-a3e17331fe0b1672983242387-Jackets.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/0d8bc850-4264-441c-a7ee-dd6e3615ebe71672983242881-Sweaters.jpg"
    },
    {
        id:9,
        src:"https://assets.myntassets.com/w_88,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/ef24f2b2-9fb5-4c08-9786-6350742fd0d31672984254612-Shirts.jpg"
    },
]
const mensData4 = [
    {
        id:1,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/ae6d390f-f839-4ee7-8641-fc72557dab801672990786459-Flip-Flops.jpg"
    },
    {
        id:2,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/88ba4f19-0897-4a98-854d-7d448189995e1672990786481-Jackets.jpg"
    },
    {
        id:3,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/b414ce0f-0e89-4791-b506-ede21e1e96521672990786566-Sweatshirts.jpg"
    },
    {
        id:4,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/d4f4d461-99d5-450a-96f7-c8b3b863448e1672990786437-Casual-Shoes.jpg"
    },
    {
        id:5,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/c6476c3b-e53e-4f32-ad96-cb5de58b46361672990786547-Sports-Shoes.jpg"
    },
    {
        id:6,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/f1ec1bf5-c2c1-4bd0-bbe2-66defbdd9ef01672990786502-Jeans.jpg"
    },
    {
        id:7,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/76fb0dc3-3006-4f1c-821b-843f147520e11672990786524-Shirts.jpg"
    },
    {
        id:8,
        src:"https://assets.myntassets.com/w_99,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/4bb149a9-8496-4e5c-b91a-20545debd71a1672990786584-T-Shirts.jpg"
    },
]



// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



function Home(){

   

  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg',
    'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg',

];
       
  

    return(
        <>
        {/* carausal */}
        <Box
        mt={"30px"}
      position={'relative'}
      height={'430px'}
      width={'100%'}
      overflow={"auto"}>
        
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
     
      {/* <IconButton
        bg={"gray"}
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      
      <IconButton
        bg={"gray"}
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"398px"}
            position="relative"
            bgRepeat={"repeat"}
            backgroundPosition="unset"
            backgroundRepeat="space"
            backgroundSize={"cover"}
            backgroundImage={`url(${url})`}
            width={"100%"}/>
        ))}
      </Slider>
    </Box>

        <Heading size={"lg"} textAlign={"start"} mt={"20px"} mb={"20px"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>DEAL OF THE DAY</Heading>

        <Flex w={"12.5%"}>
        {dealOfTheDayData.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>


       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>BEST OF FASHION MYNTRA EXCLUSIVE BRANDS</Heading>


       <Flex w={"12.1%"} gap={"6px"}>
        {exclusiveBrandsData1.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>
       <Flex w={"12.1%"} gap={"6px"}>
        {exclusiveBrandsData2.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>


       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>TOP PICKS</Heading>
      

       <Flex w={"14.25%"}>
        {topPicsData.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>


       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>CATEGORIES TO BAG</Heading>
      

       
       <Flex w={"12.5%"}>
        {categoryData1.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>
       <Flex w={"12.5%"}>
        {categoryData2.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>


      <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>DEALS ON TOP BRANDS</Heading>
       

      <Flex w={"12.5%"}>
        {topBrandsData1.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>
       <Flex w={"12.5%"}>
        {topBrandsData2.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>
      

       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>GIFTING CARDS</Heading>
      

       <Flex w={"25%"}>
        {giftCardsData.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>


       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>TRENDS FOR HER</Heading>



       <Flex w={"12.5%"}>
        {women.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>



       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>TRENDS FOR HIM</Heading>



       <Flex w={"12.5%"}>
        {men.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>



       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>BEST OF KIDSWARE</Heading>



       <Flex w={"14.25%"}>
        {kids.map((el)=>{
            return(
                <Image src={el.src}/>
            )
        })}
       </Flex>



       <Heading size={"lg"} textAlign={"start"} p={"50px"} mt={"10px"} mb={"10px"} color={"#3E4152"} letterSpacing={"4px"}>BEST BUYS</Heading>
       


       <Grid
             
             templateRows='repeat(5, 1fr)'
             templateColumns='repeat(6, 1fr)'
             >
         {bestBuyData.map((el)=>{
            return(
                <Image src={el.src} />
            )
         })}
      </Grid>

        {/* new end */}






        {/* footer */}

         <Footer/>

        {/* footer end */}

    </>
    ) 
}

export default Home;


	