import { formAllListings } from "../adapters/formAdapters";
import { createListingAPI, getAllListingsAPI, getHistoryListingsAPI, getListingApi, updateListingAPI, deleteListingAPI, updateRatingListingAPI } from "../api/listingAPI";
//import { formAllListings } from "../adapters/formAdapters";

export const listingCreateHandlerOnSubmit = async (auth, listing) => {
    try{
        let res = await createListingAPI(listing)
        if(res.status===200){
            return true;
        }
        return false;
    }catch(err){
        if(err.response.data?.isNotLogged){
            auth.logOut();
        }
        
        console.log('Listing create error: '+err.response.data?.error);
        return false;
    }
}   

export const getAllListings = async (auth) => {
    let listings;
    try{
       let res = await getAllListingsAPI();
       listings = res.data.listings;
    }catch(err){
        if(err.response.data?.isNotLogged){
            auth.logOut();
        }
        
        console.log('Listing get all error: '+err.response.data?.error);
    }
    
    return listings;
}  

export const getListing = async (auth, ID) => {
    let listing;
    try{
       let res = await getListingApi(ID);
       listing = res.data.listing;
    }catch(err){
        if(err.response.data?.isNotLogged){
            auth.logOut();
        }
        
        console.log('Get listing error: '+err.response.data?.error);
    }
    
    return listing;
} 

export const getHistoryListings = async (auth) => {
    let listings;
    try{
       let res = await getHistoryListingsAPI();
       listings = res.data.listings;
    }catch(err){
        if(err.response.data?.isNotLogged){
            auth.logOut();
        }
        
        console.log('Listing get all error: '+err.response.data?.error);
    }
    
    return listings;
}  

export const updateListing = async (auth, listing) => {
    try{
        await updateListingAPI(listing);
        return true;
     }catch(err){
         if(err.response?.data?.isNotLogged){
             auth.logOut();
         }
         console.log('Listing update error: '+err.response?.data.error);
     }
     
     return false;
}

export const deleteListing = async (auth, listingID) => {
    try{
        // console.log(listingID)
        await deleteListingAPI(listingID);
        return true;
     }catch(err){
         if(err.response?.data.isNotLogged){
             auth.logOut();
         }
         console.log('Listing delete error: '+err.response?.data.error);
     }
     
     return false;
}

export const updateRatingListing = async (auth, value, idlisting, ratingJSON) => {
    try{
        let body = {};
        body[formAllListings.idlisting] = idlisting;
        
        if(value){
            ratingJSON[auth.user?._id] = value;
        }else{
            delete ratingJSON[auth.user?._id];
        }


        body[formAllListings.valoradoEstudiantes] = ratingJSON;
        let result = await updateRatingListingAPI(body);
        return result.data.average;
     }catch(err){
         if(err.response?.data.isNotLogged){
             auth.logOut();
         }
         console.log(err,'Listing update rating error: '+err.response?.data.error);
     }
     
     return undefined;
}