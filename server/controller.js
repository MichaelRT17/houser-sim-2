module.exports = {

    showHouses: (req, res, next) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send());
    },

    createHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { name, address, city, state, zip, img, mortgage, rent } = req.body;

        db.create_house([name, address, city, state, zip, img, mortgage, rent])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db');

        db.delete_house([req.params.id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },  
    
}