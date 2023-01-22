import { Box } from "@chakra-ui/react";
import dealOfTheDayData from "../Utils/dealOfTheDayData.json"
import exclusiveBrandsData1 from "../Utils/exclusiveBrandsData1.json"
import exclusiveBrandsData2 from "../Utils/exclusiveBrandsData2.json"
import topPicsData from "../Utils/topPicsData.json"
import categoryData1 from "../Utils/categoryData1.json"
import categoryData2 from "../Utils/categoryData2.json"
import topBrandsData1 from "../Utils/topBrandsData1.json"
import topBrandsData2 from "../Utils/topBrandsData2.json"
import giftCardsData from "../Utils/giftCardsData.json"
import kids from "../Utils/kids.json"
import men from "../Utils/men.json"
import women from "../Utils/women.json"
import bestBuyData from "../Utils/bestBuyData.json"
import latestData from "../Utils/latestData.json"


import { 
    Image,
    Grid,
    Heading,
} from '@chakra-ui/react';





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



function Main(){




    return <Box>

<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={{ base: '30px', md: '30px', lg: '40px' }} color={"#3E4152"} letterSpacing={"4px"}>DEAL OF THE DAY</Heading>




<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {dealOfTheDayData.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>BEST OF FASHION MYNTRA EXCLUSIVE BRANDS</Heading>



<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {exclusiveBrandsData1.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>
<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {exclusiveBrandsData2.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>TOP PICKS</Heading>



<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(7, 1fr)']}
     >
 {topPicsData.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>CATEGORIES TO BAG</Heading>




<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {categoryData1.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>
<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {categoryData2.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>DEALS ON TOP BRANDS</Heading>



<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {topBrandsData1.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>
<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {topBrandsData2.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>GIFTING CARDS</Heading>



<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4, 1fr)']}
     >
 {giftCardsData.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>TRENDS FOR HER</Heading>





<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {women.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>



<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>TRENDS FOR HIM</Heading>





<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {men.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>



<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>BEST OF KIDSWARE</Heading>





<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(auto)']}
     templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(7, 1fr)']}
     >
 {kids.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>



<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>LATEST IN BEAUTY & GROOMING</Heading>



<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(2, 1fr)']}
     templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(4, 1fr)']}
     >
 {latestData.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>


<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"50px"} color={"#3E4152"} letterSpacing={"4px"}>BEST BUYS</Heading>



<Grid
    
     templateRows={['repeat(auto)','repeat(auto)','repeat(5, 1fr)']}
     templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(6, 1fr)']}
     gap={"0px"}
     alignItem={"center"}
     justifyContent={"center"}
     
     >
 {bestBuyData.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>




<Heading fontSize={[ '18px','22px','26px' ]} textAlign={"start"} p={"40px"} color={"#3E4152"} letterSpacing={"4px"}>SPRING SUMMER SEASON CHECKLIST</Heading>



<Grid
     
     templateRows={['repeat(auto)','repeat(auto)','repeat(2, 1fr)']}
     templateColumns={['repeat(2,1fr)','repeat(4,1fr)','repeat(8, 1fr)']}
     >
 {mensData4.map((el)=>{
    return(
        <Image src={el.src} />
    )
 })}
</Grid>



    </Box>
}

export default Main;