const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url ==='/'){
        for(let i = 0; i<1000;i++){
            for(let j = 0; i<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('About Page')
    }
    res.end('Error Page')
})

server.listen(5002, ()=>{
    console.log('server is listening on port 5002......');
})