import Axios from 'axios'

const GetLatestShipmentByEmail = async() => {
    return await Axios.post(
        'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch', 
        {
            "email": "mayankmittal@intugine.com"
        },
        {
            headers : {
                Authorization : 'Bearer tTU3gFVUdP'
            }
        }
    )
}

export default GetLatestShipmentByEmail