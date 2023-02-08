const http = require('http')
const fs = require('fs')
const url = require('url')

const indexPage = fs.readFileSync(`${__dirname}/template/index.html`)
const product1 = fs.readFileSync(`${__dirname}/template/product1.html`)
const product2 = fs.readFileSync(`${__dirname}/template/product2.html`)
const product3 = fs.readFileSync(`${__dirname}/template/product3.html`)
const product4 = fs.readFileSync(`${__dirname}/template/product4.html`)

const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log("URL = " + pathName)
    if(pathName == "/" || pathName == "/home"){
        res.end(indexPage)
    }else if(pathName == "/product"){
        res.end("<h1>Product Details</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum at fugiat quaerat quis perspiciatis dolorem facilis corporis labore, corrupti eius eaque neque magnam? Dignissimos fugiat quae architecto hic odit enim cumque corporis, asperiores molestias nam illum pariatur autem ea voluptas eligendi doloremque rerum itaque harum incidunt exercitationem. Alias, odit.</p>")

    }else if(pathName == "/product1"){
        res.end(product1)
    }else if(pathName == "/product2"){
        res.end(product2)
    }else if(pathName == "/product3"){
        res.end(product3)
    }else if(pathName == "/product4"){
        res.end(product4)
    }
    
    else{
        res.writeHead(404)
        res.end("<h1>Not found 404</h1> <p>you should to try again</p>")
    }
}).listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})

