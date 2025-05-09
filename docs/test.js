const fs = require('node:fs')
const path = require('node:path')

/**
 * 递归遍历目录并重命名所有遇到的Readme.md文件为README.md
 */
function renameReadmeFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dirPath}`, err)
      return
    }
    files.forEach((file) => {
      const filePath = path.join(dirPath, file)
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for: ${filePath}`, err)
          return
        }
        if (stats.isDirectory()) {
          // 如果是目录，则递归调用
          renameReadmeFiles(filePath)
        }
        else if (file.toLowerCase() === 'readme.md') {
          // 如果是Readme.md文件，则重命名
          const newFilePath = path.join(dirPath, 'README.md')
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(`Error renaming: ${filePath}`, err)
            }
            else {
              console.log(`Renamed: ${filePath} to ${newFilePath}`)
            }
          })
        }
      })
    })
  })
}

// 调用函数，传入你想要开始遍历的目录路径
renameReadmeFiles('docs')
