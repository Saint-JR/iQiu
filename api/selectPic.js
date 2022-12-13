import { launchImageLibrary } from 'react-native-image-picker';


// 上传图片api调用
// async function uploadImageApi(res,id) {
//     // const formData = new FormData();
//     // formData.append('file', {
//     //     uri: params.uri,
//     //     type: params.type,
//     //     name: params.fileName,
//     // });
//     // return await fetch(`http://localhost:8080/iqiu/posts/upload`, {
//     //     method: 'post',
//     //     body: formData,
//     //     headers: {
//     //         'Content-Type': 'multipart/form-data'
//     //     },
//     // }).then((response) => {
//     //     return response.json()
//     // })

//     const formData = new FormData();
//     formData.append('file', {
//         uri: res.uri,
//         type: res.type,
//         name: `${id}.${res.fileName.split(".").slice(-1)}`,
//     });
//     formData.append('userId',id)
//     console.log(formData)
//     return await fetch(`http://192.168.1.8:8080/iqiu/users/uploadAvatar`, {
//         method: 'post',
//         mode: "cors", 
//         body: formData,
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         },
//     }).then((response) => {
//         return response
//     })
// }

const selectPic=(id)=>{
    return new Promise((resolve,reject)=>{
        launchImageLibrary({
            mediaType: 'photo',
            maxWidth: 1000,// 设置选择照片的大小，设置小的话会相应的进行压缩
            maxHeight: 1000,
            quality: 0.8,
            // videoQuality: 'low',
            // includeBase64: true
        }).then((res)=>{
            if(res.didCancel){
                console.log(111)
                reject('Error!')
            }
            console.log(res)
            const formData = new FormData();
            formData.append('file', {
                uri: res.assets[0].uri,
                type: res.assets[0].type,
                name: `${id}.${res.assets[0].fileName.split(".").slice(-1)}`,
            });
            // formData.append('userId',userId)
            console.log(formData)
            resolve(formData)
            // fetch(`http://192.168.1.8:8080/iqiu/users/uploadAvatar`, {
            //     method: 'post',
            //     mode: "cors", 
            //     body: formData,
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     },
            // }).then((response) => {
            //     console.log(response) 
            // })
        })
    })
    
}

export default selectPic