let comments = [];
console.log(comments);
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text} = req.body;
        comments.push({id, text});
        id++;
        console.log(comments);
        res.status(200).json(comments);
    },
    
    read: (req, res) => {
        res.status(200).json(comments);
    },

    update: (req, res) => {
        const {text} = req.body;
        const updateId = req.params.id;
        const commentIndex = comments.findIndex(comment => comment.id == updateId);
        let comment = comments[commentIndex];

        comments[commentIndex] = {
            id: comment.id,
            text: text || comment.text,
        };
        res.status(200).json(comments);
    },

    delete: (req, res) => {
        const deleteId = req.params.id;
        commentIndex = comments.findIndex(comment => comment.id == deleteId);
        comments.splice(commentIndex, 1);
        res.status(200).json(comments);
    }
};