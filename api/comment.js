export const insertComment=(comment)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/comment/insertComment`, {
            method: 'post',
            mode: "cors", 
            body:JSON.stringify({...comment}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}