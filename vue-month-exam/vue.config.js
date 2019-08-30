module.exports = {
    devServer: {
        open: true,
        before(app) {
            let data = require('./src/data/data.json')
            app.get('/list_default', (req, res) => {
                let newData = data.ranklist1;
                res.send({ code: 200, values: newData })
            })
        }
    }
}