const timeCalculate=(timeString,extendString)=>{
    const createTime=new Date(timeString)
    // const year=createTime.getFullYear()
    // const month=createTime.getMonth()
    // const day=createTime.getDate()
    // const hour=createTime.getHours()
    // const min=createTime.getMinutes()
    const currentTime=new Date()
    const timeGap=Math.floor((currentTime-createTime)/1000)
    if(timeGap<60)
        return `${extendString}${timeGap}秒前`
    else if(timeGap<3600)
        return `${extendString}${Math.floor(timeGap/60)}分钟前`
    else if(timeGap<86400)
        return `${extendString}${Math.floor(timeGap/3600)}小时前`
    else if(createTime.getFullYear()==currentTime.getFullYear())
        return `${createTime.getMonth()}-${createTime.getDate()}`
    else return `${createTime.getFullYear()}-${createTime.getMonth()}-${createTime.getDate()}`
}

export default timeCalculate