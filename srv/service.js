const cds = require('@sap/cds')

module.exports = function( ){
    this.on('READ', ['MyService.Categories'], async(request)=>{
        const con = await cds.connect.to('metadata') // no package.json está declarado este cara
        const{Categories} = con.entities
        let ret = await con.run(SELECT('*').from(Categories)) // isso é um GET
        //let ret2 = await con.run(INSERT.into(Categories).entries({})) // isso é um POST
        return ret
    })
}