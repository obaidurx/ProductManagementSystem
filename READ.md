# Create server Server-side & Client-side 

1. Create an react app ( any name)  for server side
2. Create a folder ( any name) for client side
- `npm init -y` ( client side folder)
- `npm install express cors mongodb`
- `npm install -g nodemon # or using yarn: yarn global add nodemo`
3. Create a file in name `index.js`
4. Go to `package.json` file and add **Tow** script below the **scripts** tag.
- ` "start": "node index.js",`
- `"start-dev": "nodemon index.js",` 
4. Five task you have to do in the index.js file
- `const express=require("express");`
- `const app=express();`
- `const port=process.env.PORT || 5000;`
- `app.get('/',(req,res)=>{  
    res.send('Server is running')
})`
- `app.listen(port,()=>{
    console.log('Running server is Port :',port);
})`




