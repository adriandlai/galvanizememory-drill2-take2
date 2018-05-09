const database = require("./database-connection");

module.exports = {
    list(){
        return database("drinks_tb")
    },
    read(id){
        return database("drinks_tb").select().where('id', id).first()

    },
    create(coffee){
        return database("drinks_tb")
            .insert(coffee)
            .returning("*")
            .then(record => record[0])
    },
    update(id, coffee){
        return database("drinks_tb")
        .where('id', id)
        .update(coffee)
        .returning("*")
        .then(record => record[0])
    },
    delete(id){
        return database("drinks_tb").delete().where("id", id);
    }
};
