var typing = new Typed('.text', {
    strings:["","Frontend Developer","Backend Developer","Full Stack Developer"],
    
    typeSpeed:70,
    backSpeed:70,
    // backDelay:70,
    loop:true
});

const download_cv=document.getElementById("cv")
// console.log(download_cv);
download_cv.addEventListener("click", ()=> {
    let resumeurl='https://drive.google.com/file/d/1SAJU2W6nJ2r_8fHcHfVydvtWx7o2QAHK/view?usp=drive_link'
    let resumeName='ChandanResume.pdf'

    let anchor =document.createElement('a')
    // console.log(anchor);
    anchor.href=resumeurl;
    anchor.download=resumeName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    
})

const fb_btn = Array.from(document.getElementsByClassName('fb_catch'))
// console.log(fb_btn);
fb_btn.forEach(btn =>{
    btn.addEventListener("click", (e) =>{
        e.preventDefault();
        window.open("https://www.facebook.com/chandan.behera.9022/" , '_blank')
    })
})
const insta_btn =Array.from(document.getElementsByClassName('insta_catch'))
// console.log(insta_btn);
insta_btn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        window.open("https://www.instagram.com/iamchandankum/",'_blank');
    })
})
const wp_btn= Array.from(document.getElementsByClassName('wp_catch'))
// console.log(wp_btn);
wp_btn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        window.open("https://wa.me/918144456977?text=")

    })
})

const lk_btn =Array.from(document.getElementsByClassName('lk_catch'))
// console.log(lk_btn);
lk_btn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        window.open("https://www.linkedin.com/in/chandan-behera-021546270/",'_blank')
    })
})
const gt_btn =Array.from(document.getElementsByClassName('gt_catch'))
// console.log(gt_btn);
gt_btn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        window.open("https://github.com/KumarChandan-6969")
    })
})