export const getHomePosts=(offset,limit)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getHomePosts/${offset}/${limit}`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const getMyPosts=(userId,offset,limit)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getMyPosts/${userId}/${offset}/${limit}`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const getCommunityPosts=(communityId,offset,limit)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/posts/getCommunityPosts/${communityId}/${offset}/${limit}`, {
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