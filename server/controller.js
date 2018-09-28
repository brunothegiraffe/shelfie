module.exports = {

    // getInventory: (req, res) => {
    //     res.status(200).send(`It's working! It's working!!!`)
    // }

    getInventory: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
        .then(response => {
            console.log(response);
            res.status(200).send(response.data)
        })
        .catch(err => {
            res.sendStatus(500)
            console.log(err);
        })
    },
    createProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        dbInstance.create_product([name, description, price, image_url])
        .then(response => {
            console.log(response.data);
            res.status(200);
        })
        .catch(err => {
            res.sendStatus(500);
            console.log(err);
        })
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params
        dbInstance.delete_product(id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.sendStatus(500)
            console.log(err);
        })
    },
    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req;

        dbInstance.update_product([parmas.id, query.desc])
        .then(response => {
            console.log(response);
            res.sendStatus(200)
        })
        .catch(err => {
            res.sendStatus(500)
            console.log(err);
        })
    }
}