import { createSlice } from "@reduxjs/toolkit";

//needs async thunk functions

export const brewSlice =  createSlice({
  name: "breweries",
  initialState: {
    breweries: [
      {
    "id": "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
    "name": "MadTree Brewing 2.0",
    "brewery_type": "regional",
    "address_1": "5164 Kennedy Ave",
    "address_2": null,
    "address_3": null,
    "city": "Cincinnati",
    "state_province": "Ohio",
    "postal_code": "45213",
    "country": "United States",
    "longitude": "-84.4137736",
    "latitude": "39.1885752",
    "phone": "5138368733",
    "website_url": "http://www.madtreebrewing.com",
    "state": "Ohio",
    "street": "5164 Kennedy Ave"
  },
  {
    "id": "6c14ba9d-86b9-4d26-befc-f49838604d3b",
    "name": "The SoCo Taphouse",
    "brewery_type": "brewpub",
    "address_1": "113 E Concho Ave Ste 210",
    "address_2": null,
    "address_3": null,
    "city": "San Angelo",
    "state_province": "Texas",
    "postal_code": "76903-5948",
    "country": "United States",
    "longitude": null,
    "latitude": null,
    "phone": "3257036218",
    "website_url": "http://www.socotaphouse.com",
    "state": "Texas",
    "street": "113 E Concho Ave Ste 210"
  },
  {
      "id": "1d15aa31-6d4c-42c7-b5c7-e0d3fe314e1b",
      "name": "Zero One Ale House",
      "brewery_type": "brewpub",
      "address_1": "20 W Beauregard Ave",
      "address_2": null,
      "address_3": null,
      "city": "San Angelo",
      "state_province": "Texas",
      "postal_code": "76903-5833",
      "country": "United States",
      "longitude": "-100.4372363",
      "latitude": "31.46245419",
      "phone": "3256535123",
      "website_url": null,
      "state": "Texas",
      "street": "20 W Beauregard Ave"
  }
    ],
    status: 'idle',
    error: null,
  },
  reducers: {}

  //build aync thunk reducers here...
});

export default brewSlice.reducer;