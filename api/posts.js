export const getHomePosts=()=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getHomePosts`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const getMyPosts=(userId)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getMyPosts/${userId}`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const getCommunityPosts=(communityId)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getCommunityPosts/${communityId}`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}


export const getPostDetail=(postId)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getPostDetail/${postId}`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const insertPost=(post)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/insertPost`, {
            method: 'post',
            mode: "cors", 
            body:JSON.stringify({...post}),
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