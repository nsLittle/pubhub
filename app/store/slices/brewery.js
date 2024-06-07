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
        "id": "2",
        "name": "The Prancing Pony",
        "brewery_type": "Micro",
        "address_1": "5164 Kennedy Ave",
        "address_2": null,
        "address_3": null,
        "city": "Bree",
        "state_province": null,
        "postal_code": "45213",
        "country": "Middle Earth",
        "longitude": "0",
        "latitude": "0",
        "phone": "5555555555",
        "website_url": "http://www.prancingpony.com",
        "state": "Bree",
        "street": "5164 Kennedy Ave"
      }
    ],
    status: 'idle',
    error: null,
  },
  reducers: {}

  //build aync thunk reducers here...
});

export default brewSlice.reducer;