import fs from "fs"
import path from "path"

fs.readFile(
    path.join(__dirname , "files" , "index.txt"),"utf-8",(error , data):void=>{
        if(error){
            console.log("Failed to read file" , error)
        }else{
            console.log("File gotten" , data)
        }
    }
)



// fs.mkdir("./files", (error): void => {
//     if (error) {
//       console.log("Failed to create Folder" + error);
//     } else {
//       console.log("Folder  Created");
//     }
//   });

fs.writeFile(path.join(__dirname , "./newFolder" , "index.txt"),"this is a new file i created now" , (error ,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log("created")
    }


    const updated = "\nPlease add this next line"

    fs.appendFile(
        path.join(__dirname , "files" , "index.txt"),updated, (error):void =>{
            if(error){
                console.log("there is an error")
            }else{
                console.log("file updated")
            }
        }
    )
})