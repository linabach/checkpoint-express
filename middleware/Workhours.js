function Workhours(req,res,next){
    let date = new Date()
    let hours = date.getHours()
    let day = date.getDay()

    let oppeningDays=[1,2,3,4,5,]

    if (oppeningDays.includes(day) && hours>=9 && hours<=17)
    {
        return next()
    }
    else {res.redirect("/error")}
}

module.exports=Workhours