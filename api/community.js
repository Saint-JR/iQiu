export const getFollowCommunity=(userId)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/community/getFollowCommunity/${userId}`, {
            method: 'get',
            mode: "cors", 
        }).then((response) => {
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const getCommunityInfo=(communityId)=>{
    return new Promise((resolve,reject)=>{
        fetch(`http://192.168.1.8:8080/iqiu/community/getCommunityInfo/${communityId}`,{
            method: 'get',
            mode: "cors", 
        }).then((response)=>{
            resolve(response.json())
        }).catch((err)=>{
            reject(err)
        })
    })
}