import axios from 'axios';

const projectId = "jbb9mv51"
const dataset = "production"



export const fetchFile = async (data) => {
    try {
        const typeOfDocument = data.get('typeOfDocument');
        const college = data.get('college');
        const branch = data.get('branch');
        const semester = data.get('semester');
        const type = `${branch}-${semester}`

        let QUERY1 = encodeURIComponent(`*[_type == "${typeOfDocument}" && college == "${college}" && type == "${type}"]{name, college, type, file, description, "pdfUrl": file.asset->url}`);
        let QUERY2 = encodeURIComponent(`*[_type == "${typeOfDocument}" && type == "${type}"]{name, college, type, file, description, "pdfUrl": file.asset->url}`);

        if(typeOfDocument == "notes") { //ignore eqeqeq error
            const response = await axios.get(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${QUERY1}`)
            return response.data.result;
        } else {
            const response = await axios.get(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${QUERY2}`)
            return response.data.result;
        }
        
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}