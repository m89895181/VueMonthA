module.exports = {
    devServer: {
        open: true,
        before(app) {
            let data = require('./src/data/data.json')
            let newData1;
            // app.use(bodyParser.urlencoded({ extended: false }))
            // app.use(bodyParser.json())
            app.get('/list_default', (req, res) => {
                newData1 = data.ranklist1;
                res.send({ code: 200, values: newData1 })
            })
            app.get('/get_detail', (req, res) => {
                let { id } = req.query
                let detailItem = newData1.filter(item => {
                    if (item.bookId * 1 == id * 1) {
                        return item
                    }
                })
                res.send({ values: detailItem })
            })
        }
    }
}