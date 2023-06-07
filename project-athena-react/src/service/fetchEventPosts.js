import axios from 'axios';

export const fetchEventPosts = async () => {

    const projectId = 'jbb9mv51';
    const dataset = 'production';

    try {
        let QUERY = encodeURIComponent(
          `*[_type == "eventpost"]
          | order(postedAt desc)
          {
            title,
            roles,
            slug,
            college,
            body,
            description,
            postedAt,
            "imageUrl": mainImage.asset->url
          }`
        );

        const response = await axios.get(
          `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${QUERY}`
        );
        return response.data.result;
      } catch (error) {
        console.log('Error while calling the API:', error.message);
        return null;
      }
}
