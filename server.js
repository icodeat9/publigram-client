const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
const moment = require("moment")
//Para pruebas, hay que editar el package.json y ponerle esto
// "scripts": {
//     "clean": "rimraf dist/*",
//     "build": "webpack --progress --bail --env dist -p",
//     "start": "webpack-dev-server --hot --open"
//   },////
//Para publicar: "start": "node server/server.js"
const path = require("path");
app.use(express.static(path.resolve(__dirname, "build")))

app.get("/", (req, res) => {
    res.send(path.resolve(__dirname, "build", "index.html"))
})

console.log(moment(new Date()).format("YYYY-MM-DDTHH:MM:SS.SSSZ"))

const postEmployee = async (request) => {    
    const headers = {
        "Content-Type": "application/json-patch+json"
    }
    const res = await axios.post("http://asms.logaritmos.net/company-management/api/employees", request, {headers: headers})
    const body = res.data;    
    if (res.status != 201) throw Error(body.message)
    return body;
}

const postContacts = async (request) => {    
    const headers = {
        "Content-Type": "application/json-patch+json"
    }
    const res = await axios.post(`http://asms.logaritmos.net/company-management/api/employees/${request.id}/contacts`, request.form, {headers: headers})
    const body = res.data;    
    if (res.status != 201) throw Error(body.message)
    return body;
}


app.get("/company-management/api/post-employees", (req, res) => {
    console.log(req.query)
    postEmployee(req.query)
        .then(result => {
            res.send({error: false, res: result});
            // console.log(result)
        })
        .catch(err => {
            res.send({error: true})
            console.log(err); 
        })
})

app.get("/company-management/api/post-contacts", (req, res) => {
    console.log(req.query)
    postContacts(req.query)
        .then(result => {
            res.send({error: false, res: result});
            // console.log(result)
        })
        .catch(err => {
            res.send({error: true})
            console.log(err); 
        })
})


getDocumentCategories = async () => {
    const resp = await axios.get("http://asms.logaritmos.net/document-management/api/categories/tree")
    // console.log(resp)
    const body = resp.data;
    if (resp.status != 200) throw Error(body.message);
    return body
}

getDocumentsFiles = async () => {
    const resp = await axios.get("http://asms.logaritmos.net//document-management/api/documents")
    const body = resp.data;
    if (resp.status != 200) throw Error(body.message);
    return body
}

getData = async (type) => {
    const resp = await axios.get(`http://asms.logaritmos.net/company-management/api/${type}`)
    // console.log(resp)
    const body = resp.data;
    if (resp.status != 200) throw Error(body.message);
    return body
}

getLocations = async (id) => {
    const resp = await axios.get(`http://asms.logaritmos.net/company-management/api/companies/${id}/locations`)
    // console.log(resp)
    const body = resp.data;
    if (resp.status != 200) throw Error(body.message);
    return body
}


app.get("/document-management/api/categories/tree", (req, res) => {
    console.log("Dentro")
    getDocumentCategories()
        .then(result => res.send(result))
        .catch(err => {
            res.send(err);
            console.log(err)
        })
})

app.get("/document-management/api/documents", (req, res) => {
    let { category } = req.query;
    getDocumentsFiles(category)
        .then(result => {
            const newResult = result.filter(doc => doc.category == category);
            res.send(newResult)
        })
        .catch(err => {
            res.send(err);
            console.log(err)
        })
})

app.get("/company-management/api", (req, res) => {
    let { tableName } = req.query;
    tableName = tableName == "documentTypes" ? "document-types" : tableName;
    console.log(tableName)
    getData(tableName)
        .then(result => res.send(result))
        .catch(err => {
            res.send(err);
            console.log(err)
        })
})

app.get("/company-management/api/locations", (req, res) => {
    const { id } = req.query;
    getLocations(id)
        .then(result => res.send(result))
        .catch(err => {
            res.send(err);
            console.log(err)
        })
})



app.get("/company-management/api/employees", (req, res) => {
    let { position } = req.query;
    position.toUpperCase();
    getData("employees")
        .then(result => {
            const newResult = result.filter(emp => emp.position.includes(position))
            // const lala = [{nombre: "ronaldo", apellido: "de"}]
            // lala.filter(emp => emp)
            res.send(newResult);
        })
        .catch(err => {
            res.send(err);
            console.log(err)
        })
})








app.listen(port, () => console.log("Listen on port: " + port))