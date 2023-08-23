import path from "path"


//this returns the file extension name
const getExt = path.extname("FS.ts")

console.log(getExt)

const getBase = path.basename('C:\\temp\\myfile.html')
console.log(getBase)

// The path.basename() method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored.

console.log(path.basename('/foo/bar/baz/asdf/quux.html'))
// Returns: 'quux.html'

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'))
//if you set the last parameter to be a wrong ext name , it will return the file name plus the ext name
// Returns: 'quux' 


// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command. Trailing directory separators are ignored, see path.sep.

console.log(path.dirname('/foo/bar/baz/asdf/quux'))
// Returns: '/foo/bar/baz/asdf' 


console.log(path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt',
  }))
  // Returns: 'C:\\path\\dir\\file.txt' 