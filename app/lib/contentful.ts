import { IAbout, IBlock3, ILocation, IPurpose, IServiceData, ItopSectionObj, contentfulResponse } from "../variables/Interfaces";

const axios = require('axios');

const spaceId = 'n3fw6fm0294h';
const accessToken = 'wg1rw5VY4qe-WDkXf9fCVv0ldCTKLougbYxF7SY1dGg';

export async function getItems(url: string) {
  try {
    const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        content_type: 'allContent', // Replace with the actual content type ID
        limit: 10 // Number of items to retrieve
      }
    });

    const items: contentfulResponse<ItopSectionObj>[] = response.data.items;
    const result = items.find(e => e.fields.url === url);
    return result?.fields

  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

export async function getServices() {
  try {
    const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        content_type: 'serviceCard', // Replace with the actual content type ID
        limit: 20 // Number of items to retrieve
      }
    });

    const items: contentfulResponse<IServiceData>[] = response.data.items;
    const result = items.map(e => 
      {
        return e.fields
      })
      result.reverse()
    return result

  } catch (error) {
    console.error('Error fetching items:', error);
  }
}


export async function getPurposes() {
  try {
    const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        content_type: 'purpose', // Replace with the actual content type ID
        limit: 10 // Number of items to retrieve
      }
    });

    const items: contentfulResponse<IPurpose>[] = response.data.items;
    const result = items.map(e => 
      {
        return e.fields
      })
      result.reverse()
    return result

  } catch (error) {
    console.error('Error fetching items:', error);
  }
}


export async function getBlock3() {
  try {
    const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        content_type: 'block3', // Replace with the actual content type ID
        limit: 1 // Number of items to retrieve
      }
    });

    const items: contentfulResponse<IBlock3>[] = response.data.items;
    const result = items[0].fields
    return result

  } catch (error) {
    console.error('Error fetching items:', error);
  }
}


export async function getAbout() {
  try {
    const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        content_type: 'about', // Replace with the actual content type ID
        limit: 1 // Number of items to retrieve
      }
    });

    const items: contentfulResponse<IAbout>[] = response.data.items;
    const result = items[0].fields
    return result

  } catch (error) {
    console.error('Error fetching items:', error);
  }
}


export async function getLocation() {
  try {
    const response = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        content_type: 'location', // Replace with the actual content type ID
        limit: 1 // Number of items to retrieve
      }
    });

    const items: contentfulResponse<ILocation>[] = response.data.items;
    const result = items[0].fields
    return result

  } catch (error) {
    console.error('Error fetching items:', error);
  }
}