export async function ApiRequest(url, method, data) {



    try {

        console.log(method)

        if (method === 'POST' || method === 'PUT') {

            console.log('Got here!')

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            return response

        } else {
            const response = await fetch(url, {
                method: method
            })

            return response
        }
    } catch (err) {
        console.log(err)
    }
}