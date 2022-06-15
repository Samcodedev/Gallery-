// let pictures = document.getElementById("container")
// function getPhoto(){}
// if (pictures){
//     let URL = "https://jsonplaceholder.typicode.com/albums/2/photos"
//     fetch(URL)
//     .then((data) => data.json())
//     .then((photos) => {
//         photos.forEach((photos) => {
//             return `<div><img src="${photos.url}" width="200px" height="200px"></div>`
//         })
//         document.getElementById("ite-count").innerHTML=`There are ${photos.length} photos being shown`
//     })
// }



let nature = document.getElementById("img")
let food = document.getElementById("img2")
let art = document.getElementById("img3")
let animal = document.getElementById("img4")
let device = document.getElementById("img5")
let neon = document.getElementById("img6") 

let list = [
    "./img/f4f6ea72139e48d423b661d6ed20d2f8.jpg",
    "./img/db28111ef29f49a0f5be224edf83e439.jpg",
    "./img/d0bcc93c6ccd142fc4c7e5254c06d129.jpg", 
    "./img/1a7070be96322f31d46d8a85035b3031.jpg", 
    "./img/d0bcc93c6ccd142fc4c7e5254c06d129.jpg", 
    "./img/wallpaper-1.jpg", 
    "./img/wallpaper.jpg", 
    "./img/wallpaper-2.jpg"
]

let natureList = [
    "./nature/6fb76f2a1eea3c6d3d4b84d7ae7f625c.jpg",
    "./nature/366586b3ea5dd56f8fc6300a3afc554a.jpg",
    "./nature/b9e92501e58528f1bb6064930f1df820.jpg",
    "./nature/cef61f898daac796959be1ae150e8cf0.jpg"
]

let foodlist = [
    "./food/1b40b547cc7a3889c69691c176ed275a.jpg",
    "./food/1d8098a4d528b214e21524dec7b4e00b.jpg",
    "./food/3c478c604fb1bea0ec131ff32236ca37.jpg",
    "./food/16c02fd49899520ba881f0a628bbc892.jpg",
    "./food/53ec0aabae1d571727c1025e3d24eee5.jpg",
    "./food/79cabbf9a1f654cc21522d930d7a59ed.jpg",
    "./food/87fcef5de30f0200889f62b9b46fc23c.jpg",
    "./food/8325aaa1aac655ba1c41743eec6369e9.jpg",
    "./food/47286e21e75d4e48f03efe9cc3ddfa5a.jpg",
    "./food/655341e0be6f98ea8db2239dfd57d235.jpg",
    "./food/d37f773249e01f2743d1e9ae94921c8f.jpg",
    "./food/eec90fca9f9a3bc27bcadb300be55a1d.jpg",
    "./food/f2142400010268a4837c040a0a4267e7.jpg"
]

let artlist = [
    "./art/5b75c7f06ecd4e999e31d2ae99028f3f.jpg",
    "./art/34e7fdbc4b71cfa25bd0e5ae1777999c.jpg",
    "./art/image_0b81b7e2-c61c-4ab6-aef3-decb3fe93b8a20220524_091224.jpg",
    "./art/image_40d18650-de15-4896-b699-e5085b6ae8f420220524_091227.jpg",
    "./art/image_6992aec6-b093-435f-a004-54cfb7432fca20220524_091229.jpg",
    "./art/image_553628eb-2fa5-4fee-9e6a-df1fbbcc45cd20220524_091217.jpg",
    "./art/image_b0126bc0-693a-4daf-a43e-2cf958eaca1420220524_091221.jpg",
    "./art/image_bb1b9a94-429c-4d2e-8206-339ea29263b920220524_091234.jpg",
    "./art/image_db9afb3b-0bb1-4151-8822-2b3640e6abb520220524_091232.jpg"
]

let devicelist = [
    "./device/01cfe85437847f3c49d7b96d51acdec1.jpg",
    "./device/2f31c126aeb072c2813fe6b47a5a747f.jpg",
    "./device/7ee6b7c0aa33a7770096315ba80e8c5e.jpg",
    "./device/8d5a8ed5a4119d648233d934b137e50a.jpg",
    "./device/63e91a483bb82eeb52977ff90a943c5c.jpg",
    "./device/196a3581c69777dd5aef067ad735db3d.jpg",
    "./device/ca0152474a3fe0f3f43349bebae725b3.jpg",
    "./device/db28111ef29f49a0f5be224edf83e439.jpg",
    "./device/f4f6ea72139e48d423b661d6ed20d2f8.jpg",
    "./device/wallpaper-2.jpg",
    "./device/faeaeaed9bf03e6baf95dc75dedd6516.jpg",
    "./device/82bd6105dd4dd51eddf057dc08dd8f0b.jpg",
    "./device/769a4322aa49ce4fc810e68a9940020e.jpg",
    "./device/607f83aeaac22f335b7d0b793e6e0d87.jpg",
    "./device/d175a8a4983d2a2504464631c026cea8.jpg",
    "./device/e2d2d109f3c8dfcc4617a8a0196fc2d3.jpg"
]

let timing = [5000,5500,6000,6500,5800,6800,7000]

setInterval(
    function call(){
        let x = natureList.length
        select = natureList[Math.floor(Math.random() * x)]
        nature.setAttribute("src", select)
        // console.log(select)
    }, timing[Math.floor(Math.random() * 7)]
    
)

setInterval(
    function call(){
        let x = foodlist.length
        select = foodlist[Math.floor(Math.random() * x)]
        food.setAttribute("src", select)
        // console.log(select2)
    }, timing[Math.floor(Math.random() * 7)]
)

setInterval(
    function call(){
        let x = artlist.length
        select = artlist[Math.floor(Math.random() * x)]
        art.setAttribute("src", select)
        // console.log(select2)
    }, timing[Math.floor(Math.random() * 7)]
)

setInterval(
    function call(){
        let x = list.length
        select = list[Math.floor(Math.random() * x)]
        animal.setAttribute("src", select)
        // console.log(select2)
    }, timing[Math.floor(Math.random() * 7)]
)

setInterval(
    function call(){
        let x = devicelist.length
        select = devicelist[Math.floor(Math.random() * x)]
        device.setAttribute("src", select)
        // console.log(select2)
    }, timing[Math.floor(Math.random() * 7)]
)

setInterval(
    function call(){
        let x = list.length
        select = list[Math.floor(Math.random() * x)]
        neon.setAttribute("src", select)
        // console.log(select2)
    }, timing[Math.floor(Math.random() * 7)]
)

call()
