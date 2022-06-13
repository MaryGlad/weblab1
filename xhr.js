import axios from "axios";




const getBtn = document.getElementById('get-btn');

const postBtn = document.getElementById('post-btn');

const putBtn = document.getElementById('put-btn');

const deleteBtn = document.getElementById('delete-btn');




let userId = null;




const requestURL = 'http://127.0.0.1:5000/product';




const product = {
    id: "1",
    name: "Mario",
    status: "available",
}




const product_ch = {
    id: "1",
    name: "Mario",
    status: "available",
}




const getData = () => {

    axios.get(`${requestURL}`).then((data) => {

        userId = data.data.id;

        console.log(data);

    })

        .catch((err) => console.log(err));

};




const sendData = () => {

    axios.post(requestURL, product).then((data) => {

        console.log(data);

    })

        .catch((err) => console.log(err));

};




const putData = () => {

    axios.put(`${requestURL}/${userId}`, userChanged).then((data) => {

        console.log(data);

    })

        .catch((err) => console.log(err));

};




const deleteData = () => {

    axios.delete(`${requestURL}/1`).then((data) => {

        userId = data.is;

        console.log(data);

    })

        .catch((err) => console.log(err));

};




getBtn.addEventListener('click', getData);

postBtn.addEventListener('click', sendData);

putBtn.addEventListener('click', putData);

deleteBtn.addEventListener('click', deleteData);
