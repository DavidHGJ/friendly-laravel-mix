const FolderMapper = require('./FolderMapper')

class FriendlyLaraMix
{
    async addFolder(folder)
    {
        let files = FolderMapper.getFoldersIn(folder)

        files
            .then((Listing) => {
                Listing.forEach((item) => {
                    this[item] = item
                })
            })
    }
}

module.exports = new FriendlyLaraMix