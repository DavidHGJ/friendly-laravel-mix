const fs = require('mz/fs')

class FolderMapper
{
    async getFoldersIn(folder)
    {
        return await fs.readdir(folder)
    }
}

module.exports = new FolderMapper;