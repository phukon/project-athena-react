import axios from 'axios';


let PROJECT_ID = "jbb9mv51";
let DATASET = "production";


export const fetchFile = async (data) => {
    try {
        const typeOfDocument = data.get('typeOfDocument');
        const college = data.get('college');
        const branch = data.get('branch');
        const semester = data.get('semester');
        const type = `${branch}-${semester}`

        let QUERY = encodeURIComponent(`*[_type == "${typeOfDocument}" && college == "${college}" && type == "${type}"]{name, college, type, file, description, "pdfUrl": file.asset->url}`);

        const response = await axios.get(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}