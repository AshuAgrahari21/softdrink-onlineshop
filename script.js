var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"70% 50%",
        scrub:true,
        // markers:true,
    }
})

tl.to("#fanta",{
  top:"110%",
  left:"-2%"
},"orange")

tl.to("#slice",{
  top:"160%",
  left:"23%"  
},"orange")

tl.to("#orange",{
    width:"20%",
  top:"165%",
  right:"10%"
},"orange")

tl.to("#leaf",{
    top:"110%",
    rotate:"10deg",
    left:"80%"
},"orange")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"0% 95%",
        end:"70% 50%",
        scrub:true,
        // markers:true,
    }
})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-50%",
    top:"110%"
},"ca")
tl2.from("#cocacola",{
    rotate:"-10deg",
    left:"-100%",
    top:"110%"
},"ca")

tl2.from(".lemon2",{
    rotate:"90deg",
    left:"50%",
    top:"110%"
},"ca")

tl2.from("#pepsi",{
    rotate:"10deg",
    left:"100%",
    top:"100%"
},"ca")

tl2.to("#slice",{
    left:"40%",
    top:"205%",
    width:"20vw"
},"ca")

tl2.to("#fanta",{
   width:"35%",
    left:"33%",
    top:"215%"
},"ca")